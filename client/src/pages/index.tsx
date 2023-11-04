import Head from "next/head";
import { Box, Button, HStack, VStack } from "@chakra-ui/react";
import { BoldedHeader } from "@/components/BoldedHeader";
import Image from "next/image";
import { BobUpAndDown } from "@/components/BobUpAndDown";
import Raft from "@/features/raft/components/Raft";
import { ChakraMotionDiv } from "@/components/ChakraMotionDiv";
import { WavyText } from "@/components/WavyText";
import { Stones1Button } from "@/components/Stones1Button";
import Link from "next/link";
import { SeaBackgroundFullScreen } from "@/components/SeaBackgroundFullScreen";
import { useRouter } from "next/router";
import { ArrowStone } from "@/components/arrowStone";

export default function Home() {
  const router = useRouter();

  return (
    <VStack pos="relative" h="100vh" overflow="clip">
      <VStack pt="50px" zIndex={10}>
        <BobUpAndDown>
          <BoldedHeader fontSize="8em" shadowOffset={8}>
            <WavyText text="Quiz Voyage" replay={true} />
          </BoldedHeader>
        </BobUpAndDown>
        <HStack>
          <Stones1Button width={400}>Start</Stones1Button>
          <Stones1Button
            width={400}
            buttonProps={{
              onClick: () => {
                router.push("/raft");
              },
            }}
          >
            Resume
          </Stones1Button>
        </HStack>
        <HStack>
          <ArrowStone width={400} rotation={180}>Next</ArrowStone>
        </HStack>
      </VStack>
      <ChakraMotionDiv
        pos="absolute"
        top="80%"
        animate={{
          opacity: [0, 0.5, 0.75, 1, 1],
          translateY: [700, 0],
          translateX: [700, 0],
        }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 1,
          ease: "easeOut",
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
      >
        <Raft hasDolphin hasSail />
      </ChakraMotionDiv>
      <SeaBackgroundFullScreen />
    </VStack>
  );
}
