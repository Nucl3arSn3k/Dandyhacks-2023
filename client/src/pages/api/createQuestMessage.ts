import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import axios from "axios";
import { text } from "stream/consumers";

const prisma = new PrismaClient();

interface CreateQuestData {
  questId: string;
  question: { from: "user"; msg: string };
  isFinalPrompt?: boolean;
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
    const givenQuestId = data.questId;

    // get question on load
    const quest = await prisma.quest.findFirst({
      where: {
        id: givenQuestId,
        userEmail: session.user!.email!,
      },
    });

    const question = data.question;
    // Create api response for user
    await prisma.questMessage.create({
      data: {
        questId: givenQuestId,
        userEmail: session.user!.email!,
        message: question.msg,
        isUserSender: true,
      },
    });

    const questMessages = await prisma.questMessage.findMany({
      where: {
        id: quest?.id,
        userEmail: session.user!.email!,
      },
      orderBy: {
        timestamp: "asc",
      },
    });

    const parsedQuest = questMessages.map((quest) => ({
      msg: quest.message,
      from: quest.isUserSender ? "user" : "bot",
    }));

    const chatHistory = [...parsedQuest, question];
    const pdfInput = quest?.initialPDFText;
    const isFinalPrompt = data.isFinalPrompt;

    // api response HERE!!
    try {
      const textFromAI = await axios.post("http://localhost:8000/ai", {
        chat_history: chatHistory,
        pdf_input: pdfInput,
        final_prompt: isFinalPrompt,
      });
      console.log(textFromAI.data);
      // create quest message from api response
      const aiResponse = await prisma.questMessage.create({
        data: {
          questId: givenQuestId,
          userEmail: session.user!.email!,
          message: textFromAI.data,
          isUserSender: false,
        },
      });
      res.status(201).json(aiResponse);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ error: "An error occurred while fetching from AI" });
    }
  } catch (error) {
    console.log("error 2");
    res.status(500).json({ error: "An error occurred while fetching quests." });
  }
}
