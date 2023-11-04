import React from 'react';
import { Box, Image } from "@chakra-ui/react";


interface Props {
  percentage: number;
}

const ProgressBar = ({ percentage }: Props) => {

  return (
    <Box 
    position="relative" 
    width="100%"
    height="100%"

    >
      <Image 
      src="/assets/stones/stone1"
       alt="stone" 
         width="500px"
            height="500px"
        />

      <Box
        position="absolute"
        top={0}
        left={0}
        width={percentage}
      >
        <Image src="/assets/stones/green-progress-bar" alt="percentage bar" />
      </Box>
    </Box>
  );
};

export default ProgressBar;
