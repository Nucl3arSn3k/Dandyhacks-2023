import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "4mb", // Set desired value here
    },
  },
};

interface CreateQuestData {
  questId: string;
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
      if (!session) {
        res.status(401).json({ error: "You are not authenticated" });
        return;
      }
      if (!session.user?.email) {
        res.status(500).json({ error: "Could not find user email" });
      }
      try {
        // get question on load
        const quest = await prisma.quest.findFirst({
          where: {
            id: data.questId,
            userEmail: session.user!.email!,
          },
        });
        const questMessages = await prisma.questMessage.findMany({
          where: {
            id: data.questId,
            userEmail: session.user!.email!,
          },
        });

        // returns quest and quest messages

        res.status(200).json({ quest, questMessages });
      } catch (e) {
        res.status(500).json({ error: "An error when converting file to PDF" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while creating the Quest." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
