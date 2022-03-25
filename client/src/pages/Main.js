import React, { useEffect } from "react";
import AppBar from "../components/AppBar";
import { AuthContext } from "../context/auth-context";
import { useAuth } from "../hooks/auth-hook";
import Home from "./Home";
import CreateNft from "./CreateNft";
import Profile from "./Profile";
import { Container } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Main = () => {
  const { accounts, contract, Login, Logout, web3 } = useAuth();

  useEffect(async () => {
    Login();
  }, []);

  return (
    <AuthContext.Provider
      value={{ web3, accounts, contract, Login, Logout, logedIn: !!accounts }}
    >
      <Container maxW="container.xl">
        <BrowserRouter>
          <AppBar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="create" element={<CreateNft />} />
              <Route path="profile" element={<Profile />} />
            </Routes>
          </AppBar>
        </BrowserRouter>
      </Container>
    </AuthContext.Provider>
  );
};

export default Main;
