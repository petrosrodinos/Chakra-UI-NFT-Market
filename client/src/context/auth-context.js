import { createContext } from "react";

export const AuthContext = createContext({
  accounts: null,
  Login: () => {},
  Logout: () => {},
  logedIn: false,
});
