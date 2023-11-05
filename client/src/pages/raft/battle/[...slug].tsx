import { BoldedHeader } from "@/components/BoldedHeader";
import { StonesContainer } from "@/components/StonesContainer";
import { HStack, VStack } from "@chakra-ui/react";
import React from "react";
import Chat from "@/components/Chat";
import InputStone from "@/components/InputStone";
import { StonesButton } from "@/components/StonesButton";
import { BobUpAndDown } from "@/components/BobUpAndDown";
import Link from "next/link";
import { useRouter } from "next/router";
import { QUESTS } from "@/consts";

const ChatBattle = ({ task = "biology", msges = [] }) => {
  const router = useRouter();
  const { questId } = router.query;
  let [val, setValue] = React.useState("");
  let [data, setData] = React.useState(
    `quest_${questId}` in QUESTS
      ? QUESTS[`quest_${questId}`]
      : { title: "Biology", conversation: [{ msg: "hi", from: "user" }] }
  );

  React.useEffect(() => {
    setData(
      `quest_${questId}` in QUESTS
        ? QUESTS[`quest_${questId}`]
        : { title: "Biology", conversation: [{ msg: "hi", from: "user" }] }
    );
  }, []);

  const chatEndRef = React.useRef(null);

  const scrollToBottom = () => {
    if (chatEndRef.current) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [data]);

  return (
    <VStack pos="relative" h="100vh" overflow="clip" justify="center">
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
                  Leave
                </StonesButton>
              </Link>
              <BobUpAndDown>
                <BoldedHeader
                  fontSize="2.5em"
                  shadowOffset={4}
                  py="20px"
                  marginTop={"2rem"}
                >
                  Battle of {data.title}
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
              {data.conversation.map((msg, idx) => (
                <Chat key={idx} msg={msg.msg} from={msg.from} />
              ))}
              <div ref={chatEndRef} />
            </VStack>
            <InputStone
              onChange={(e) => setValue(e.target.value)}
              val={val}
              onEnter={() => {
                if (val.trim() == "") {
                  return;
                }
                return setData((data) => {
                  setValue("");
                  return {
                    ...data,
                    conversation: [
                      ...data.conversation,
                      { msg: val, from: "user" },
                    ],
                  };
                });
              }}
            />
          </VStack>
        </VStack>
      </StonesContainer>
    </VStack>
  );
};

export default ChatBattle;
