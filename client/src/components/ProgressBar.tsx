import React from 'react';
import { Box, Image } from "@chakra-ui/react";

// import image from public assets
import stone from '/assets/stones/stone1.png';
import percentageBar from 'assets/stones/green-progress-bar.png';

interface Props {
  percentage: number;
}

const ProgressBar = ({ percentage }: Props) => {
  // Calculate the width of the percentage bar based on the percentage value
  const percentageWidth = `${percentage}%`;

  return (
    <Box position="relative">
      <Image src={stone} alt="stone" />

      {/* Overlay the percentage bar using absolute positioning */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width={percentageWidth}
      >
        <Image src={percentageBar} alt="percentage bar" />
      </Box>
    </Box>
  );
};

export default ProgressBar;
