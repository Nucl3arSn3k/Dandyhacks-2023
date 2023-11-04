import { Box, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React, { ReactNode } from "react";

interface Props {
  width?: number | string;
  children?: ReactNode;
  height?: number | string;
  style?: React.CSSProperties;
  marginTop?: number | string;
}

export const Stones2Container = ({
  width = 500,
  height = 350,
  marginTop = "0",
  style = {},
  children,
}: Props) => {
  if (typeof width === "number") {
    width = `${width}px`;
  }
  if (typeof height === "number") {
    height = `${height}px`;
  }

  return (
    <Box
      as="section"
      pos="relative"
      w={width}
      h={height}
      marginTop={marginTop}
      style={style}
    >
      <VStack pos="absolute" h="100%" w="100%">
        {children}
      </VStack>
      <Image
        src="/assets/stones/stone2.png"
        alt="Background"
        width="0"
        height="0"
        sizes="100vw"
        style={{
          width: width,
          height: height,
        }}
      />
    </Box>
  );
};
