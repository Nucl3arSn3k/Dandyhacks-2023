import React from "react";
import Image from "next/image";
import { VStack, Box, HStack } from "@chakra-ui/react";
import { StonesButton } from "@/components/StonesButton";
import { StoneEnum } from "@/consts";
import { StonesContainer } from "./StonesContainer";
import { ChakraMotionDiv } from "./ChakraMotionDiv";
import { useUser } from "@/store/useUsers";
import { is } from "@react-three/fiber/dist/declarations/src/core/utils";

export interface ShopItemProps {
  stone?:
    | "stone1"
    | "stone2"
    | "stone3"
    | "stone4"
    | "stone5"
    | "stone6"
    | "stone7";
  text?: string;
  url?: string;
  price?: number;
  animationDelay?: number;
  buyItem?: (price: number, text: string) => void;
  isBought?: boolean;
  playSound?: (name: string) => void;
  index: number;
}
// animationDelay?: number;
const ShopItem = ({
  stone = StoneEnum.stone5,
  text = "",
  price = 0,
  url = "/assets/characters/dolphin.png",
  buyItem = () => {},
  playSound = (name: string) => {},
  isBought = false,
  index,
}: ShopItemProps) => {
  return (
    <VStack pt={70}>
      <ChakraMotionDiv
        animate={{
          opacity: [0, 1],
          translateX: [100, 0],
        }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          delay: 0.2 + 0.2 * index,
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <StonesContainer stone={stone} width={220} height={220}>
          <VStack alignItems="center">
            <Image
              src={url}
              alt="Background"
              width="0"
              height="0"
              sizes="auto"
              style={{
                width: "90px",
                height: "90px",
              }}
            />
          </VStack>
        </StonesContainer>
      </ChakraMotionDiv>
      <StonesButton
        stone="stone6"
        width={350}
        headerProps={{
          fontSize: "1.3em",
          shadowOffset: 3,
          onClick: () => {
            buyItem(price, text);
            playSound(text);
          },
        }}
      >
        {isBought ? (
          <Box
            style={{
              color: "yellow",
            }}
          >
            Bought!
          </Box>
        ) : (
          <HStack spacing="0">
            <Box>{text}</Box>
            <Image
              src="/assets/raft/coin.png"
              alt="Background"
              width="0"
              height="0"
              sizes="auto"
              style={{
                width: "70px",
                height: "50px",
              }}
            ></Image>
            <Box>{price}</Box>
          </HStack>
        )}
      </StonesButton>
    </VStack>
  );
};

export default ShopItem;
