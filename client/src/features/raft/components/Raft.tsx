import { BobUpAndDown } from "@/components/BobUpAndDown";
import { Box, BoxProps } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Raft = ({ ...rest }: BoxProps) => {
  return (
    <Box pos="relative" {...rest}>
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

export default Raft;
