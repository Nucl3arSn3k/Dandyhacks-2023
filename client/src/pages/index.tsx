import Head from "next/head";
import { Flex, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex>
      <Heading fontSize="5xl" mb={5} textAlign="center">
        Dandy Hacks
      </Heading>
    </Flex>
  );
}
