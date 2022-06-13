import { FC, ReactChild } from "react";
import Head from "next/head";

const Page: FC<{ children: ReactChild; headTitle: string }> = ({
  children,
  headTitle,
}) => {
  return (
    <>
      <Head>
        <title>{headTitle}</title>
      </Head>
      <main className="flex items-center justify-center w-screen h-screen">
        {children}
      </main>
    </>
  );
};

export default Page;
