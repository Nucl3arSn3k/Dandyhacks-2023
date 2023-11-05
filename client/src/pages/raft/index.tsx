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
import Link from "next/link";
import { PlayerCoins } from "@/components/PlayerCoins";
import { BobUpAndDown } from "@/components/BobUpAndDown";
import { useUser } from "@/store/useUsers";
import { useRouter } from "next/router";

const RaftHomePage = () => {
  const {
    currency,
  } = useUser();

  return (
    <>
      <VStack pos="relative" h="100vh" overflow="clip" justify="center">
        <BobUpAndDown>
          <BoldedHeader fontSize="2.5em" shadowOffset={4} py="20px">
            <WavyText text="Home Base" replay={true} />
          </BoldedHeader>
        </BobUpAndDown>
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
                <HStack spacing={0}>
                  <PlayerCoins currency={currency} />
                  <Link href="/raft/shop">
                    <StonesButton
                      stone="stone4"
                      width={150}
                      height={70}
                      headerProps={{ fontSize: "1.4em", shadowOffset: 3 }}
                    >
                      Shop
                    </StonesButton>
                  </Link>
                </HStack>
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
