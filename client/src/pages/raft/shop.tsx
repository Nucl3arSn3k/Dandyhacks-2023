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
import ShopItem, { ShopItemProps } from "@/components/shopItem";
import { StoneEnum } from "@/consts";

export default function Shop() {
  const router = useRouter();
  const shopItems : ShopItemProps[] = [
    {
      stone: StoneEnum.stone5,
      text:"Buy Dolphin",
      url: "/assets/characters/dolphin.png",
    },
    {
      stone: StoneEnum.stone5,
      text: "Buy Sail",
      url: "/assets/raft/sail.png",
    },
    {
      stone: StoneEnum.stone5,
      text: "Buy Engine",
      url: "/assets/raft/engine.png",
    },
  ];

  return (
    <VStack as="section" pos="relative" h="100vh" overflow="clip" zIndex={10}>
      <VStack pt="50px" spacing="20">
        <BobUpAndDown>
          <BoldedHeader as="span" fontSize="4em" shadowOffset={8}>
            <WavyText text="Shop" replay={true} />
          </BoldedHeader>
        </BobUpAndDown>
        <HStack>
          {shopItems.map((item) => {
            return <ShopItem stone={item.stone} text={item.text} url={item.url} key={item.url} />;
          })}
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
