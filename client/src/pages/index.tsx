import Head from "next/head";
import { Box, Button, Flex, Heading, VStack } from "@chakra-ui/react";
import { BoldedHeader } from "@/components/BoldedHeader";
import ProgressBar from "@/components/progressBar";
import Image from "next/image";
import { motion } from "framer-motion";
import { BobUpAndDown } from "@/components/BobUpAndDown";

export default function Home() {
  return (
    <VStack>
      <VStack>
        <BobUpAndDown>
          <BoldedHeader text="Name it Here!" fontSize="96px" shadowOffset={8} />
        </BobUpAndDown>
        <Button>Start</Button>
        <ProgressBar percentage={50} /> 
      </VStack>
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
