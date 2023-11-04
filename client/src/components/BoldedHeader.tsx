import { Heading, HeadingProps } from "@chakra-ui/react";
import React, { ReactNode } from "react";

export type BoldedHeaderProps = {
  children: ReactNode;
  shadowOffset?: number;
} & HeadingProps;

export const BoldedHeader = ({
  children,
  shadowOffset = 5,
  ...rest
}: BoldedHeaderProps) => {
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
