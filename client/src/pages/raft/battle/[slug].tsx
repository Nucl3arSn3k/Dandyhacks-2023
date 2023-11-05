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
import { useSession } from "next-auth/react";
import { PrismaClient, Prisma } from "@prisma/client";
import axios from "axios";

const BattleChat = () => {
  const router = useRouter();
  const questId = router.query.slug;
  const [initialLoad, setInitialLoad] = useBoolean();
  const [quest, setQuest] = useState<any>(null);
  const [history, setHistory] = useState<any>([]);
  const chatEndRef = React.useRef<HTMLDivElement | null>(null);
  let [val, setValue] = React.useState("");
  let [data, setData] = React.useState([]);

  const [aiLoading, setAiLoading] = useBoolean(true);

  useEffect(() => {
    const getData = async () => {
      console.log("get data");
      setInitialLoad.on();

      const data: any = await axios.post("/api/getAllChatHistory", {
        questId,
      });
      setQuest(data.data.quest);
      setHistory(data.data.questMessages);

      setInitialLoad.off();
    };
    getData();
  }, []);

  console.log(history);

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
