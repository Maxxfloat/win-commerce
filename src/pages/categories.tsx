import Image from "next/image";
import { FC } from "react";
import { useQuery } from "react-query";
import Link from "next/link";
import { getCategories } from "utils/getData";

const Categories: FC = () => {
  const { data }: { data: any[] | undefined } = useQuery(
    "categories",
    getCategories
  );
  return (
    <main className="grid grid-cols-4 gap-3 p-6">
      {data?.map((category, index) => {
        const info = category.attributes;
        const imageUrl =
          info.thumbnail?.data?.attributes.formats.medium?.url ||
          info.thumbnail?.data?.attributes.formats.small.url;
        return (
          <Link
            href={{
              pathname: "/products",
              query: { category: info.slug },
            }}
            key={info.slug}
          >
            <a className="flex flex-col justify-center border-2 border-gray-600">
              <Image
                src={imageUrl}
                alt={info.name}
                width={"90%"}
                height={"90%"}
                // className="aspect-square"
                layout="responsive"
              />
              <span className="py-3 font-bold text-center">{info.name}</span>
            </a>
          </Link>
        );
      })}
    </main>
  );
};

export default Categories;
