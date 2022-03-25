import React, { useState } from "react";
import {
  Stack,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { color } from "../style/colors";
import { FaEthereum } from "react-icons/fa";

const ListToMarket = () => {
  const [price, setPrice] = useState(null);
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
      <Button
        onClick={() => {
          alert(price);
        }}
        colorScheme="teal"
        variant="solid"
      >
        LIST TO MARKET
      </Button>
    </Stack>
  );
};

export default ListToMarket;
