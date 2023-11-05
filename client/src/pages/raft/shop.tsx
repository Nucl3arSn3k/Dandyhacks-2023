import Image from "next/image";
import { HStack, VStack, Box, Button } from "@chakra-ui/react";
import { SeaBackgroundFullScreen } from "@/components/SeaBackgroundFullScreen";
import { BobUpAndDown } from "@/components/BobUpAndDown";
import { BoldedHeader } from "@/components/BoldedHeader";
import { WavyText } from "@/components/WavyText";
import { StonesButton } from "@/components/StonesButton";
import { useRouter } from "next/router";
import ShopItem, { ShopItemProps } from "@/components/shopItem";
import { StoneEnum } from "@/consts";
import { PlayerCoins } from "@/components/PlayerCoins";
import { useEffect, useState } from "react";
import { useUser } from "@/store/useUsers";

export default function Shop() {
  const router = useRouter();
  const {
    currency,
    ownsDolphin,
    ownsSail,
    ownsEngine,
    setCurrency,
    setOwnsDolphin,
    setOwnsEngine,
    setOwnsSail,
  } = useUser();

  // const [isEnoughCurrency, setIsEnoughCurrency] = useState(true);

  const shopItems: ShopItemProps[] = [
    {
      stone: StoneEnum.stone5,
      text: "Buy Dolphin",
      url: "/assets/characters/dolphin.png",
      price: 100,
      isBought: ownsDolphin,
    },
    {
      stone: StoneEnum.stone5,
      text: "Buy Sail",
      url: "/assets/raft/sail.png",
      price: 200,
      isBought: ownsSail,
    },
    {
      stone: StoneEnum.stone5,
      text: "Buy Engine",
      url: "/assets/raft/engine.png",
      price: 300,
      isBought: ownsEngine,
    },
  ];

  const buyItem = (price: number, text: string) => {
    if (price <= currency) {
      if ("Buy Dolphin" === text && !ownsDolphin) {
        setOwnsDolphin(true);
        setCurrency(currency - price);
      } else if ("Buy Sail" === text && !ownsSail) {
        setOwnsSail(true);
        setCurrency(currency - price);
      } else if ("Buy Engine" === text && !ownsEngine) {
        setOwnsEngine(true);
        setCurrency(currency - price);
      }
    }

  };

  return (
    <VStack as="section" pos="relative" h="100vh" overflow="clip" zIndex={10}>
      <VStack pt="50px" spacing="30">
        <BobUpAndDown>
          <BoldedHeader as="span" fontSize="4em" shadowOffset={8}>
            <WavyText text="Shop" replay={true} />
          </BoldedHeader>
        </BobUpAndDown>
        <HStack>
          {shopItems.map((item) => {
            return (
              <ShopItem
                stone={item.stone}
                text={item.text}
                url={item.url}
                key={item.url}
                price={item.price}
                buyItem={buyItem}
                isBought={item.isBought}
              />
            );
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

      <Box
        pos="absolute"
        top="5%"
        right="5%"
        w="200px"
        h="100px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <PlayerCoins currency={currency} />
      </Box>

      <SeaBackgroundFullScreen />
    </VStack>
  );
}
