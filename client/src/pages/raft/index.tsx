import { BoldedHeader } from "@/components/BoldedHeader";
import { ChakraMotionDiv } from "@/components/ChakraMotionDiv";
import { ProgressBar } from "@/components/ProgressBar";
import { SeaBackgroundFullScreen } from "@/components/SeaBackgroundFullScreen";
import { StonesButton } from "@/components/StonesButton";
import { StonesContainer } from "@/components/StonesContainer";
import { QUESTS } from "@/consts";
import { BattleReportModal } from "@/features/raft/components/BattleReportModal";
import { ConfirmFileModal } from "@/features/raft/components/ConfirmFileModal";
import { Quest } from "@/types/questsTypes";
import {
  Grid,
  GridItem,
  HStack,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { Raft } from "../../features/raft/components/Raft";
const fileTypes = ["PDF"];

const RaftHomePage = () => {
  const [file, setFile] = useState<File | null>(null);
  const {
    isOpen: isFileModalOpen,
    onClose: onCloseFileModal,
    onOpen: onOpenFileModal,
  } = useDisclosure();
  const [openedReport, setOpenedReport] = useState<Quest | null>(null);

  const {
    isOpen: isReportModalOpen,
    onClose: onCloseReportModal,
    onOpen: onOpenReportModal,
  } = useDisclosure();

  const onSelectViewReport = (quest: Quest) => {
    setOpenedReport(quest);
    onOpenReportModal();
  };

  const handleChange = (file: File) => {
    setFile(file);
    onOpenFileModal();
  };

  return (
    <>
      <BattleReportModal
        quest={openedReport}
        onClose={onCloseReportModal}
        isOpen={isReportModalOpen}
      />
      <ConfirmFileModal
        onClose={onCloseFileModal}
        isOpen={isFileModalOpen}
        file={file}
      />
      <VStack pos="relative" h="100vh" overflow="clip" justify="center">
        <BoldedHeader fontSize="2.5em" shadowOffset={4} py="20px">
          Home Base
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
              <StonesContainer height={420}>
                <VStack p={5} spacing={5}>
                  <BoldedHeader fontSize="2.5em" shadowOffset={4}>
                    Quests
                  </BoldedHeader>
                  {QUESTS.map((quest, idx) => (
                    <HStack key={idx} pos="relative" alignItems="center">
                      <VStack alignItems="flex-start">
                        <BoldedHeader as="h3" fontSize="1.4em" shadowOffset={3}>
                          {quest.title}
                        </BoldedHeader>
                        <ProgressBar percentage={quest.percentageKnown} />
                      </VStack>
                      <StonesButton
                        stone="stone4"
                        width={200}
                        height={90}
                        isAnimationOff={true}
                        buttonProps={{
                          onClick: () => {
                            onSelectViewReport(quest);
                          },
                        }}
                      >
                        <BoldedHeader
                          fontSize="0.5em"
                          shadowOffset={3}
                          py="20px"
                          as="span"
                        >
                          View
                        </BoldedHeader>
                      </StonesButton>
                    </HStack>
                  ))}
                </VStack>
              </StonesContainer>
              <FileUploader
                multiple={false}
                handleChange={handleChange}
                name="file"
                types={fileTypes}
              >
                <StonesContainer stone="stone2" height={250}>
                  <VStack p={10} alignItems="center" h="100%" justify="center">
                    <BoldedHeader fontSize="2em" shadowOffset={3}>
                      Upload Assignment
                    </BoldedHeader>
                    <Image
                      src={`/assets/icons/upload.png`}
                      alt="Background"
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{
                        width: "50px",
                        height: "50px",
                      }}
                    />
                  </VStack>
                </StonesContainer>
              </FileUploader>
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
