import { BoldedHeader } from "@/components/BoldedHeader";
import { StonesButton } from "@/components/StonesButton";
import { StonesContainer } from "@/components/StonesContainer";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  isOpen?: boolean;
  file: File | null;
  onClose: VoidFunction;
}

export const ConfirmFileModal = ({ file, isOpen = false, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent bg="transparent">
        <StonesContainer>
          <ModalHeader>
            <BoldedHeader fontSize="1.4em" shadowOffset={3} py="20px">
              Create Quest
            </BoldedHeader>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <BoldedHeader fontSize="1.4em" shadowOffset={3} py="20px" as="p">
              {file?.name}
            </BoldedHeader>
          </ModalBody>
          <ModalFooter>
            <StonesButton
              stone="stone3"
              width={120}
              height={50}
              buttonProps={{ onClick: onClose }}
              isAnimationOff={true}
            >
              <BoldedHeader
                fontSize="0.5em"
                shadowOffset={3}
                py="20px"
                as="span"
              >
                Cancel
              </BoldedHeader>
            </StonesButton>
            <StonesButton
              stone="stone4"
              width={200}
              height={70}
              isAnimationOff={true}
            >
              <BoldedHeader
                fontSize="0.5em"
                shadowOffset={3}
                py="20px"
                as="span"
              >
                Confirm
              </BoldedHeader>
            </StonesButton>
          </ModalFooter>
        </StonesContainer>
      </ModalContent>
    </Modal>
  );
};
