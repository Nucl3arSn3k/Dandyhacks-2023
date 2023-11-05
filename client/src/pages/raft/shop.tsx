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
import { useEffect, useRef } from "react";
import { useUser } from "@/store/useUsers";
import { Howl } from "howler";

export default function Shop() {
  const router = useRouter();

  const {
    currency,
    ownsDolphin,
    ownsSail,
    ownsParrot,
    setCurrency,
    setOwnsDolphin,
    setOwnsParrot,
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
      text: "Buy Parrot",
      url: "/assets/characters/parrot.png",
      price: 300,
      isBought: ownsParrot,
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
      } else if ("Buy Parrot" === text && !ownsParrot) {
        setOwnsParrot(true);
        setCurrency(currency - price);
      }
    }

    // ==== Sound Effect ====
  };

  const sound = useRef(null); // Use a ref to store the Howler sound object
  const isPlaying = useRef(false); // Use a ref to track if the sound is currently playing

  useEffect(() => {
    // Initialize the sound when the component mounts
    sound.current = new Howl({
      src: ["../assets/sounds/purchaseSound.mp3"],
      loop: false,
      volume: 0.5,
      onend: function () {},
    });
  }, []);

  const onPlaySound = (name: string) => {
    // play for 5 seconds only if button is clicked for first time
    if (sound.current) {
      // if text == "Buy Dolphin" && !ownsDolphin
      if ("Buy Dolphin" === name && !ownsDolphin) {
        sound.current.play();
      } else if ("Buy Sail" === name && !ownsSail) {
        sound.current.play();
      } else if ("Buy Parrot" === name && !ownsParrot) {
        sound.current.play();
      }
      isPlaying.current = !isPlaying.current;
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
          {shopItems.map((item, idx) => {
            return (
              <ShopItem
                index={idx}
                stone={item.stone}
                text={item.text}
                url={item.url}
                key={item.url}
                price={item.price}
                buyItem={buyItem}
                isBought={item.isBought}
                playSound={onPlaySound}
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
