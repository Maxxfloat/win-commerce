import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { QueryClientProvider, Hydrate, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import "swiper/css";
import { useState } from "react";

function MyApp({ Component, pageProps: pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 60 * 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
          <ReactQueryDevtools />
        </Hydrate>
      </Layout>
    </QueryClientProvider>
  );
}

export default MyApp;
