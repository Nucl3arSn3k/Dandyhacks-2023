import { Box, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React, { ReactNode } from "react";

interface Props {
  width?: number;
  children?: ReactNode;
  height?: number;
}

export const Stones2Container = ({
  width = 500,
  height = 350,
  children,
}: Props) => {
  const widthPixels = `${width}px`;
  const heightPixels = `${height}px`;

  return (
    <Box as="section" pos="relative" w={widthPixels} h={heightPixels}>
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
          width: widthPixels,
          height: heightPixels,
        }}
      />
    </Box>
  );
};
