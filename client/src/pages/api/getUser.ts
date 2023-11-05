import { getSession } from "next-auth/react";
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
    const user = await prisma.user.findUnique({
      where: {
        email: session.user!.email!,
      },
    });
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred while fetching quests." });
  }
}
