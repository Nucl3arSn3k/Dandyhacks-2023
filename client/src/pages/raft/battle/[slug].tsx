import { BoldedHeader } from "@/components/BoldedHeader";
import { StonesContainer } from "@/components/StonesContainer";
import {
  HStack,
  Heading,
  Tooltip,
  VStack,
  useBoolean,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Chat from "@/components/Chat";
import InputStone from "@/components/InputStone";
import { StonesButton } from "@/components/StonesButton";
import { BobUpAndDown } from "@/components/BobUpAndDown";
import Link from "next/link";
import { useRouter } from "next/router";
import { QUESTS } from "@/consts";
import { getSession, useSession } from "next-auth/react";
import { PrismaClient, Prisma, Quest } from "@prisma/client";
import axios from "axios";
import { GetServerSideProps, NextPageContext } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { useUser } from "@/store/useUsers";
import { BattleReportModal } from "@/features/raft/components/BattleReportModal";

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
      questId: questId,
      userEmail: session.user!.email!,
    },
  });

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
  const [quest, setQuest] = useState<any>(initQuest);
  const [history, setHistory] = useState<any>(initQuestMessages);
  const chatEndRef = React.useRef<HTMLDivElement | null>(null);
  let [val, setValue] = React.useState("");
  const router = useRouter();
  const { addCurrency } = useUser();

  const [aiLoading, setAiLoading] = useBoolean(false);

  const scrollToBottom = () => {
    if (chatEndRef.current) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  console.log(history);

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  // if (initialLoad) {
  //   return <div>Loading</div>;
  // }

  const [openedReport, setOpenedReport] = useState<Quest | null>(null);

  const {
    isOpen: isReportModalOpen,
    onClose: onCloseReportModal,
    onOpen: onOpenReportModal,
  } = useDisclosure();

  const onSelectViewReport = (quest: Quest) => {
    setOpenedReport(quest);
    onOpenReportModal();
  };

  return (
    <VStack pos="relative" h="100vh" overflow="clip" justify="center">
      <BattleReportModal
        quest={openedReport}
        onClose={onCloseReportModal}
        isOpen={isReportModalOpen}
        confirmAction={() => {
          router.push(`/raft`);
        }}
        textConfirm="Leave"
      />
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
              <StonesButton
                stone="stone7"
                width={"25rem"}
                headerProps={{ shadowOffset: 3, fontSize: "1.4em" }}
                boxProps={{
                  position: "absolute",
                  left: 0,
                }}
                onClick={async () => {
                  const aiResponse = await axios.post(
                    "/api/createQuestMessage",
                    {
                      questId: questId,
                      question: { msg: "", from: "user" },
                      isFinalPrompt: true,
                      create: false,
                    }
                  );

                  let text = aiResponse.data.data.message;

                  let weaknesses = [];
                  let strengths = [];

                  text.split("\n").forEach((line: string) => {
                    let lineData = line.split(":");
                    let topic = lineData[1].trim();
                    let strength = lineData[2].trim();
                    if (strength == "Weak") {
                      weaknesses.push(topic);
                    } else {
                      strengths.push(topic);
                    }
                  });

                  const data = await axios.post("/api/getQuest", {
                    questId: questId,
                  });

                  const quest = data.data;

                  const updatedQuest = await axios.post("/api/updateQuest", {
                    questId: questId,
                    weaknesses: [...quest.weaknesses, ...weaknesses],
                    strengths: [...quest.strengths, ...strengths],
                  });

                  onSelectViewReport(updatedQuest.data);
                }}
              >
                End Quest
              </StonesButton>
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
                  isAiLoading={historyObj?.isAiLoading}
                />
              ))}
              <div ref={chatEndRef} />
            </VStack>
            <InputStone
              isLoading={aiLoading}
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
                    isAiLoading: false,
                  },
                ]);

                setHistory((prev: any) => [
                  ...prev,
                  {
                    message: "",
                    isUserSender: false,
                    isAiLoading: true,
                  },
                ]);
                addCurrency(10);

                const aiResponse = await axios.post("/api/createQuestMessage", {
                  questId: questId,
                  question: { msg: val, from: "user" },
                  isFinalPrompt: false,
                });
                setValue("");
                setHistory((prev: any) => {
                  const removeAILoading = prev.filter(
                    (msg: any) => !msg.isAiLoading
                  );
                  return [
                    ...removeAILoading,
                    {
                      message: aiResponse.data.data.message,
                      isUserSender: false,
                      isAiLoading: false,
                    },
                  ];
                });

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
