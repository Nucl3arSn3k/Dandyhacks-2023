import { BoldedHeader } from "@/components/BoldedHeader";
import { ChakraMotionDiv } from "@/components/ChakraMotionDiv";
import { StonesButton } from "@/components/StonesButton";
import React from "react";
import { Raft } from "./Raft";
import { useRouter } from "next/router";

export const RaftWithViewMap = () => {
  const router = useRouter();
  return (
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
      <ChakraMotionDiv
        pos="absolute"
        top="20px"
        zIndex={10}
        right="-100px"
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
        <StonesButton
          stone="stone4"
          width={200}
          height={70}
          isAnimationOff={true}
          buttonProps={{
            onClick: () => {
              router.push("/raft/map");
            },
          }}
        >
          <BoldedHeader fontSize="0.5em" shadowOffset={3} py="20px" as="span">
            View Map
          </BoldedHeader>
        </StonesButton>
      </ChakraMotionDiv>
      <Raft hasDolphin hasSail />
    </ChakraMotionDiv>
  );
};
