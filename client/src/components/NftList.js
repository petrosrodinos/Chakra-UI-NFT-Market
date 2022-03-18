import React, { useEffect, useState } from "react";
import {
  Container,
  Center,
  Grid,
  GridItem,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";

const NftList = () => {
  return (
    <SimpleGrid columns={[2, null, 3]} spacing={5}>
      <Box bg="cyan" width="200" height="350px"></Box>
      <Box bg="tomato" height="350px"></Box>
      <Box bg="tomato" height="350px"></Box>
      <Box bg="tomato" height="350px"></Box>
      <Box bg="tomato" height="350px"></Box>
      <Box bg="tomato" height="350px"></Box>
      <Box bg="tomato" height="350px"></Box>
      <Box bg="tomato" height="350px"></Box>
      <Box bg="tomato" height="350px"></Box>
      <Box bg="tomato" height="350px"></Box>
      <Box bg="tomato" height="350px"></Box>
      <Box bg="tomato" height="350px"></Box>
    </SimpleGrid>
  );
};

export default NftList;
