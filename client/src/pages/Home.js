import React, { useEffect, useState } from "react";
import NftList from "../components/NftList";
import { useNft } from "../hooks/nft-hook";
import { Spinner, Center } from "@chakra-ui/react";

const Home = () => {
  const [list, setList] = useState(null);
  const { fetchNfts, error, loading } = useNft();

  useEffect(async () => {
    try {
      let nfts = await fetchNfts();
      if (!nfts) return;
      if (!nfts.length == 0) setList(nfts);
    } catch (err) {}
  }, [fetchNfts]);

  return (
    <>
      {loading ? (
        <Center>
          <Spinner size="xl" />
        </Center>
      ) : (
        <NftList path={"home"} nftList={list} />
      )}
    </>
  );
};

export default Home;
