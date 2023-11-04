import { Box, Heading, HeadingProps } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  text: string;
  shadowOffset?: number;
}

export const BoldedHeader = ({
  text,
  shadowOffset = 5,
  ...rest
}: Props & HeadingProps) => {
  return (
    <Box pos="relative">
      <Heading
        fontWeight={900}
        color="white"
        position="absolute"
        textShadow="-1px -1px 0 #5F3E00, 1px -1px 0 #5F3E00, -1px 1px 0 #5F3E00, 1px 1px 0 #5F3E00"
        zIndex={2}
        textTransform="uppercase"
        {...rest}
      >
        {text}
      </Heading>
      <Heading
        zIndex={1}
        fontWeight={900}
        color="#564B4B"
        position="absolute"
        top={`${shadowOffset}px`}
        textTransform="uppercase"
        {...rest}
      >
        {text}
      </Heading>
    </Box>
  );
};
