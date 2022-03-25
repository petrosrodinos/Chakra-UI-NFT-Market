import { useState, useCallback } from "react";
import getWeb3 from "../getWeb3";
import NFTMarketplaceContract from "../contracts/NFTMarketplace.json";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../web3/connectors";

export const useAuth = () => {
  const [error1, setError] = useState();
  const [state, setState] = useState({
    web3: null,
    accounts: null,
    contract: null,
  });

  const { activate, deactivate, account, chainId, error } = useWeb3React();

  async function connect() {
    try {
      await activate(injected);
      localStorage.setItem("userId", error);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
      localStorage.removeItem("userId");
    } catch (ex) {
      console.log(ex);
    }
  }

  const Login = useCallback(async () => {
    try {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();

      const networkId = await web3.eth.net.getId();
      const deployedNetwork = NFTMarketplaceContract.networks[networkId];
      const instance = new web3.eth.Contract(
        NFTMarketplaceContract.abi,
        deployedNetwork && deployedNetwork.address
      );
      setState({ ...state, web3, accounts, contract: instance });
      localStorage.setItem("userId", JSON.stringify(accounts[0]));
    } catch (error) {
      console.log(error);
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      setError("Failed to load web3, accounts, or contract.");
    }
  }, []);

  const Logout = useCallback(() => {
    localStorage.removeItem("userId");
    setState({ ...state, accounts: null });
    //disconnect();
  });

  return {
    web3: state.web3,
    contract: state.contract,
    accounts: state.accounts,
    Login,
    Logout,
  };
};
