import { StoneEnum } from "@/consts";
import { Box, BoxProps, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React, { ReactNode } from "react";

interface Props {
  width?: number | string;
  children?: ReactNode;
  height?: number | string;
  stone?: StoneEnum;
}

export const StonesContainer = ({
  width = 500,
  height = 350,
  stone = StoneEnum.stone2,
  children,
}: Props & BoxProps) => {
  if (typeof width === "number") {
    width = `${width}px`;
  }
  if (typeof height === "number") {
    height = `${height}px`;
  }
  return (
    <Box as="section" pos="relative" w={width} h={height}>
      <VStack pos="absolute" h="100%" w="100%">
        {children}
      </VStack>
      <Image
        src={`/assets/stones/${stone}.png`}
        alt="Background"
        width="0"
        height="0"
        sizes="100vw"
        style={{
          width,
          height,
        }}
      />
    </Box>
  );
};
