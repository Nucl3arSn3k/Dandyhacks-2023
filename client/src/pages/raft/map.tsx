import { Box } from "@chakra-ui/react";
import Image from "next/image";

const Map = () => {
  return (
    <Box as="section" pos="relative" h="100vh" w="100vw">
      <Box w="900px" height="800px" pos="relative" mx="auto" overflow="clip">
        <Box pos="absolute" top="60%" left="15%"></Box>
        <Box pos="absolute" top="10%" left="35%"></Box>
        <Image
          src="/assets/background/bg_in_spyglass.png"
          alt="Background"
          width="0"
          height="0"
          sizes="100vw"
          unoptimized={true}
          style={{
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />
      </Box>
    </Box>
  );
};

export default Map;
