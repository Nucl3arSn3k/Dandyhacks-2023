import { Box} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

interface Props {
    percentage: number;
  }
const ProgressBar = ({percentage}: Props) => {
    return (
        <Box
            position="relative"
            width="300px"
            height="400px"
        >
            <Image
                src="/assets/stones/stone_1.png"
                alt="Background"
                width={300 }
                height={400 }
                objectFit="cover"                  
            />
        </Box>
    );
};

export default ProgressBar;


