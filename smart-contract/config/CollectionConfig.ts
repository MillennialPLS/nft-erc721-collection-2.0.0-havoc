import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import { ethereumTestnet, ethereumMainnet } from '../lib/Networks';
import { openSea } from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: ethereumTestnet,
  mainnet: ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'HamburgaHavoc',
  tokenName: 'Hamburga Havoc',
  tokenSymbol: 'BURGA',
  hiddenMetadataUri: 'ipfs://QmdYfXH72f3QfQYSJL7yHxS4EwkPVd9DANfDrPkSGRw9PR/hidden.json',
  maxSupply: 444,
  whitelistSale: {
    price: 0.025,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.025,
    maxMintAmountPerTx: 100,
  },
  publicSale: {
    price: 0.044,
    maxMintAmountPerTx: 100,
  },
  contractAddress: '0xf7C358b09a484cc2edfC3108cABD410C345Cc066',
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
