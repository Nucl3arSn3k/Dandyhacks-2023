import { BoldedHeader } from "@/components/BoldedHeader";
import { StoneModal } from "@/components/StoneModal";
import { Quest, SkillType } from "@/types/questsTypes";
import { Grid, GridItem, VStack } from "@chakra-ui/react";
import React from "react";

interface Props {
  isOpen?: boolean;
  onClose: VoidFunction;
  quest: Quest | null;
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
      <BoldedHeader fontSize="1.4em" shadowOffset={3} as="h2">
        {title}
      </BoldedHeader>
      {skills?.map((strength, idx) => (
        <BoldedHeader
          fontSize="1em"
          shadowOffset={3}
          py="20px"
          as="p"
          key={idx}
        >
          {strength.title}
        </BoldedHeader>
      ))}
    </VStack>
  );
};

export const BattleReportModal = ({ quest, isOpen, onClose }: Props) => {
  return (
    <StoneModal
      isOpen={isOpen}
      onClose={onClose}
      header={`${quest?.title} Quest`}
      confirmText="Start"
      confirmAction={() => {}}
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
