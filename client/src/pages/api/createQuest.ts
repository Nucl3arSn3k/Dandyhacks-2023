// pages/api/quests/create.ts

import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import axios from "axios";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "4mb", // Set desired value here
    },
  },
};

interface CreateQuestData {
  title: string;
  base64: string;
}

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const data: CreateQuestData = req.body;
      const session = await getServerSession(req, res, authOptions);
      console.log(session);
      if (!session) {
        res.status(401).json({ error: "You are not authenticated" });
        return;
      }
      if (!session.user?.email) {
        res.status(500).json({ error: "Could not find user email" });
      }

      const headers = {
        "Content-Type": "application/pdf",
        "Content-Length": Buffer.byteLength(data.base64),
      };
      try {
        const plainText = await axios.post(
          "http://localhost:8000/convert",
          data.base64,
          { headers }
        );
        console.log(plainText);
      } catch (e) {
        console.log(e);
      }

      const createdQuest = await prisma.quest.create({
        data: {
          title: data.title,
          strengths: [],
          // replace w string from base 64
          initialPDFText: "This is the initial",
          weaknesses: [],
          userEmail: session.user!.email!,
        },
        include: {
          QuestMessage: true,
        },
      });

      res.status(201).json(createdQuest);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while creating the Quest." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
