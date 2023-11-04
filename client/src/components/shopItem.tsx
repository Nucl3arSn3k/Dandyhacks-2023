import React from "react";
import Image from "next/image";
import { VStack } from "@chakra-ui/react";
import { StonesButton } from "@/components/StonesButton";
import { StoneEnum } from "@/consts";


export interface ShopItemProps {
  stone?: StoneEnum
  text?: string;
  url ?: string;
}

const ShopItem = ({ stone = StoneEnum.stone5, text = "", url="/assets/characters/dolphin.png" }:ShopItemProps) => {
   
  return (
    <VStack>
      <Image
        src={`/assets/stones/${stone}.png`}
        alt="Background"
        width="0"
        height="0"
        sizes="100vw"
        style={{
          width: "300px",
          height: "250px",
        }}
      />
      <Image
        src={url}
        alt="Background"
        width="0"
        height="0"
        sizes="100vw"
        style={{
          width: "150px",
          height: "150px",
        }}
        />
      <StonesButton
        stone="stone6"
        width={250}
        headerProps={{
          fontSize: "1.3em",
        }}
      >
        {text}
      </StonesButton>
    </VStack>
  );
};

export default ShopItem;
