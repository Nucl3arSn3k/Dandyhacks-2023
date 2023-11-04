import { BoldedHeader } from "@/components/BoldedHeader";
import { ChakraMotionDiv } from "@/components/ChakraMotionDiv";
import { SeaBackgroundFullScreen } from "@/components/SeaBackgroundFullScreen";
import { Box, Grid, GridItem, VStack } from "@chakra-ui/react";
import React from "react";
import { Raft } from "../../features/raft/components/Raft";
import { UploadAssignment } from "@/features/raft/components/UploadAssignment";
import { QuestLog } from "@/features/raft/components/QuestLog";
import { WavyText } from "@/components/WavyText";
import { StonesButton } from "@/components/StonesButton";
import { RaftWithViewMap } from "@/features/raft/components/RaftWithViewMap";

const RaftHomePage = () => {
  return (
    <>
      <VStack pos="relative" h="100vh" overflow="clip" justify="center">
        <BoldedHeader fontSize="2.5em" shadowOffset={4} py="20px">
          <WavyText text="Home Base" replay={true} />
        </BoldedHeader>
        <Grid
          maxW="5xl"
          h="100vh"
          p="20px"
          mx="auto"
          templateColumns="repeat(2, 1fr)"
        >
          <GridItem>
            <VStack>
              <QuestLog />
              <UploadAssignment />
            </VStack>
          </GridItem>
          <GridItem>
            <VStack h="100%" pos="relative">
              <RaftWithViewMap />
            </VStack>
          </GridItem>
        </Grid>
        <SeaBackgroundFullScreen />
      </VStack>
    </>
  );
};

export default RaftHomePage;
