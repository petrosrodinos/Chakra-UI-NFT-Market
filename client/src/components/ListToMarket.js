import React, { useState } from "react";
import {
  Stack,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
} from "@chakra-ui/react";
import { color } from "../style/colors";
import { FaEthereum } from "react-icons/fa";
import { useNft } from "../hooks/nft-hook";

const ListToMarket = ({ id, owner }) => {
  const [price, setPrice] = useState(null);
  const { resellNft, error, loading } = useNft();

  const listNft = async () => {
    if (!price) return;
    try {
      resellNft(id, price, owner);
    } catch (error) {}
  };

  return (
    <Stack spacing={3}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1.2em"
          children={<FaEthereum color={color} />}
        />
        <Input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          placeholder="Enter new price (eth)"
        />
      </InputGroup>
      <Button onClick={listNft} colorScheme="teal" variant="solid">
        {loading ? <Spinner size="lg" /> : "LIST TO MARKET"}
      </Button>
    </Stack>
  );
};

export default ListToMarket;
