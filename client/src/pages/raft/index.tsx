import { BoldedHeader } from "@/components/BoldedHeader";
import { SeaBackgroundFullScreen } from "@/components/SeaBackgroundFullScreen";
import { StonesContainer } from "@/components/StonesContainer";
import { ConfirmFileModal } from "@/features/raft/components/ConfirmFileModal";
import { Grid, GridItem, VStack, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["PDF"];

const Raft = () => {
  const [file, setFile] = useState<File | null>(null);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const handleChange = (file: File) => {
    setFile(file);
    onOpen();
  };

  return (
    <>
      <ConfirmFileModal onClose={onClose} isOpen={isOpen} file={file} />
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
              <StonesContainer height={400}>
                <VStack p={5}>
                  <BoldedHeader fontSize="2.5em" shadowOffset={4}>
                    Progress
                  </BoldedHeader>
                </VStack>
              </StonesContainer>
              <FileUploader
                multiple={false}
                handleChange={handleChange}
                name="file"
                types={fileTypes}
              >
                <StonesContainer stone="stone3" height={250}>
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
        </Grid>
        <SeaBackgroundFullScreen />
      </VStack>
    </>
  );
};

export default Raft;
