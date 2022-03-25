import React, { useEffect, useState } from "react";
import NftList from "../components/NftList";
import {
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { useNft } from "../hooks/nft-hook";
import { color } from "../style/colors";

const Profile = () => {
  const [listed, setListed] = useState(null);
  const [bought, setBought] = useState(null);
  const { fetchProfileNfts, fetchMintedNfts, error, loading } = useNft();

  useEffect(async () => {
    setBought([
      {
        price: "0.03",
        name: "First name",
        description: "The best nft",
        image:
          "data:image/png;base64,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",
      },
      {
        price: "0.03",
        name: "First name",
        description: "The best nft",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPCMDD7OLK3LuJdJR6fDW026l3qVi4G9TJ6g&usqp=CAU",
      },
    ]);
    // try {
    //   let nfts = await fetchProfileNfts();
    //   if (nfts === undefined || nfts.length == 0) return;
    //   setBought(nfts);
    // } catch (err) {}
  }, [fetchProfileNfts]);

  useEffect(async () => {
    try {
      let nfts = await fetchMintedNfts();
      if (nfts === undefined || nfts.length == 0) return;
      setListed(nfts);
    } catch (err) {}
  }, [fetchMintedNfts]);

  const CenterSpinner = () => {
    return (
      <Center>
        <Spinner color={color} size="lg" />
      </Center>
    );
  };

  return (
    <Tabs variant="soft-rounded" colorScheme="green" isFitted>
      <TabList mb="1em">
        <Tab>Collection</Tab>
        <Tab>Minted NFTs</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          {loading ? (
            <CenterSpinner />
          ) : (
            <NftList path={"profile"} nftList={bought} />
          )}
        </TabPanel>
        <TabPanel>
          {loading ? (
            <CenterSpinner />
          ) : (
            <NftList minted path={"profile"} nftList={listed} />
          )}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Profile;
