import { BoldedHeader } from "@/components/BoldedHeader";
import { StoneModal } from "@/components/StoneModal";
import React from "react";

interface Props {
  isOpen?: boolean;
  file: File | null;
  onClose: VoidFunction;
}

export const ConfirmFileModal = ({ file, isOpen = false, onClose }: Props) => {
  return (
    <StoneModal
      isOpen={isOpen}
      onClose={onClose}
      header={"Create Quest"}
      confirmAction={() => {}}
    >
      <BoldedHeader fontSize="1.4em" shadowOffset={3} py="20px" as="p">
        {file?.name}
      </BoldedHeader>
    </StoneModal>
  );
};
