import { useState, useCallback, useEffect } from "react";
import getWeb3 from "../getWeb3";
import SimpleStorageContract from "../contracts/SimpleStorage.json";
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
      console.log(web3);

      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
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

  // useEffect(async () => {
  //   const { accounts, contract } = state;
  //   if (accounts === null) return;
  //   console.log(state);

  //   await contract.methods.set(8).send({ from: accounts[0] });

  //   const response = await contract.methods.get().call();

  //   console.log(response);
  // }, [state]);

  const Logout = useCallback(() => {
    localStorage.removeItem("userId");
    setState({ ...state, accounts: null });
    //disconnect();
  });

  return { web3: state.web3, accounts: state.accounts, error1, Login, Logout };
};
