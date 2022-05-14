import type { NextPage, GetStaticProps, GetServerSideProps } from "next";
import Head from "next/head";
import { dehydrate, QueryClient, useQuery } from "react-query";
import dynamic from "next/dynamic";
import Slider from "components/Home/Slider/Slider";
import { getSlider, getClocks, getCategories, getCars } from "utils/getData";
// import SpecialOfferWraper from "components/Home/SpecialOffer/SpecialOfferWraper";
// import HomeSwiper from "components/Home/OfferSwiper/HomeSwiper";

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
        {/* <div className="h-48 text-white bg-black"></div> */}
        <Slider />
        {/* <div title="categories" className="bg-yellow-500 h-11"></div> */}
        <div
          id="CategorySection"
          className="flex items-center justify-center h-48 space-x-3 mt-9 md:space-x-4 lg:space-x-5"
        >
          <CategorySection />
        </div>
        {typeof window !== "undefined" && <HomeSwiper />}
        <div className="flex flex-col items-center justify-center mt-20">
          <span className="text-3xl font-bold lg:text-7xl">Special Offer</span>
          <div className="flex flex-col items-center justify-center my-11 lg:flex-row space-y-7 lg:space-y-0 lg:space-x-32">
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
