import { BobUpAndDown } from "@/components/BobUpAndDown";
import { Box, BoxProps } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

interface Props {
  hasDolphin?: boolean;
  hasSail?: boolean;
  hasEngine?: boolean;
}

export const Raft = ({
  hasEngine = false,
  hasSail = false,
  hasDolphin = false,
  ...rest
}: Props & BoxProps) => {
  return (
    <Box pos="relative" {...rest}>
      {hasDolphin && (
        <BobUpAndDown
          position="absolute"
          right="26%"
          top="-35%"
          animate={{ translateY: [0, 1, -1, 2, 0] }}
          zIndex={5}
        >
          <Image
            src="/assets/characters/dolphin.png"
            alt="Background"
            width="0"
            height="0"
            sizes="100vw"
            style={{
              width: "115px",
              height: "100px",
            }}
          />
        </BobUpAndDown>
      )}
      {hasSail && (
        <BobUpAndDown
          position="absolute"
          right="26%"
          bottom="70%"
          animate={{ translateY: [0, 1, -1, 2, 0] }}
          zIndex={4}
        >
          <Image
            src="/assets/raft/sail.png"
            alt="Background"
            width="0"
            height="0"
            sizes="100vw"
            style={{
              width: "115px",
              height: "300px",
            }}
          />
        </BobUpAndDown>
      )}
      {hasEngine && (
        <BobUpAndDown
          position="absolute"
          right="-30%"
          bottom="-10%"
          animate={{ translateY: [0, 1, -1, 2, 0] }}
          zIndex={4}
        >
          <Image
            src="/assets/raft/engine.png"
            alt="Background"
            width="0"
            height="0"
            sizes="100vw"
            style={{
              width: "250px",
              height: "80px",
            }}
          />
        </BobUpAndDown>
      )}
      <BobUpAndDown animate={{ translateY: [0, 1, -1, 2, 0] }}>
        <Image
          src="/assets/raft/raft.png"
          alt="Background"
          width="0"
          height="0"
          sizes="100vw"
          style={{
            width: "300px",
            height: "100px",
          }}
        />
      </BobUpAndDown>
    </Box>
  );
};
