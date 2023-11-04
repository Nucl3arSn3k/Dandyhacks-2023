import { BoldedHeader } from "@/components/BoldedHeader";
import { SeaBackgroundFullScreen } from "@/components/SeaBackgroundFullScreen";
import { StonesContainer } from "@/components/StonesContainer";
import {
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";


const loading = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        overflow: "hidden",
        left: 0,
        top: 0,
        zIndex: -1,
      }}
    >
      <Image
        src="/assets/background/ocean_bg_large.png"
        alt="Background"
        width="0"
        height="0"
        sizes="100vw"
        style={{
          zIndex: -1,
          width: "100%",
          height: "100vh",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

const Battle = ({ task = "biology", msges = [] }) => {
  return (
    <VStack pos="relative" h="100vh" overflow="clip" justify="center">
      <StonesContainer
        height={"120vh"}
        width={"110vw"}
        style={{ marginTop: "5rem" }}
      >
  
      </StonesContainer>
    </VStack>
  );
};

export default Battle;
