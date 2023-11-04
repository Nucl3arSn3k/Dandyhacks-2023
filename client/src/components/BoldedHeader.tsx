import { Box, Heading, HeadingProps } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  text: string;
}

export const BoldedHeader = ({ text, ...rest }: Props & HeadingProps) => {
  return (
    <Box as="span" pos="relative">
      <Heading
        fontWeight={900}
        color="white"
        textShadow="-1px -1px 0 #5F3E00, 1px -1px 0 #5F3E00, -1px 1px 0 #5F3E00, 1px 1px 0 #5F3E00"
        zIndex={1}
        textTransform="uppercase"
        {...rest}
      >
        {text}
      </Heading>
      <Heading
        zIndex={-1}
        fontWeight={900}
        color="#564B4B"
        position="absolute"
        top="5px"
        textTransform="uppercase"
        {...rest}
      >
        {text}
      </Heading>
    </Box>
  );
};
