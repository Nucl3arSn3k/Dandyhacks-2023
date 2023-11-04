import Head from "next/head";
import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import { BoldedHeader } from "@/components/BoldedHeader";
import ProgressBar from "@/components/progressBar";
import Image from "next/image";

export default function Home() {
  return (
    <VStack>

      <BoldedHeader text="Title Here" fontSize="96px" shadowOffset={10} />
      <ProgressBar percentage={50} />

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
