import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const SpecialOffer: FC<{
  link: string;
  price: number;
  src: string;
  name: string;
}> = ({ link, price, src, name }) => {
  return (
    <Link href={`/${link}`}>
      <a className="flex flex-col gap-5 p-3 border-2 border-gray-400 rounded-md ">
        <div className="relative grow">
          <Image src={src} alt={name} layout="fill" className="rounded-md" />
        </div>
        <div className="text-center">
          <p className="mb-2 text-3xl font-bold">{name}</p>
          <p className="text-xl font-semibold text-gray-700">{price}</p>
        </div>
      </a>
    </Link>
  );
};

export default SpecialOffer;
