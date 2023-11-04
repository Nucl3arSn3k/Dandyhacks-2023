import { As, Heading, HeadingProps } from "@chakra-ui/react";
import React, { ReactNode } from "react";

export type BoldedHeaderProps = {
  children: ReactNode;
  shadowOffset?: number;
} & HeadingProps;

export const BoldedHeader = ({
  children,
  as,
  shadowOffset = 5,
  ...rest
}: BoldedHeaderProps) => {
  return (
    <Heading
      as="span"
      fontWeight={900}
      color="white"
      textShadow={`1px ${shadowOffset}px 0px #5F3E00`}
      zIndex={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
      textTransform="uppercase"
      {...rest}
    >
      {children}
    </Heading>
  );
};
