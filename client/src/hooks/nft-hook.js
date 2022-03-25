import { useState, useCallback, useContext } from "react";
import { AuthContext } from "../context/auth-context";
import { create as ipfsHttpClient } from "ipfs-http-client";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useNft = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const auth = useContext(AuthContext);
  let navigate = useNavigate();
  const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");
  const contract = auth.contract;
  const accounts = auth.accounts;
  const web3 = auth.web3;

  const create = useCallback(async ({ name, description, price, image }) => {
    try {
      setLoading(true);
      const added = await client.add(image, {
        progress: (prog) => {},
      });
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      const data = JSON.stringify({
        name,
        description,
        image: url,
      });
      const metadata = await client.add(data);
      const metadataUrl = `https://ipfs.infura.io/ipfs/${metadata.path}`;
      //console.log(metadataUrl);
      let pricew = web3.utils.toWei(price, "ether");
      let listingPrice = await contract.methods.getListingPrice().call();
      listingPrice = listingPrice.toString();
      let res = await contract.methods
        .createToken(metadataUrl, pricew)
        .send({ from: accounts[0], value: listingPrice });
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(error);
      console.log(error);
    }
  });

  const fetchNfts = useCallback(async () => {
    try {
      setLoading(true);
      let data = await contract.methods.fetchMarketItems().call();
      let items = await Promise.all(
        data.map(async (i) => {
          let tokenUri = await contract.methods.tokenURI(i.tokenId).call();
          let meta = await axios.get(tokenUri);
          let price = web3.utils.fromWei(i.price.toString(), "ether");
          let item = {
            price,
            tokenId: parseInt(i.tokenId),
            seller: i.seller,
            owner: i.owner,
            image: meta.data.image,
            name: meta.data.name,
            description: meta.data.description,
          };
          return item;
        })
      );
      setLoading(false);
      return items;
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, [contract]);

  const fetchMintedNfts = useCallback(async () => {
    try {
      setLoading(true);

      let data = await contract.methods
        .fetchItemsListed()
        .call({ from: accounts[0] });
      let items = await Promise.all(
        data.map(async (i) => {
          let tokenUri = await contract.methods.tokenURI(i.tokenId).call();
          let meta = await axios.get(tokenUri);
          let price = web3.utils.fromWei(i.price.toString(), "ether");
          let item = {
            price,
            tokenId: parseInt(i.tokenId),
            seller: i.seller,
            owner: i.owner,
            image: meta.data.image,
            name: meta.data.name,
            description: meta.data.description,
          };
          return item;
        })
      );
      setLoading(false);
      return items;
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, [contract]);

  const fetchProfileNfts = useCallback(async () => {
    try {
      setLoading(true);

      let data = await contract.methods
        .fetchMyNFTs()
        .call({ from: accounts[0] });
      let items = await Promise.all(
        data.map(async (i) => {
          let tokenUri = await contract.methods.tokenURI(i.tokenId).call();
          let meta = await axios.get(tokenUri);
          let price = web3.utils.fromWei(i.price.toString(), "ether");
          let item = {
            price,
            tokenId: parseInt(i.tokenId),
            seller: i.seller,
            owner: i.owner,
            image: meta.data.image,
            name: meta.data.name,
            description: meta.data.description,
          };
          return item;
        })
      );
      setLoading(false);
      return items;
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, [contract]);

  const resellNft = useCallback(
    async (id, price, owner) => {
      try {
        setLoading(true);
        let pricew = web3.utils.toWei(price, "ether");
        let listingPrice = await contract.methods.getListingPrice().call();
        listingPrice = listingPrice.toString();
        let res = await contract.methods
          .resellToken(id, pricew)
          .send({ value: listingPrice, from: owner });
        setLoading(false);
        navigate("/");
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    },
    [contract]
  );

  const buyNft = useCallback(async (id, price) => {
    console.log(id, price);
    try {
      setLoading(true);
      let pricew = web3.utils.toWei(price, "ether");
      await contract.methods
        .createMarketSale(id)
        .send({ from: accounts[0], value: pricew });
      setLoading(false);
      navigate("/profile");
    } catch (error) {
      setLoading(false);
    }
  }, []);

  return {
    create,
    fetchNfts,
    fetchMintedNfts,
    fetchProfileNfts,
    buyNft,
    resellNft,
    error,
    loading,
  };
};
