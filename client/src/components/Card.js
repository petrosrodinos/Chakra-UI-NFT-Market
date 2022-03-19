import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Icon,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { color } from "../style/colors";
import { FaEthereum } from "react-icons/fa";
import { FiHome, FiArrowRight } from "react-icons/fi";
import ConfirmBuy from "./ConfirmBuy";

import React from "react";

export default function Card({ nft, confirm, preview }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${nft.image})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={260}
            width={282}
            objectFit={"cover"}
            src={nft.image}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={color} fontSize={"sm"} textTransform={"uppercase"}>
            {nft.name}
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {!confirm
              ? nft.description.substring(0, 25) + "..."
              : nft.description}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              {nft.price}
            </Text>
            <Icon color="#38B2AC" mr="4" fontSize="20" as={FaEthereum} />
          </Stack>
          {preview && (
            <Button
              rightIcon={<FiHome />}
              colorScheme={"blue"}
              variant="outline"
            >
              TAKE ME HOME
            </Button>
          )}
          {!confirm && !preview && (
            <Button
              rightIcon={<FiArrowRight />}
              colorScheme={"blue"}
              variant="outline"
              onClick={onOpen}
            >
              SEE MORE
            </Button>
          )}
          {confirm && (
            <Button
              rightIcon={<FiHome />}
              colorScheme={"blue"}
              variant="outline"
              onClick={() => {
                alert("sold");
              }}
            >
              TAKE ME HOME
            </Button>
          )}
        </Stack>
      </Box>
      <ConfirmBuy nft={nft} isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
    </Center>
  );
}
