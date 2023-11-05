import { BobUpAndDown } from "@/components/BobUpAndDown";
import { Box, BoxProps } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { useUser } from "@/store/useUsers";

export const Raft = () => {
  const { currency, ownsDolphin, ownsSail, ownsParrot } = useUser();
  return (
    <Box pos="relative">
      {ownsDolphin && (
        <BobUpAndDown
          position="absolute"
          right="40%"
          top="-35%"
          animate={{ translateY: [0, 1, -1, 2, 0] }}
          zIndex={10}
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
      {ownsSail && (
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
      {ownsParrot && (
        <BobUpAndDown
          position="absolute"
          right="10%"
          top="-30%"
          animate={{ translateY: [0, 1, -1, 2, 0] }}
          zIndex={5}
        >
          <Image
            src="/assets/characters/parrot.png"
            alt="Background"
            width="0"
            height="0"
            sizes="100vw"
            style={{
              width: "80px",
              height: "60px",
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
