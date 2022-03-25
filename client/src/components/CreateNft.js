import {
  SimpleGrid,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Textarea,
  Alert,
  Spinner,
} from "@chakra-ui/react";
import React, { useState } from "react";
import File from "./File";
import Card from "./Card";
import { useNft } from "../hooks/nft-hook";

export default function CreateNft() {
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState(
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAACsAACwAABcXFzW1tZrAACRAACfn5+xAAA9AACmAADu1tbXnp6VAAC/W1u1tbVbAADf399PT0+hoaGHh4e2AAA0AADQ0NBpAACGY2POhoahAAA6AAAmAABTU1MVAAAfHx/q6upkZGS1OTmiTU0y5sS2AAAC8klEQVR4nO3d23LaMBCAYWqONsEFYyDk0KSn93/FNjONtZ1ZRWMH2EX8/zUIfXEuFEU2oxERERER3VzNdvLZto014sOmXz7f1BrxYQgRIrQPIUKE9jUnEDpc09wv3mt3YqYzreNDu1Bqxft24RX31rR/LfRrsR8rFSt9DH2IxWUh0SLCcaG0RIjQJIQI30JoW/7CVp/eCYTtZSH/10zfa8RS7bXqOqjC4vFOTezRfQ/D7cSnXFy4VX/o1b7sUoF/r6LWkxh5oo68vbhQn0cVcyVaJkeeIESIECFChAjdCA9CqG1ExSrEyPpqyVQ4E7tqAqhONFZYzD3dhQ8Ra3pbobrG7icMQyyFUPxdhhAhQoQIESJEaC5cT7XWGQn1wwfyWANChGcIIcIRwrcQnjWEJxFez05UH2HxuOp6yFMYNhaLY6bCMMQM4TlDiHCEEOHZuy1hqf3Ts8xIuKnnSrUu/JHaa/MoTCeEfQ6jIkSIECFChAgRnjv9fF1a2Of2E1thr2I3Z2gn/q5TOPAwKkJHIUSI0D6ECK9VeNCF4+4u1L1zoX5rr9h6rHXg5rm7l/ibb6F63eT2sf6rWT6r77siYQQWhBVCNyFEiNA+hLkKj5FNp669Lnyx5iiJ6W3CM/fm+r7hMTyWTyzVfobH762tOUpCWJepfUP9gps+gSedmKl+4dJCL09RioQQIUL7ECLMQagf88tIuNSP+YU9uhePSzVRSjie6xfO4dOuIw0V+n5iuQwhQv8hROg/hAj910toPdlBIUToP4QI/YcQof/E/OtSq85IeKi0DhkJ01lPdlAIEfoPIUL/IUToP+1bcaNZT5aIiIjoZlO/0yKW9WQHlf/KGyFC/yFE6D+ECP13U8Jwl2yxCi9oMhKGkwpLIZwi9B5ChP5DiNB/CDNd0xS/vnb9zlMoyul8af4naBEidBpChP67KWGtfTNbVvdbhGfuyTYZCdNZT3ZQCBH6DyFC/yFE6D/x/RbJttaTJSIiIiLb/gCbCmhtT1Sh5AAAAABJRU5ErkJggg=="
  );
  const [data, setData] = useState({
    name: "Name goes here",
    description: "Description goes here",
    price: "0",
  });
  const { create, error, loading } = useNft();

  const dataChanged = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "name") {
      setData({ ...data, name: value });
    }
    if (name === "description") {
      setData({ ...data, description: value });
    }
    if (name === "price") {
      setData({ ...data, price: value });
    }
  };

  const createNft = async () => {
    const { name, description, price } = data;
    if (!name || !description || !price || !image) return;

    try {
      create({ ...data, image: image });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SimpleGrid columns={[1, null, 2]}>
      <Flex minH={"100vh"} align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Create your NFT
            </Heading>
            <Text textAlign={"center"} fontSize={"lg"} color={"gray.600"}>
              And upload it to this market place for others to admire and buy
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <Box>
                <FormControl id="name" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    name="name"
                    onChange={dataChanged}
                    placeholder="Name for your NFT"
                    type="text"
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="price" isRequired>
                  <FormLabel>Price in Ether</FormLabel>
                  <Input
                    onChange={dataChanged}
                    name="price"
                    placeholder="Price for your NFT"
                    type="number"
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl isRequired id="description">
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    onChange={dataChanged}
                    name="description"
                    resize="none"
                    type="text"
                    placeholder="Description for your NFT"
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl isRequired id="description">
                  <FormLabel>NFT Image</FormLabel>
                  <File setImage={setImage} setImagePreview={setImagePreview} />
                </FormControl>
              </Box>

              <Stack spacing={10} pt={2}>
                <Button
                  onClick={createNft}
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  {loading ? <Spinner size="lg" /> : "Create"}
                </Button>
                {error && (
                  <Alert status="error">
                    There was an error minting your nft
                  </Alert>
                )}
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Card preview nft={{ ...data, image: imagePreview }} />
    </SimpleGrid>
  );
}
