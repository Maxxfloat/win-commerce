import { useRouter } from "next/router";

const useServerRefresher = () => {
  const router = useRouter();

  return () => router.replace(router.asPath);
};

export default useServerRefresher;
