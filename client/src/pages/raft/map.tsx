import { StonesButton } from "@/components/StonesButton";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Map = () => {
  return (
    <Box as="section">
      <StonesButton headerProps={{ fontSize: "10px" }}>HEADER</StonesButton>
      <Image
        src="/assets/background/bg_in_spyglass.png"
        alt="Background"
        width="0"
        height="0"
        sizes="100vw"
        unoptimized={true}
        style={{
          width: "100%",
          height: "100vh",
          zIndex: -1,
          position: "absolute",
          objectFit: "cover",
        }}
      />
    </Box>
  );
};

export default Map;
