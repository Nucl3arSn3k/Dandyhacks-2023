import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
}

export const BobUpAndDown = ({ children }: Props) => {
  return (
    <motion.div
      animate={{
        translateY: [0, 5, 0],
      }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
      }}
    >
      {children}
    </motion.div>
  );
};
