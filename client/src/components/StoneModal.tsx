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
import React, { ReactNode } from "react";

interface Props {
  isOpen?: boolean;
  header?: ReactNode;
  onClose: VoidFunction;
  confirmText?: string;
  confirmAction?: VoidFunction;
  cancelText?: string;
  cancelAction?: VoidFunction;
  children?: ReactNode;
}

export const StoneModal = ({
  header,
  children,
  confirmAction,
  confirmText = "Confirm",
  cancelAction,
  cancelText = "Cancel",
  isOpen = false,
  onClose,
}: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent bg="transparent">
        <StonesContainer>
          <ModalHeader>
            <BoldedHeader fontSize="1.4em" shadowOffset={3} py="20px">
              {header}
            </BoldedHeader>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            <StonesButton
              stone="stone3"
              width={120}
              height={50}
              buttonProps={{
                onClick: () => {
                  cancelAction?.();
                  onClose();
                },
              }}
              isAnimationOff={true}
            >
              <BoldedHeader
                fontSize="0.5em"
                shadowOffset={3}
                py="20px"
                as="span"
              >
                {cancelText}
              </BoldedHeader>
            </StonesButton>
            <StonesButton
              stone="stone4"
              width={200}
              height={70}
              isAnimationOff={true}
              buttonProps={{ onClick: confirmAction }}
            >
              <BoldedHeader
                fontSize="0.5em"
                shadowOffset={3}
                py="20px"
                as="span"
              >
                {confirmText}
              </BoldedHeader>
            </StonesButton>
          </ModalFooter>
        </StonesContainer>
      </ModalContent>
    </Modal>
  );
};
