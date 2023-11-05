import React from "react";
import { StonesContainer } from "./StonesContainer";
import { Box, HStack } from "@chakra-ui/react";
import { BoldedHeader } from "./BoldedHeader";
import { Coin } from "./Coin";

interface Props {
  currency?: number;
}

export const PlayerCoins = ({ currency }: Props) => {
  return (
    <StonesContainer height={80} width={120}>
      <HStack w="100%" justify="space-between" p={5}>
        <HStack>
          <BoldedHeader fontSize="1.4em" shadowOffset={3}>
            {currency}
          </BoldedHeader>
          <Box pos="absolute" top="-20px" left="-70px">
            <Coin />
          </Box>
        </HStack>
      </HStack>
    </StonesContainer>
  );
};
