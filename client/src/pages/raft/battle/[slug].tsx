import { BoldedHeader } from "@/components/BoldedHeader";
import { StonesContainer } from "@/components/StonesContainer";
import { HStack, Heading, VStack, useBoolean } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Chat from "@/components/Chat";
import InputStone from "@/components/InputStone";
import { StonesButton } from "@/components/StonesButton";
import { BobUpAndDown } from "@/components/BobUpAndDown";
import Link from "next/link";
import { useRouter } from "next/router";
import { QUESTS } from "@/consts";
import { getSession, useSession } from "next-auth/react";
import { PrismaClient, Prisma } from "@prisma/client";
import axios from "axios";
import { GetServerSideProps, NextPageContext } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

interface CreateQuestData {
  questId: string;
}

interface QuestData {
  initQuest: any; // Define the actual type for the quest object
  initQuestMessages: any[]; // Define the actual type for the questMessages array
  questId: string;
}

const prisma = new PrismaClient();

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (!session) {
    return {
      props: { error: "You are not authenticated" },
    };
  }

  if (!session.user?.email) {
    return {
      props: { error: "Could not find user email" },
    };
  }

  if (!session) {
    return {
      redirect: {
        destination: "/", // Redirect to the login page if the user is not authenticated.
        permanent: false,
      },
    };
  }

  const questId = context.params?.slug as string;

  // get question on load
  const quest = await prisma.quest.findUnique({
    where: {
      id: questId,
      userEmail: session.user!.email!,
    },
  });

  const questMessages = await prisma.questMessage.findMany({
    where: {
      id: questId,
      userEmail: session.user!.email!,
    },
  });

  console.log(questMessages);

  return {
    props: {
      initQuest: quest,
      initQuestMessages: questMessages.map((quest) => ({
        ...quest,
        timestamp: JSON.stringify(quest.timestamp),
      })),
      questId,
    },
  };
}
const BattleChat = ({
  initQuest,
  initQuestMessages,
  questId,
  error,
}: QuestData & { error: string }) => {
  const [initialLoad, setInitialLoad] = useBoolean();
  const [quest, setQuest] = useState<any>(initQuest);
  const [history, setHistory] = useState<any>(initQuestMessages);
  const chatEndRef = React.useRef<HTMLDivElement | null>(null);
  let [val, setValue] = React.useState("");

  console.log(initQuestMessages);

  const [aiLoading, setAiLoading] = useBoolean(true);

  const scrollToBottom = () => {
    if (chatEndRef.current) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  if (initialLoad) {
    return <div>Loading</div>;
  }

  return (
    <VStack pos="relative" h="100vh" overflow="clip" justify="center">
      <Heading>{aiLoading ? "ai loading" : "no loading"}</Heading>
      <StonesContainer
        height={"120vh"}
        width={"110vw"}
        style={{ marginTop: "5rem" }}
        stone="stone2"
      >
        <VStack width="85%" height="105vh">
          <VStack p={5} style={{ marginTop: "0" }}>
            <HStack>
              <Link href="/raft">
                <StonesButton
                  stone="stone7"
                  width={"25rem"}
                  headerProps={{ shadowOffset: 3 }}
                  boxProps={{
                    position: "absolute",
                    left: 0,
                  }}
                >
                  End Quest
                </StonesButton>
              </Link>
              <BobUpAndDown>
                <BoldedHeader
                  fontSize="2.5em"
                  shadowOffset={4}
                  py="20px"
                  marginTop={"2rem"}
                >
                  {quest?.title}
                </BoldedHeader>
              </BobUpAndDown>
            </HStack>
          </VStack>
          <VStack
            width="100%"
            height="75%"
            justifyContent={"space-between"}
            maxW="5xl"
          >
            <VStack
              width="100%"
              maxHeight="80%"
              overflow="hidden"
              overflowY="scroll"
              py={5}
              css={{
                "&::-webkit-scrollbar": {
                  width: "4px",
                },
                "&::-webkit-scrollbar-track": {
                  width: "6px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "#564B4B",
                  borderRadius: "24px",
                },
              }}
              gap="1rem"
            >
              {history?.map((historyObj: any, idx: any) => (
                <Chat
                  key={idx}
                  msg={historyObj.message}
                  from={historyObj.isUserSender ? "user" : "bot"}
                />
              ))}
              <div ref={chatEndRef} />
            </VStack>
            <InputStone
              onChange={(e) => setValue(e.target.value)}
              val={val}
              onEnter={async () => {
                if (val.trim() == "") {
                  return;
                }
                setAiLoading.on();
                setHistory((prev: any) => [
                  ...prev,
                  {
                    message: val,
                    isUserSender: true,
                  },
                ]);

                const aiResponse = await axios.post("/api/createQuestMessage", {
                  questId: questId,
                  question: { msg: val, from: "user" },
                  isFinalPrompt: false,
                });

                setHistory((prev: any) => [
                  ...prev,
                  {
                    message: aiResponse.data.message,
                    isUserSender: false,
                  },
                ]);

                setAiLoading.off();
              }}
            />
          </VStack>
        </VStack>
      </StonesContainer>
    </VStack>
  );
};

export default BattleChat;
