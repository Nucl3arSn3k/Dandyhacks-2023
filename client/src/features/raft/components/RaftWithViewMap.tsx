import { BoldedHeader } from "@/components/BoldedHeader";
import { ChakraMotionDiv } from "@/components/ChakraMotionDiv";
import { StonesButton } from "@/components/StonesButton";
import React from "react";
import { Raft } from "./Raft";
import Link from "next/link";
import { Box } from "@chakra-ui/react";

export const RaftWithViewMap = () => {
  return (
    <Box>
      <ChakraMotionDiv
        pos="absolute"
        top="80%"
        animate={{
          opacity: [0, 0.5, 0.75, 1, 1],
          translateY: [700, 0],
          translateX: [700, 0],
        }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 1,
          ease: "easeOut",
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
      >
        <Raft />
      </ChakraMotionDiv>
      <ChakraMotionDiv
        pos="absolute"
        bottom="30%"
        left="5px"
        flexDirection="column"
        zIndex={10}
        right="-250px"
        animate={{
          opacity: [0, 1],
        }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          delay: 1,
          duration: 1,
          ease: "easeOut",
        }}
      >
        <Link href="/raft/map">
          <StonesButton
            stone="stone4"
            width={200}
            height={70}
            isAnimationOff={true}
            boxProps={{
              pos: "absolute",
              bottom: "5%",
              right: "5%",
            }}
          >
            <BoldedHeader fontSize="0.5em" shadowOffset={3} py="20px" as="span">
              View Map
            </BoldedHeader>
          </StonesButton>
        </Link>
      </ChakraMotionDiv>
    </Box>
  );
};
