import { BoldedHeader } from "@/components/BoldedHeader";
import { StoneModal } from "@/components/StoneModal";
import { Quest, SkillType } from "@/types/questsTypes";
import { Grid, GridItem, VStack } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import { Fn } from "@prisma/client/runtime/library";

interface Props {
  isOpen?: boolean;
  onClose: VoidFunction;
  quest: Quest | null;
  confirmAction: () => void;
  textConfirm: string;
}

const SkillList = ({
  skills,
  title,
}: {
  title: string;
  skills?: SkillType[];
}) => {
  return (
    <VStack spacing={0}>
      <BoldedHeader fontSize="1.4em" shadowOffset={2} as="h2">
        {title}
      </BoldedHeader>
      {skills?.map((strength, idx) => (
        <BoldedHeader
          fontSize="1em"
          shadowOffset={2}
          py="20px"
          as="p"
          key={idx}
        >
          {strength}
        </BoldedHeader>
      ))}
    </VStack>
  );
};

export const BattleReportModal = ({
  quest,
  isOpen,
  onClose,
  confirmAction = () => {
    router.push(`/raft/battle?questId=${quest?.id}`);
  },
  textConfirm = "Start",
}: Props) => {
  console.log(quest);
  const router = useRouter();
  return (
    <StoneModal
      isOpen={isOpen}
      onClose={onClose}
      header={`${quest?.title} Quest`}
      confirmText={textConfirm}
      confirmAction={confirmAction}
      height={500}
    >
      <Grid templateColumns="repeat(2, 1fr)" columnGap={10}>
        <GridItem>
          <SkillList title="Strengths" skills={quest?.strengths} />
        </GridItem>
        <GridItem>
          <SkillList title="Weaknesses" skills={quest?.weaknesses} />
        </GridItem>
      </Grid>
    </StoneModal>
  );
};
