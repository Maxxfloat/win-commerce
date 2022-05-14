import { GetServerSideProps, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { FC, useEffect } from "react";
import { dehydrate, QueriesResults, QueryClient, useQuery } from "react-query";
import { getProduct } from "utils/getData";

const Product: FC<{ data: any[]; params: ParsedUrlQuery }> = ({
  data: fetchedData,
}) => {
  const router = useRouter();
  const { product } = router.query;
  const { data }: { data: any[] | undefined } = useQuery(
    ["product", product],
    () => getProduct(product),
    { initialData: fetchedData }
  );

  useEffect(() => {
    if (data === undefined) {
      router.push("/");
    }
    // if (data[0])
  }, [data, router]);

  const info = data && data[0]?.attributes;
  const imageUrl =
    info?.image.data.attributes.formats.large?.url ||
    info?.image.data.attributes.formats.medium?.url;
  return (
    info && (
      <main className="justify-between p-6 lg:flex">
        <article className="w-full p-2 mb-10 border-2 border-gray-400 rounded-lg lg:w-1/2 lg:h-1/2 aspect-square">
          <div className="relative w-full h-full ">
            <Image src={imageUrl} layout="fill" alt={info.name} />
          </div>
        </article>
        <article className="flex flex-col lg:h-full lg:w-1/2 lg:p-10">
          <div className="flex flex-col w-full gap-2 ">
            <div className="flex justify-end w-full">
              {info.available ? (
                <p className="flex items-center justify-center w-1/3 h-16 text-lg text-white bg-sky-900">
                  available
                </p>
              ) : (
                <p className="flex items-center justify-center w-1/3 h-16 text-lg bg-gray-300">
                  Unavailable
                </p>
              )}
            </div>
            <p className="font-bold text-8xl">{info.price}</p>
            <button className="w-full h-20 text-2xl text-white bg-red-500 rounded-md hover:bg-red-800 ">
              Order
            </button>
          </div>
          <div className="w-full p-3 mt-20 border-2 border-gray-400 rounded-lg ">
            <p className="mb-4 text-4xl font-bold">{info.name}</p>
            <p className="text-lg text-justify">{info.description}</p>
          </div>
        </article>
      </main>
    )
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params)
    return {
      notFound: true,
    };
  // const queryClient = new QueryClient();
  //  (typeof params?.product);
  // await queryClient.prefetchQuery(["product", params.product], () =>
  //   getProduct(params?.product)
  // );
  // return {
  //   props: { dehydratedState: dehydrate(queryClient) },
  // };
  const data = await getProduct(params.product);

  if (data.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};
export default Product;
