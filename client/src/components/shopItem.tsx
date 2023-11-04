import React from "react";
import Image from "next/image";
import { VStack, Box } from "@chakra-ui/react";
import { StonesButton } from "@/components/StonesButton";
import { StoneEnum } from "@/consts";
import { StonesContainer } from "./StonesContainer";

export interface ShopItemProps {
  stone?: "stone1" | "stone2" | "stone3" | "stone4" | "stone5";
  text?: string;
  url?: string;
}

const ShopItem = ({
  stone = StoneEnum.stone5,
  text = "",
  url = "/assets/characters/dolphin.png",
}: ShopItemProps) => {
  return (
    <VStack>
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
            // // top: "10",
            bottom: "50px",
          }}
        />
      </StonesContainer>

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
