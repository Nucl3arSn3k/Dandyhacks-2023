import { BoldedHeader } from "@/components/BoldedHeader";
import { StonesContainer } from "@/components/StonesContainer";
import { VStack, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { ConfirmFileModal } from "./ConfirmFileModal";
import { ChakraMotionDiv } from "@/components/ChakraMotionDiv";

const fileTypes = ["PDF"];

export const UploadAssignment = () => {
  const [file, setFile] = useState<File | null>(null);
  const {
    isOpen: isFileModalOpen,
    onClose: onCloseFileModal,
    onOpen: onOpenFileModal,
  } = useDisclosure();
  const handleChange = (file: File) => {
    setFile(file);
    onOpenFileModal();
  };

  return (
    <>
      <ConfirmFileModal
        onClose={onCloseFileModal}
        isOpen={isFileModalOpen}
        file={file}
      />
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
      </ChakraMotionDiv>
    </>
  );
};
