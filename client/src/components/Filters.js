import React from "react";
import {
  SimpleGrid,
  Center,
  InputGroup,
  InputLeftElement,
  Input,
  Select,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { color } from "../style/colors";

const Filters = () => {
  return (
    <Center w="100%">
      <SimpleGrid columns={3} spacing={2}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<FiSearch fontSize="20" color={color} />}
          />
          <Input
            color={color}
            _placeholder={{ opacity: 1, color: "inherit" }}
            type="text"
            size="lg"
            placeholder="Search"
          />
        </InputGroup>
        <Select color={color} size="lg" placeholder="All">
          <option value="option1">Trending</option>
          <option value="option2">Art</option>
          <option value="option3">Photography</option>
          <option value="option4">Music</option>
        </Select>
        <Select color={color} size="lg" placeholder="Price">
          <option value="option1">Ascending</option>
          <option value="option2">Descending</option>
        </Select>
      </SimpleGrid>
    </Center>
  );
};

export default Filters;
