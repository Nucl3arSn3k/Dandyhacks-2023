import { Box, HStack, Spinner, VStack } from "@chakra-ui/react";
import { BoldedHeader } from "./BoldedHeader";
import { StonesContainer } from "./StonesContainer";
import Image from "next/image";
import { ChakraMotionDiv } from "./ChakraMotionDiv";

const Chat = ({ msg = "default", from = "user", isAiLoading = false }) => {
  return (
    <ChakraMotionDiv
      animate={{
        opacity: [0, 0.4, 0.8, 1],
        translateY: [20, 0],
      }}
      // @ts-ignore no problem in operation, although type error appears.
      transition={{
        duration: 1.5,
        ease: "easeOut",
      }}
      display="flex"
      alignSelf={from !== "user" ? "flex-start" : "flex-end"}
      alignItems="end"
      maxWidth={"60vw"}
      flexDirection={from !== "user" ? "row" : "row-reverse"}
    >
      <StonesContainer stone="stone5" width="11rem" height="10rem">
        <Image
          src={
            from === "user"
              ? `/assets/characters/monkey.png`
              : `/assets/characters/dolphin.png`
          }
          alt="Background"
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: "5rem", height: "5rem" }}
        />
      </StonesContainer>
      <VStack
        alignItems={from !== "user" ? "flex-start" : "flex-end"}
        gap="0.5rem"
        flex="1"
        maxWidth="70%"
        position={"relative"}
      >
        <BoldedHeader fontSize="1rem" shadowOffset={2}>
          {from == "user" ? "You" : "Delphi The Tutor"}
        </BoldedHeader>
        {isAiLoading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="rgba(95,62,0,0.95)"
            size="xl"
            mb="30px"
          />
        ) : (
          <Box
            borderRadius="1rem"
            border="3px solid #564B4B"
            background="#FFF"
            padding="1.5rem"
            width="100%"
            position="relative"
            boxShadow="0px 3px 0px 0px rgba(95,62,0,0.95)"
            whiteSpace={"pre-wrap"}
            textOverflow={"wrap"}
            mb="20px"
          >
            {msg}
          </Box>
        )}
      </VStack>
    </ChakraMotionDiv>
  );
};

export default Chat;
