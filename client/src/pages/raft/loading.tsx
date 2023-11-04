import { BoldedHeader } from "@/components/BoldedHeader";
import { SeaBackgroundFullScreen } from "@/components/SeaBackgroundFullScreen";
import { StonesContainer } from "@/components/StonesContainer";
import { VStack } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { AnimationControls, Transition, motion } from "framer-motion";
import { BobUpAndDown } from "@/components/BobUpAndDown";
import { StonesButton } from "@/components/StonesButton";
import { useRouter } from "next/router";

const Loading = () => {
  const router = useRouter();
  return (
    <VStack pos="relative" h="100vh" overflow="clip" justify="center">
      <StonesContainer
        height={"120vh"}
        width={"110vw"}
        style={{ marginTop: "5rem" }}
        stone="stone2"
      >
        <VStack width="85%" height="105vh">
          <VStack p={5} style={{ marginTop: "0" }}>
            <BobUpAndDown
              position={"absolute"}
              top={"35%"}
              animate={{
                translateY: [0, 20, 0],
              }}
              // @ts-ignore no problem in operation, although type error appears.
              transition={{
                duration: 0.1,
              }}
            >
              <Image
                src="/assets/characters/dolphin.png"
                alt="Background"
                width="0"
                height="0"
                sizes="auto"
                style={{
                  zIndex: 100,
                  width: "170px",
                  height: "170px",
                }}
              />
            </BobUpAndDown>

            <BoldedHeader
              fontSize="8em"
              shadowOffset={8}
              style={{
                fontSize: "3em",
                position: "absolute",
                top: "55%",
              }}
            >
              Loading your quest...
            </BoldedHeader>
          </VStack>
        </VStack>
      </StonesContainer>
      <StonesButton
        stone="stone7"
        buttonProps={{
          onClick: () => {
            router.push("/raft");
          },
        }}
        boxProps={{
          pos: "absolute",
          top: "5%",
          left: "5%",
        }}
      >
        Leave
      </StonesButton>
      <SeaBackgroundFullScreen />
    </VStack>
  );
};

export default Loading;
