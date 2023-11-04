import { BoldedHeader } from "@/components/BoldedHeader";
import { ProgressBar } from "@/components/ProgressBar";
import { StonesButton } from "@/components/StonesButton";
import { StonesContainer } from "@/components/StonesContainer";
import { QUESTS } from "@/consts";
import { Quest } from "@/types/questsTypes";
import { HStack, VStack, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { BattleReportModal } from "./BattleReportModal";

export const QuestLog = () => {
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

  return (
    <>
      <BattleReportModal
        quest={openedReport}
        onClose={onCloseReportModal}
        isOpen={isReportModalOpen}
      />
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
    </>
  );
};
