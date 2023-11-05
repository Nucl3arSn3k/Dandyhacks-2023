import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const prisma = new PrismaClient();

interface CreateQuestData {
  questId: string;
}

export default async function handleUpdate(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data: CreateQuestData = req.body;
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401).json({ error: "You are not authenticated" });
    return;
  }
  if (!session.user?.email) {
    res.status(500).json({ error: "Could not find user email" });
  }

  try {
    const questId = data.questId;

    // get question on load
    const quest = await prisma.quest.findFirst({
      where: {
        id: questId,
        userEmail: session.user!.email!,
      },
    });

    // Create api response for user
    const questions = await prisma.questMessage.findMany({
      where: {
        questId: questId,
        userEmail: session.user!.email!,
      },
    });

    res.status(201).json(questions);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching quests." });
  }
}
