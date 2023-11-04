import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

interface Props {
  percentage: number;
}

const ProgressBar = ({ percentage }: Props) => {
  return (
    <Box width="500px" height="700px" position="relative">
      <Image
        src="/assets/stones/stone1.png"
        alt="Background"
        width='0'
        height='0'
        style={{
          zIndex: 0, // Set a lower zIndex for the background image
          height: "700px",
          width: "500px",
        }}
      />
      <Image
        src="/assets/stones/green-progress-bar.png"
        alt="New Image"
        width='0'
        height='0'
        style={{
          zIndex: 1, // Set a higher zIndex for the progress bar image
          height: "500px",
          width: `${percentage}%`,
        }}
      />
    </Box>
  );
};

export default ProgressBar;
