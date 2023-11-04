import { BoldedHeader } from "@/components/BoldedHeader";
import { SeaBackgroundFullScreen } from "@/components/SeaBackgroundFullScreen";
import { Stones2Container } from "@/components/Stones2Container";
import { Grid, GridItem, VStack } from "@chakra-ui/react";
import React from "react";

const Raft = () => {
  return (
    <VStack pos="relative" h="100vh" overflow="clip" justify="center">
      <BoldedHeader fontSize="2.5em" shadowOffset={4} py="20px">
        Home Base
      </BoldedHeader>
      <Grid
        maxW="5xl"
        h="100vh"
        p="20px"
        mx="auto"
        templateColumns="repeat(4, 1fr)"
      >
        <GridItem>
          <Stones2Container height={400}>
            <VStack p={5}>
              <BoldedHeader fontSize="2.5em" shadowOffset={4}>
                Progress
              </BoldedHeader>
            </VStack>
          </Stones2Container>
        </GridItem>
      </Grid>
      <SeaBackgroundFullScreen />
    </VStack>
  );
};

export default Raft;
