import Head from "next/head";
import { Flex, Heading } from "@chakra-ui/react";
import { BoldedHeader } from "@/components/BoldedHeader";

export default function Home() {
  return (
    <Flex>
      <BoldedHeader text="hello" />
    </Flex>
  );
}
