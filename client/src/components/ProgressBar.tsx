import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

interface Props {
  percentage: number;
}

const ProgressBar = ({ percentage }: Props) => {
  const percentagePixels = (percentage / 100) * 410;
  const leftMargin = (100 - percentage) / 4;

  return (
    <Box as="span" position="relative" width="1000px" height="1000px">
      <Image
        src="/assets/stones/stone1.png"
        alt="background stone for progress bar"
        width="0"
        height="0"
        sizes="auto"
        style={{
          width: 400,
          height: 100,
          position: "absolute",
          top: 0,
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
          width: percentagePixels,
          height: 98,
          position: "absolute",
          top: 0,
          left: leftMargin,
          borderRadius: "50px 50px 50px 50px",
        }}
      />
    </Box>
  );
};

export default ProgressBar;
