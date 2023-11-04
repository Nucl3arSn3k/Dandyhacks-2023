import { Box, HStack, VStack } from "@chakra-ui/react";
import { BoldedHeader } from "./BoldedHeader";
import { StonesButton } from "./StonesButton";
import { StonesContainer } from "./StonesContainer";

const style = {
  borderRadius: "1rem",
  border: "3px solid #564B4B",
  background: "#FFF",
  padding: "1.5rem",
  width: "100%",
};

const Chat = ({ msg = "default", align = "start", name = "momo" }) => {
  return (
    <HStack
      alignSelf={align}
      alignItems="end"
      maxWidth={"70%"}
      flexDirection={align == "start" ? "row" : "row-reverse"}
    >
      <StonesContainer stone="stone1" width="6rem" height="7rem" />
      <VStack alignItems={align} flex={1} gap="0.5rem">
        <BoldedHeader fontSize="1rem" shadowOffset={4}>
          {name}
        </BoldedHeader>
        <Box style={style} whiteSpace={"pre-wrap"}>
          {msg}
        </Box>
      </VStack>
    </HStack>
  );
};

export default Chat;
