import Head from "next/head";
import { Box, Button, Flex, Heading, VStack } from "@chakra-ui/react";
import { BoldedHeader } from "@/components/BoldedHeader";
import Image from "next/image";

export default function Home() {
  return (
    <VStack>
      <VStack>
        <BoldedHeader text="Name it Here!" fontSize="96px" shadowOffset={8} />
        <Button>Start</Button>
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
