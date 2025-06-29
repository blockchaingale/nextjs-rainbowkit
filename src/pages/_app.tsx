import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// import { WagmiProvider  } from "wagmi";
import { ChainProvider, ThirdwebProvider } from "thirdweb/react";

import { config } from '../wagmi';

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={config}>
      <ThirdwebProvider>
          <QueryClientProvider client={client}>
            <RainbowKitProvider>
              <Component {...pageProps} />
            </RainbowKitProvider> 
          </QueryClientProvider>
      </ThirdwebProvider>
    </WagmiProvider>
  );
}

export default MyApp;
