// pages/api/quests/create.ts

import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { authOptions } from "./auth/[...nextauth]";

interface CreateQuestData {
  title: string;
}

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("here");
  res.status(200).json({ message: "Hello from Next.js!" });
  if (req.method === "POST") {
    try {
      const data: CreateQuestData = req.body;
      const session = await getServerSession(req, res, authOptions);

      if (!session) {
        res.status(401).json({ error: "You are not authenticated" });
        return;
      }

      if (session.user?.email) {
        res.status(500).json({ error: "Could not find user email" });
      }
      console.log("here4");

      const createdQuest = await prisma.quest.create({
        data: {
          title: data.title,
          strengths: [],
          weaknesses: [],
          userEmail: session.user!.email!,
        },
        include: {
          QuestMessage: true,
        },
      });

      console.log("create quest");

      res.status(201).json(createdQuest);
    } catch (error) {
      console.log("error!");
      console.log(error);
      res
        .status(500)
        .json({ error: "An error occurred while creating the Quest." });
    }
  } else {
    console.log("here3");
    res.status(405).json({ error: "Method not allowed" });
  }
}
