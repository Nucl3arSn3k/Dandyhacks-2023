import Head from "next/head";
import { Box, Button, Flex, Heading, VStack } from "@chakra-ui/react";
import { BoldedHeader } from "@/components/BoldedHeader";
import ProgressBar from "@/components/progressBar";
import Image from "next/image";
import { motion } from "framer-motion";
import { BobUpAndDown } from "@/components/BobUpAndDown";
import Raft from "@/features/raft/components/Raft";

export default function Home() {
  return (
    <VStack pos="relative" h="100vh">
      <VStack pt="50px">
        <BobUpAndDown>
          <BoldedHeader text="Name it Here!" fontSize="8em" shadowOffset={8} />
        </BobUpAndDown>
        <Button>Start</Button>
        <ProgressBar percentage={50} />
      </VStack>
      <Box pos="absolute" top="80%">
        <Raft />
      </Box>
      {/* <BobUpAndDown
        position="absolute"
        bottom="15%"
        animate={{ translateY: [0, 1, -1, 2, 0] }}
        zIndex={5}
      >
        <Image
          src="/assets/characters/dolphin.png"
          alt="Background"
          width="0"
          height="0"
          sizes="100vw"
          style={{
            width: "115px",
            height: "100px",
          }}
        />
      </BobUpAndDown>
      <BobUpAndDown
        position="absolute"
        bottom="10%"
        animate={{ translateY: [0, 1, -1, 2, 0] }}
      >
        <Image
          src="/assets/raft/raft.png"
          alt="Background"
          width="0"
          height="0"
          sizes="100vw"
          style={{
            width: "300px",
            height: "100px",
          }}
        />
      </BobUpAndDown> */}
      <Image
        src="/assets/background/ocean_bg.png"
        alt="Background"
        width="0"
        height="0"
        sizes="100vw"
        style={{
          width: "100%",
          height: "100vh",
          zIndex: -1,
          position: "absolute",
        }}
      />
    </VStack>
  );
}
