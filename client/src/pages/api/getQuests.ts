import { getSession } from "next-auth/react";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "./auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ error: "You are not authenticated" });
    return;
  }

  if (session.user?.email) {
    res.status(500).json({ error: "An error occurred while fetching quests." });
  }
  try {
    const quests = await prisma.quest.findMany({
      where: {
        userEmail: session.user!.email!,
      },
    });
    res.status(200).json(quests);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching quests." });
  }
}
