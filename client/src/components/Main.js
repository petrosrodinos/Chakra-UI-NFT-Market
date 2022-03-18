import React, { useEffect } from "react";
import AppBar from "./AppBar";
import { AuthContext } from "../context/auth-context";
import { useAuth } from "../hooks/auth-hook";
import NftList from "./NftList";
import CreateNft from "./CreateNft";
import Profile from "./Profile";
import { Container, Center, SimpleGrid, Box } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Main = () => {
  const { accounts, Login, Logout } = useAuth();
  //const { account, active } = useWeb3React();

  useEffect(async () => {
    Login();
  }, []);

  let routes = (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NftList />} />
        <Route path="create" element={<CreateNft />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );

  return (
    <AuthContext.Provider
      value={{ accounts, Login, Logout, logedIn: !!accounts }}
    >
      <Container maxW="container.xl">
        <AppBar>{routes}</AppBar>
      </Container>
    </AuthContext.Provider>
  );
};

export default Main;
