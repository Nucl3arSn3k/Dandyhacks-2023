import { ArrowStone } from "@/components/ArrowStone";
import { BobUpAndDown } from "@/components/BobUpAndDown";
import { BoldedHeader } from "@/components/BoldedHeader";
import { StonesButton } from "@/components/StonesButton";
import { WavyText } from "@/components/WavyText";
import { Box, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";

const Map = () => {
  const router = useRouter();
  return (
    <Box as="section" pos="relative" h="100vh" w="100vw">
      <Image
        src="/assets/background/spyglass_bg.png"
        alt="Background"
        width="0"
        height="0"
        sizes="100vw"
        style={{
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
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
      <BobUpAndDown
        position="absolute"
        left={1110}
        top={370}
        display={"flex"}
        flexDirection="column"
        gap={"1rem"}
        alignItems="center"
        animate={{ translateY: [0, 1, -1, 2, 0] }}
        zIndex={5}
      >
        <BoldedHeader
          as="span"
          fontSize="2rem"
          shadowOffset={2}
          color={"#A35BFE"}
        >
          <WavyText text="Physics" replay={true} />
        </BoldedHeader>
        <Image
          src="/assets/icons/arrow.svg"
          alt="Background"
          width="0"
          height="0"
          sizes="100vw"
          style={{
            width: "6rem",
            height: "6rem",
            zIndex: -1,
          }}
        />
      </BobUpAndDown>
    </Box>
  );
};

export default Map;
