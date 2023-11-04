import React from "react";
import Image from "next/image";
import { VStack, Box, HStack } from "@chakra-ui/react";
import { StonesButton } from "@/components/StonesButton";
import { StoneEnum } from "@/consts";
import { StonesContainer } from "./StonesContainer";

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
}

const ShopItem = ({
  stone = StoneEnum.stone5,
  text = "",
  price = 0,
  url = "/assets/characters/dolphin.png",
}: ShopItemProps) => {
  return (
    <VStack pt={70}>
      <StonesContainer stone={stone} width={250} height={250}>
        <Image
          src={url}
          alt="Background"
          width="0"
          height="0"
          sizes="auto"
          style={{
            width: "150px",
            height: "150px",
            position: "absolute",
            bottom: "50px",
          }}
        />
      </StonesContainer>

      <StonesButton
        stone="stone6"
        width={350}
        headerProps={{
          fontSize: "1.3em",
        }}
      >
        <HStack spacing="0">
          <Box>{text}</Box>
          <Image
            src="/assets/raft/coin.png"
            alt="Background"
            width="0"
            height="0"
            sizes="auto"
            style={{
              width: "100px",
              height: "50px",
            }}
          ></Image>
          <Box>{price}</Box>
        </HStack>
      </StonesButton>
    </VStack>
  );
};

export default ShopItem;
