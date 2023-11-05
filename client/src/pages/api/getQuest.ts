import { getSession } from "next-auth/react";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "./auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  const data = req.body;

  if (!session) {
    res.status(401).json({ error: "You are not authenticated" });
    return;
  }

  if (session.user?.email) {
    res.status(500).json({ error: "An error occurred while fetching quests." });
  }
  try {
    const quest = await prisma.quest.findUnique({
      where: {
        id: data.questId,
      },
    });
    res.status(200).json(quest);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching quests." });
  }
}
