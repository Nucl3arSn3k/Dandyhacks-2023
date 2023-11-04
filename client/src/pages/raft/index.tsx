import { BoldedHeader } from "@/components/BoldedHeader";
import { SeaBackgroundFullScreen } from "@/components/SeaBackgroundFullScreen";
import { Box, Grid, GridItem, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { Raft } from "../../features/raft/components/Raft";
import { UploadAssignment } from "@/features/raft/components/UploadAssignment";
import { QuestLog } from "@/features/raft/components/QuestLog";
import { WavyText } from "@/components/WavyText";
import { RaftWithViewMap } from "@/features/raft/components/RaftWithViewMap";
import { StonesContainer } from "@/components/StonesContainer";
import { Coin } from "@/components/Coin";
import { StonesButton } from "@/components/StonesButton";

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
            <VStack pos="relative" h="100%">
              <Box pos="absolute">
                <StonesContainer height={80} width={300}>
                  <HStack>
                    <BoldedHeader fontSize="1.4em" shadowOffset={3}>
                      199
                    </BoldedHeader>
                    <Box pos="absolute" top="-20px" left="-90px">
                      {/* <Coin /> */}
                    </Box>
                    <StonesButton
                      stone="stone4"
                      width={130}
                      height={60}
                      headerProps={{ fontSize: "0.4em" }}
                    >
                      Shop
                    </StonesButton>
                  </HStack>
                </StonesContainer>
              </Box>
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
