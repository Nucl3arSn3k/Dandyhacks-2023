import { BoldedHeader } from "@/components/BoldedHeader";
import { Box, Flex, VStack } from "@chakra-ui/react";
import React from "react";
import SeaZoomBackground from "@/components/SeaZoomBackground";
import { StonesContainer } from "@/components/StonesContainer";

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
      <StonesContainer marginTop="5rem">
        <VStack p={5} marginTop="3rem">
          <BoldedHeader fontSize="2.5em" shadowOffset={4}>
            Results
          </BoldedHeader>
        </VStack>
        <BattleResults />
      </StonesContainer>
      <SeaZoomBackground />
    </VStack>
  );
};

export default Battle;
