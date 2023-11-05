import { Box, Button, HStack, VStack } from "@chakra-ui/react";
import { BoldedHeader } from "@/components/BoldedHeader";
import { BobUpAndDown } from "@/components/BobUpAndDown";
import { Raft } from "@/features/raft/components/Raft";
import { ChakraMotionDiv } from "@/components/ChakraMotionDiv";
import { WavyText } from "@/components/WavyText";
import { StonesButton } from "@/components/StonesButton";
import { SeaBackgroundFullScreen } from "@/components/SeaBackgroundFullScreen";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
export default function Home() {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <VStack pos="relative" h="100vh" overflow="clip">
      <VStack pt="50px" zIndex={10}>
        <BobUpAndDown>
          <BoldedHeader fontSize="8em" shadowOffset={8}>
            <WavyText text="Quiz Voyage" replay={true} />
          </BoldedHeader>
        </BobUpAndDown>
        <HStack>
          <StonesButton
            width={400}
            buttonProps={{
              onClick: () => {
                router.push("/api/auth/signin");
              },
            }}
          >
            Start
          </StonesButton>
          {session && (
            <StonesButton
              width={400}
              buttonProps={{
                onClick: () => {
                  router.push("/raft");
                },
              }}
            >
              Resume
            </StonesButton>
          )}
        </HStack>
      </VStack>

      <ChakraMotionDiv
        pos="absolute"
        top="80%"
        animate={{
          opacity: [0, 0.5, 0.75, 1, 1],
          translateY: [700, 0],
          translateX: [700, 0],
        }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 1,
          ease: "easeOut",
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
      >
        <Raft hasDolphin />
      </ChakraMotionDiv>

      <SeaBackgroundFullScreen />
    </VStack>
  );
}
