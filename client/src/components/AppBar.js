import React, { useContext, useState, useEffect } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  Tooltip,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiPower,
  FiPlusCircle,
} from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";
import { AuthContext } from "../context/auth-context";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../web3/connectors";

const LinkItems = [
  { name: "/", icon: FiHome },
  { name: "create", icon: FiPlusCircle },
  { name: "profile", icon: CgProfile },
  { name: "/", icon: FiTrendingUp },
  { name: "/", icon: FiCompass },
  { name: "/", icon: FiStar },
  { name: "/", icon: FiSettings },
];

const AuthIcons = [BsPerson, FiPower];

export default function SimpleSidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box w="100%" p={10} m={10}>
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  const auth = useContext(AuthContext);
  //const { active } = useWeb3React();
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 100 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        mx="4"
        textAlign="center"
        justifyContent="space-between"
      >
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          NFT Market
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem tooltip={link.name} key={link.name} icon={link.icon}></NavItem>
      ))}
      {auth.logedIn ? (
        <AuthItem
          loginPress={auth.Logout}
          tooltip={"Log Out"}
          key={Math.random()}
          icon={AuthIcons[1]}
        ></AuthItem>
      ) : (
        <AuthItem
          loginPress={auth.Login}
          tooltip={"Authenticate"}
          key={Math.random()}
          icon={AuthIcons[0]}
        ></AuthItem>
      )}
    </Box>
  );
};

const AuthItem = ({ icon, children, tooltip, loginPress }) => {
  return (
    <Button
      onClick={loginPress}
      variant="link"
      p="6"
      mx="4"
      borderRadius="lg"
      role="group"
      _hover={{
        bg: "cyan.400",
        color: "white",
      }}
    >
      {icon && (
        <Tooltip
          placement="auto-start"
          hasArrow
          label={tooltip}
          aria-label="A tooltip"
        >
          <Icon
            color="#38B2AC"
            mr="4"
            fontSize="30"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        </Tooltip>
      )}
      {children}
    </Button>
  );
};

const NavItem = ({ icon, children, tooltip }) => {
  return (
    <Link
      href={tooltip}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="6"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
      >
        {icon && (
          <Tooltip
            placement="auto-start"
            hasArrow
            label={tooltip}
            aria-label="A tooltip"
          >
            <Icon
              color="#38B2AC"
              mr="4"
              fontSize="30"
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          </Tooltip>
        )}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        NFT Market
      </Text>
    </Flex>
  );
};
