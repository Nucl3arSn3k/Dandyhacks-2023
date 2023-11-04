import { BoldedHeader } from "@/components/BoldedHeader";
import { StoneModal } from "@/components/StoneModal";
import React from "react";

interface Props {
  isOpen?: boolean;
  onClose: VoidFunction;
}
export const BattleReport = ({ isOpen, onClose }: Props) => {
  return (
    <StoneModal
      isOpen={isOpen}
      onClose={onClose}
      header={"Create Quest"}
      confirmText="Start"
      confirmAction={() => {}}
    >
      <BoldedHeader fontSize="1.4em" shadowOffset={3} py="20px" as="p">
        Battle Report
      </BoldedHeader>
    </StoneModal>
  );
};
