import { Box, HStack, VStack } from "@chakra-ui/react";
import { BoldedHeader } from "./BoldedHeader";
import { StonesButton } from "./StonesButton";
import { StonesContainer } from "./StonesContainer";
import Image from "next/image";

const style = {
  borderRadius: "1rem",
  border: "3px solid #564B4B",
  background: "#FFF",
  padding: "1.5rem",
  width: "100%",
};

const Chat = ({ msg = "default", from = "user" }) => {
  return (
    <HStack
      alignSelf={from == "user" ? "flex-start" : "flex-end"}
      alignItems="end"
      maxWidth={"70%"}
      flexDirection={from == "user" ? "row" : "row-reverse"}
    >
      <StonesContainer stone="stone5" width="11rem" height="10rem">
        {from == "user" ? (
          <Image
            src={`/assets/characters/monkey.png`}
            alt="Background"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "5rem", height: "5rem" }}
          />
        ) : (
          <Image
            src={`/assets/characters/dolphin.png`}
            alt="Background"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "5rem", height: "5rem" }}
          />
        )}
      </StonesContainer>
      <VStack
        alignItems={from == "user" ? "flex-start" : "flex-end"}
        flex={1}
        gap="0.5rem"
      >
        <BoldedHeader fontSize="1rem" shadowOffset={4}>
          {from == "user" ? "momo" : "jeff"}
        </BoldedHeader>
        <Box style={style} whiteSpace={"pre-wrap"}>
          {msg}
        </Box>
      </VStack>
    </HStack>
  );
};

export default Chat;
