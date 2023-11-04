import Image from "next/image";
import {
  Box,
  Button,
  HStack,
  VStack,
  position,
  styled,
} from "@chakra-ui/react";
import { SeaBackgroundFullScreen } from "@/components/SeaBackgroundFullScreen";
import { BobUpAndDown } from "@/components/BobUpAndDown";
import { BoldedHeader } from "@/components/BoldedHeader";
import { WavyText } from "@/components/WavyText";
import { StonesButton } from "@/components/StonesButton";
import { useRouter } from "next/router";

export default function Shop() {
  const router = useRouter();
  return (
    <VStack as="section" pos="relative" h="100vh" overflow="clip" zIndex={10}>
      <VStack pt="50px" spacing="20">
        <BobUpAndDown>
          <BoldedHeader as="span" fontSize="4em" shadowOffset={8}>
            <WavyText text="Shop" replay={true} />
          </BoldedHeader>
        </BobUpAndDown>
        <HStack>
          <VStack>
            <Image
              src={`/assets/stones/stone5.png`}
              alt="Background"
              width="0"
              height="0"
              sizes="100vw"
              style={{
                width: "300px",
                height: "250px",
              }}
            />
            <StonesButton stone="stone6" width={250} >
              {/* <BoldedHeader as="span" fontSize=".6em"> */}
              Buy Dolphin
              {/* </BoldedHeader> */}
            </StonesButton>
          </VStack>

          {/* <VStack>
            <Image
              src={`/assets/stones/stone5.png`}
              alt="Background"
              width="0"
              height="0"
              sizes="100vw"
              style={{
                width: "300px",
                height: "250px",
              }}
            />
            <StonesButton stone="stone6" width={250}>
              <BoldedHeader as="span" fontSize=".6em">
                Buy Sail
              </BoldedHeader>
            </StonesButton>
          </VStack>

          <VStack>
            <Image
              src={`/assets/stones/stone5.png`}
              alt="Background"
              width="0"
              height="0"
              sizes="100vw"
              style={{
                width: "300px",
                height: "250px",
              }}
            />
            <StonesButton stone="stone6" width={250}>
              <BoldedHeader as="span" fontSize=".6em">
                Buy Engine
              </BoldedHeader>
            </StonesButton>
          </VStack> */}
        </HStack>
      </VStack>
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
        Back
      </StonesButton>
      <SeaBackgroundFullScreen />
    </VStack>
  );
}
