import { BoldedHeader } from "@/components/BoldedHeader";
import { ChakraMotionDiv } from "@/components/ChakraMotionDiv";
import { SeaBackgroundFullScreen } from "@/components/SeaBackgroundFullScreen";
import { Box, Grid, GridItem, VStack } from "@chakra-ui/react";
import React from "react";
import { Raft } from "../../features/raft/components/Raft";
import { UploadAssignment } from "@/features/raft/components/UploadAssignment";
import { QuestLog } from "@/features/raft/components/QuestLog";
import { WavyText } from "@/components/WavyText";

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
              <ChakraMotionDiv
                animate={{
                  opacity: [0, 1],
                  translateY: [100, 0],
                }}
                // @ts-ignore no problem in operation, although type error appears.
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                <QuestLog />
              </ChakraMotionDiv>
              <ChakraMotionDiv
                animate={{
                  opacity: [0, 1],
                  translateY: [100, 0],
                }}
                // @ts-ignore no problem in operation, although type error appears.
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                <UploadAssignment />
              </ChakraMotionDiv>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack h="100%" pos="relative">
              <ChakraMotionDiv
                pos="absolute"
                top="80%"
                animate={{
                  opacity: [0, 0.5, 0.75, 1, 1],
                  translateY: [700, 0],
                  translateX: [700, 0],
                }}
                // @ts-ignore no problem in operation, although type error appears.
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                }}
              >
                <Raft hasDolphin hasSail />
              </ChakraMotionDiv>
            </VStack>
          </GridItem>
        </Grid>
        <SeaBackgroundFullScreen />
      </VStack>
    </>
  );
};

export default RaftHomePage;
