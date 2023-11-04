import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

interface Props {
  percentage: number;
}

const ProgressBar = ({ percentage }: Props) => {
  const percentagePixels = (percentage / 100) * 410;
  return (
    <Box as="span">
          <Image
        src="/assets/stones/stone1.png"
        alt="background stone for progress bar" 
        width="0"
        height="0"
        sizes="100vw"
        style={{
          width: 400,
          height: 100,
          position: "absolute",
        }}
      />
         <Image
        src="/assets/stones/green-progress-bar.png"
        alt="progress bar"
        width="0"
        height="0"
        sizes="100vw"
        style={{
          width: percentagePixels,
          height: 100,
          position: "absolute",
        }}
      />
  
    </Box>
  );
};

export default ProgressBar;
