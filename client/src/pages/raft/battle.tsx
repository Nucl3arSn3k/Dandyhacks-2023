import { BoldedHeader } from "@/components/BoldedHeader";
import { SeaBackgroundFullScreen } from "@/components/SeaBackgroundFullScreen";
import { Stones2Container } from "@/components/Stones2Container";
import { Box, Flex, Grid, GridItem, Spacer, VStack } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import SeaZoomBackground from "@/components/SeaZoomBackground";

const BattleResults = ({
  weaknesses = ["mechanics", "waves"],
  strengths = ["energy"],
}) => {
  return (
    <Flex w={"70%"} justifyContent={"space-between"} marginTop="2rem">
      <Box>
        <BoldedHeader fontSize="2rem" shadowOffset={4}>
          Strengths
        </BoldedHeader>
        {strengths.map((weakness, i) => (
          <BoldedHeader key={i} fontSize="1.5rem" marginTop={"1rem"}>
            {strengths}
          </BoldedHeader>
        ))}
      </Box>
      <Box>
        <BoldedHeader fontSize="2rem" shadowOffset={4}>
          Weaknesses
        </BoldedHeader>
        {weaknesses.map((weakness, i) => (
          <BoldedHeader key={i} fontSize="1.5rem" marginTop={"1rem"}>
            {weakness}
          </BoldedHeader>
        ))}
      </Box>
    </Flex>
  );
};

const Battle = () => {
  return (
    <VStack pos="relative" h="100vh" overflow="clip" justify="center">
      <Stones2Container
        height={"80vh"}
        width={"70vw"}
        style={{ marginTop: "5rem" }}
      >
        <VStack p={5} style={{ marginTop: "3rem" }}>
          <BoldedHeader fontSize="2.5em" shadowOffset={4}>
            Results
          </BoldedHeader>
        </VStack>
        <BattleResults />
      </Stones2Container>
      <SeaZoomBackground />
    </VStack>
  );
};

export default Battle;
