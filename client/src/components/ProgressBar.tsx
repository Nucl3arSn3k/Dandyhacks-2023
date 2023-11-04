import React from "react";
import { Box, Image } from "@chakra-ui/react";

interface Props {
  percentage: number;
}

const ProgressBar = ({ percentage }: Props) => {
  return (
    <Box position="relative" width="500px" height="500px">
      <Image
        src="/assets/stones/stone1.png"
        alt="Stone"
        width="100%"
        height="100%"
        zIndex={-1}
        position="absolute"
      />

      {/* <Box
        position="absolute"
        top={0}
        left={0}
        width={percentage}
      >
        <Image src="/assets/stones/green-progress-bar.png" alt="percentage bar" />
      </Box> */}
    </Box>
  );
};

export default ProgressBar;
