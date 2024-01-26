import Web3 from "web3";
import { abi, contractAddress } from "../utils/constants";

let infuraApiKey = "c1603238953c42b79f03880326fea1b3";

export const getCardData = async (tokenId) => {
  try {
    let providerUrl = `https://mainnet.infura.io/v3/${infuraApiKey}`;

    let web3 = new Web3(providerUrl);

    const tokenIdToSearch = tokenId;

    const contract = new web3.eth.Contract(abi, contractAddress);

    const ownerAddress = await contract.methods.ownerOf(tokenIdToSearch).call();
    const result = await contract.methods.tokenURI(tokenIdToSearch).call();

    const metadataURI = result;
    const metadataResponse = await fetch(metadataURI);
    const metadata = await metadataResponse.json();

    const name = metadata.name;
    const description = metadata.description;
    const image = metadata.image_url;
    const attributes = metadata.attributes;

    const selectedItem = {
      name,
      description,
      image,
      ownerImage: image,
      ownerAddress: ownerAddress,
      attributes,
    };

    return selectedItem;
  } catch (error) {
    console.error("Error getting token info:", error);
    throw error;
  }
};

export const getNftsLength = async () => {
  const web3 = new Web3(`https://mainnet.infura.io/v3/${infuraApiKey}`);

  const contract = new web3.eth.Contract(abi, contractAddress);

  try {
    const length = await contract.methods.totalSupply().call();
    return length;
  } catch (error) {
    console.error(`Error getting NFTs length: ${error.message}`);
    throw error;
  }
};
