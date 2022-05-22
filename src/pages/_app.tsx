import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import {
  QueryClientProvider,
  Hydrate,
  QueryClient,
  useQuery,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Context from "modules/context";
import { parseCookies, destroyCookie } from "nookies";
import instance from "modules/apiInstance";

import "swiper/css";
import { useEffect, useState } from "react";

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
  const [user, setUser] = useState<Object | undefined>();
  // const [categories, setCategories] = useState<Object[] | undefined>();
  // const { data: user } = useQuery("user", getUser);

  useEffect(() => {
    const { accessToken: token } = parseCookies();
    if (token) {
      instance
        .get(`/users/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.statusText !== "ok") {
            destroyCookie(null, "accessToken");
            setUser(undefined);
            return null;
          }
          setUser(res.data);
        });
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Context.Provider value={{ user, setUser, isAuthenticated: !!user }}>
        <Layout>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
            <ReactQueryDevtools />
          </Hydrate>
        </Layout>
      </Context.Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
