import { BoldedHeader } from "@/components/BoldedHeader";
import { SeaBackgroundFullScreen } from "@/components/SeaBackgroundFullScreen";
import { StonesContainer } from "@/components/StonesContainer";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import SeaZoomBackground from "@/components/SeaZoomBackground";
import Chat from "@/components/Chat";
import InputStone from "@/components/InputStone";

const StoneBG = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        overflow: "hidden",
        left: 0,
        top: 0,
        zIndex: -1,
      }}
    >
      <Image
        src="/assets/background/ocean_bg_large.png"
        alt="Background"
        width="0"
        height="0"
        sizes="100vw"
        style={{
          zIndex: -1,
          width: "100%",
          height: "100vh",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

const Battle = ({ task = "biology", msges = [] }) => {
  return (
    <VStack pos="relative" h="100vh" overflow="clip" justify="center">
      <StonesContainer
        height={"120vh"}
        width={"110vw"}
        style={{ marginTop: "5rem" }}
        stone="stone2"
      >
        <VStack width="85%" height="105vh">
          <VStack p={5} style={{ marginTop: "3rem" }}>
            <BoldedHeader
              fontSize="2.5em"
              shadowOffset={4}
              py="20px"
              marginTop={"2rem"}
            >
              Battle of {task}
            </BoldedHeader>
          </VStack>
          <VStack width="100%" height="75%" justifyContent={"space-between"}>
            <VStack width="100%" maxHeight="80%" overflow="scroll" gap="1rem">
              <Chat
                msg={`Hello please tell me a little bit about this text format Hello please tell me a little bit about this text format Hello please tell me a little bit about this text format Hello please tell me a little bit about this text format`}
              />
              <Chat
                msg={`Hello please tell me a little bit about this text format Hello please tell me a little bit about this text format Hello please tell me a little bit about this text format Hello please tell me a little bit about this text format`}
              />
              <Chat
                msg={`Hello please tell me a little bit about this text format Hello please tell me a little bit about this text format Hello please tell me a little bit about this text format Hello please tell me a little bit about this text format`}
              />
              <Chat
                msg={`Hello please tell me a little bit about this text format Hello please tell me a little bit about this text format Hello please tell me a little bit about this text format Hello please tell me a little bit about this text format`}
              />
              <Chat
                msg={`Hello please tell me a little bit about this text format Hello please tell me a little bit about this text format Hello please tell me a little bit about this text format Hello please tell me a little bit about this text format`}
              />
              <Chat align="end" />
            </VStack>
            <InputStone />
          </VStack>
        </VStack>
      </StonesContainer>
    </VStack>
  );
};

export default Battle;
