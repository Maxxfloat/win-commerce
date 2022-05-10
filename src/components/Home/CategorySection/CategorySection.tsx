import Link from "next/link";
import React, { Fragment } from "react";
import { useQuery } from "react-query";
import { HiDotsHorizontal } from "react-icons/hi";

import { getCategories } from "utils/getData";
import LinkBtn from "./LinkBtn";

const CategorySection = () => {
  const { data: categories }: { data: any[] | undefined } = useQuery(
    "categories",
    getCategories,
    {
      staleTime: 5 * 60 * 1000,
    }
  );
  return (
    <>
      {categories?.map((category, index) => {
        const info = category.attributes;
        const imageUrl = info.thumbnail?.data?.attributes.formats.thumbnail.url;
        return (
          <Fragment key={info.name}>
            {info?.thumbnail?.data && (
              <LinkBtn
                // key={index}
                link={info.slug}
                src={imageUrl}
                categoryName={info.name}
              />
            )}
          </Fragment>
        );
      })}
      <Link href={"/categories"}>
        <a className="font-bold text-center">
          <div className="flex w-[80px] h-[80px] items-center justify-center bg-gray-300 rounded-full ">
            <HiDotsHorizontal />
          </div>
          <p className="py-3">More</p>
        </a>
      </Link>
    </>
  );
};

export default CategorySection;
