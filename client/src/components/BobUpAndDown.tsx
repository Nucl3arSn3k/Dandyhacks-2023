import React, { ReactNode } from "react";
import { AnimationControls, Transition, motion } from "framer-motion";
import { ChakraMotionDiv } from "./ChakraMotionDiv";
import { BoxProps } from "@chakra-ui/react";

interface Props {
  animate?: any; // IDK what to type this! 😱
  children: ReactNode;
}

export const BobUpAndDown = ({
  children,
  animate,
  transition,
  ...rest
}: Props & BoxProps) => {
  return (
    <ChakraMotionDiv
      animate={{
        translateY: [0, 5, 0],
        ...animate,
      }}
      // @ts-ignore no problem in operation, although type error appears.
      transition={{
        duration: 1.5,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
      }}
      {...rest}
    >
      {children}
    </ChakraMotionDiv>
  );
};
