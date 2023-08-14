import { polygonMumbai } from "wagmi/chains";

export const ChainList = [
  {
    name: "mainnet",
    rpc: "https://sadwadsadawdawd", // ! todo
    swapRouterContractAddress: "", // ! todo
    explorerContractAddress: "", // ! todo
    tokenList: [
      {
        name: "USDC",
        address: "0xsadwadsadwadawd", // ! todo
        icon: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
      },
    ],
    currencyList: [
      {
        name: "USD",
        icon: "https://cdn-icons-png.flaticon.com/512/591/591971.png",
      },
    ],
  },
  {
    name: "polygonMumbai",
    // rpc: 'https://polygontestapi.terminet.io/rpc',
    rpc: polygonMumbai.rpcUrls,
    swapRouterContractAddress: "",
    explorerContractAddress: "",
    tokenList: [
      {
        name: "GFARMDAI",
        address: "0x04B2A6E51272c82932ecaB31A5Ab5aC32AE168C3",
        icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/4943.png",
      },
    ],
    currencyList: [
      {
        name: "USD",
        icon: "https://cdn-icons-png.flaticon.com/512/591/591971.png",
      },
    ],
  },
];
