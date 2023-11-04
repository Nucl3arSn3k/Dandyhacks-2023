import Head from "next/head";
import { Flex, Heading } from "@chakra-ui/react";
import { BoldedHeader } from "@/components/BoldedHeader";
import ProgressBar from "@/components/progressBar";

export default function Home() {
  return (
    <Flex>
      <BoldedHeader text="hello" />
      <ProgressBar percentage={50} />
    </Flex>
  );
}
