import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { dehydrate, QueryClient } from "react-query";
import dynamic from "next/dynamic";
import Slider from "components/Home/Slider/Slider";
import { getSlider, getClocks, getCategories, getCars } from "utils/getData";

const HomeSwiper = dynamic(
  () => import("../components/Home/OfferSwiper/HomeSwiper")
);
const CategorySection = dynamic(
  () => import("../components/Home/CategorySection/CategorySection")
);
const SpecialOfferWraper = dynamic(
  () => import("../components/Home/SpecialOffer/SpecialOfferWraper")
);
const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Win Commerce</title>
        <meta name="description" content="a e-commerce Web app" />
      </Head>

      <main className="">
        <Slider />
        <div
          id="CategorySection"
          className="flex items-center justify-center h-48 space-x-3 mt-9 md:space-x-4 lg:space-x-5"
        >
          <CategorySection />
        </div>
        {typeof window !== "undefined" && <HomeSwiper />}
        <div className="flex flex-col mt-10 h-fit">
          <span className="block text-3xl font-bold text-center lg:text-7xl">
            Special Offer
          </span>
          <div className="grid grid-cols-1 px-3 h-fit lg:px-6 lg:grid-cols-2 grow my-11 gap-7 lg:gap-32 ">
            <SpecialOfferWraper />
          </div>
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("sliders", getSlider);
  await queryClient.prefetchQuery("clocks", getClocks);
  await queryClient.prefetchQuery("categories", getCategories);
  await queryClient.prefetchQuery("cars", getCars);
  return {
    props: { dehydratedState: dehydrate(queryClient) },
    revalidate: 60 * 60,
  };
};

export default Home;
