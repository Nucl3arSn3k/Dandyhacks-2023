import { getSession } from "next-auth/react";
import { NextApiRequest, NextApiResponse } from "next";
import { authOptions, prisma } from "./auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  const data = req.body;

  if (!session) {
    res.status(401).json({ error: "You are not authenticated" });
    return;
  }

  if (!session.user?.email) {
    res.status(500).json({ error: "An error occurred while fetching quests." });
  }
  try {
    const quest = await prisma.quest.update({
      where: {
        id: data.questId,
      },
      data: {
        weaknesses: data.weaknesses,
        strengths: data.strengths,
      },
    });
    res.status(200).json(quest);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching quests." });
  }
}
