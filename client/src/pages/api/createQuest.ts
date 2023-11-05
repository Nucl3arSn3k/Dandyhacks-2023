// pages/api/quests/create.ts

import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

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
      console.log(req.body);
      const data: CreateQuestData = req.body;

      const session = await getSession({ req });

      if (!session) {
        res.status(401).json({ error: "You are not authenticated" });
        return;
      }

      if (session.user?.email) {
        res.status(500).json({ error: "Could not find user email" });
      }
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
