import { dehydrate, QueryClient, useQuery } from "react-query";
import ProductCard from "components/Products/ProductCard";
import { getProducts } from "utils/getData";
import qs from "qs";
import { GetStaticProps } from "next/types";

const Products = () => {
  const filters: string = qs.stringify(
    {
      populate: "*",
    },
    { encodeValuesOnly: true }
  );

  const { data }: { data: any[] | undefined } = useQuery(
    ["products", filters],
    () => getProducts(filters),
    { staleTime: 5 * 60 * 1000 }
  );
  //   return <></>;
  return (
    <main>
      <article></article>
      <section>
        <span>All Products</span>
        <article className="grid grid-cols-1 my-6 md:grid-cols-3 lg:grid-cols-5">
          {data?.map((product) => {
            const info = product.attributes;
            const imageUrl =
              info.image.data.attributes.formats.medium?.url ||
              info.image.data.attributes.formats.small?.url;

            const displayInfo: {
              title: string;
              link: string;
              image: string;
              price: string;
            } = {
              title: info.name,
              link: info.slug,
              image: imageUrl,
              price: info.price,
            };
            console.count();
            return (
              <div key={info.slug}>
                <ProductCard {...displayInfo} />
              </div>
            );
          })}
        </article>
      </section>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  //   await queryClient.prefetchQuery("products", () => getProducts());
  await queryClient.prefetchQuery("products", () => getProducts());
  return {
    props: { dehydratedState: dehydrate(queryClient) },
    revalidate: 60 * 60,
  };
};
export default Products;
