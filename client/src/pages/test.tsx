import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const SquigglyText = () => {
  return (
    <Box
      className="test"
      contentEditable
      display="inline-block"
      verticalAlign="middle"
      width="100%"
      outline="none"
      textAlign="center"
      fontSize={100}
      fontFamily="Amatic SC, sans-serif"
      lineHeight="100vh"
      background="#111"
      color="white"
    >
      Squiggly Text
      <Text className="small" fontSize="0.5em" display="inline">
        – with –
      </Text>
      SVG Filters
      <Text className="small" fontSize="0.5em" display="inline">
        (you can even edit this text)
      </Text>
      <Text className="small" fontSize="0.5em" display="inline">
        (only tested on Chrome so far)
      </Text>
    </Box>
  );
};

export default SquigglyText;
