import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

interface Props {
  percentage: number;
}

export const ProgressBar = ({ percentage }: Props) => {
  const percentagePixels = (percentage / 100) * 410;
  const leftMargin = (100 - percentage) / 4 - 5;

  return (
    <Box position="relative">
      <Image
        src="/assets/stones/stone1.png"
        alt="background stone for progress bar"
        width="0"
        height="0"
        sizes="auto"
        style={{
          width: 200,
          height: 50,
          top: 0,
          zIndex: 100,
          left: 0,
        }}
      />
      <Image
        src="/assets/stones/green-progress-bar.png"
        alt="progress bar"
        width="0"
        height="0"
        sizes="auto"
        style={{
          width: percentagePixels / 2,
          height: 50,
          position: "absolute",
          top: 0,
          left: leftMargin,
          borderRadius: "50px 50px 50px 50px",
        }}
      />
    </Box>
  );
};
