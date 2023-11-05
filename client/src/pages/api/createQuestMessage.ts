import { getSession } from "next-auth/react";
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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

  if (!session) {
    res.status(401).json({ error: "You are not authenticated" });
    return;
  }

  if (session.user?.email) {
    res.status(500).json({ error: "An error occurred while updating quests." });
  }
  try {
    let arr = msges.map((msg) => ({
      userEmail: session.user!.email!,
      questId: questId,
      isUserSender: msg.from == "user" ? true : false,
      message: msg.msg,
      timestamp: msg.time,
    }));
    const quests = await prisma.questMessage.createMany({
      data: Array.from(arr.values()),
    });
    res.status(200).json(quests);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching quests." });
  }
}
