import { Box, Heading, HeadingProps } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  shadowOffset?: number;
}

export const BoldedHeader = ({
  children,
  shadowOffset = 5,
  ...rest
}: Props & HeadingProps) => {
  return (
    <Heading
      fontWeight={900}
      color="white"
      textShadow={`1px ${shadowOffset}px 0px #5F3E00`}
      zIndex={2}
      textTransform="uppercase"
      {...rest}
    >
      {children}
    </Heading>
  );
};
