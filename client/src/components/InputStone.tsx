import {
  Box,
  HStack,
  VStack,
  InputGroup,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import { StonesButton } from "./StonesButton";

const style = {
  borderRadius: "1rem",
  border: "3px solid #564B4B",
  background: "#FFF",
  padding: "1.5rem",
  maxWidth: "45%",
};

const InputStone = ({ val = "", onChange = () => {} }) => {
  return (
    <InputGroup size="md" width={"100%"}>
      <Input
        paddingBlock="2.5rem"
        pr="4.5rem"
        placeholder="Chat Now!"
        border="3px solid #564B4B"
        fontSize="1.5rem"
        borderRadius="1.5rem"
        onChange={onChange}
        backgroundColor="white"
        value={val}
      />
      <InputRightElement width="14rem" height="5rem" borderRadius="16px">
        <StonesButton stone="stone3" width={"10rem"} height={"4rem"}>
          Send
        </StonesButton>
      </InputRightElement>
    </InputGroup>
  );
};

export default InputStone;
