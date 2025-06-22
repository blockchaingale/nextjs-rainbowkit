import { createThirdwebClient, defineChain as thirdwebChain } from 'thirdweb';
import { createConfig, http } from 'wagmi';
import { inAppWalletConnector } from "@thirdweb-dev/wagmi-adapter";
import {
  arbitrum,
  goerli,
  mainnet,
  optimism,
  polygon,
  base,
  zora,
  avalanche,
  master
  Chain,
} from 'wagmi/chains';

const client = createThirdwebClient({
  clientId: "654d245030441fe158c45b853815aa08",
});

const sonic: Chain = {
  id: 146,
  name: "Sonic",
  nativeCurrency: {
    decimals: 18,
    name: "s",
    symbol: "S",
  },
  // rpcUrls: {
  //   default: { http: ["https://rpc.soniclabs.com"] },
  //   public: { http: ["https://rpc.soniclabs.com"] }, // Replace with your RPC URL
  // },
  blockExplorers: {
    default: {
      name: "SonicScan",
      url: "https://soniscan.org",
    },
  },
}

const berachain: Chain = {
  id: 80094,
  name: "Berachain",
  nativeCurrency: {
    decimals: 18,
    name: "bera",
    symbol: "BERA",
  },
  rpcUrls: {
    default: { http: ["https://rpc.berachain.com"] },
    public: { http: ["https://rpc.berachain-apis.com"] }, // Replace with your RPC URL
  },
  blockExplorers: {
    default: {
      name: "Berascan",
      url: "https://berascan.com",
    },
  },
}

export const config = createConfig({
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    zora,
    bsc,
    avalanche,
    berachain,
    sonic,
  ],
  connectors: [
    // add the in-app wallet connector
    inAppWalletConnector({
      client,
      smartAccount: {
        sponsorGas: true,
        chain: thirdwebChain(1)
      }
    }),
  ],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
    [polygon.id]: http(),
    [optimism.id]: http(),
    [bsc.id]: http(),
    [berachain.id]: http(),
    [sonic.id]: http(),
    [avalanche.id]: http(),
    [arbitrum.id]: http(),
  },
});
