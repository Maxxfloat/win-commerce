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
      <a className="flex flex-col items-center justify-center p-5 space-y-4 border-2 border-gray-400 rounded-md ">
        <div className="relative h-56 w-80">
          <Image src={src} alt={name} layout="fill" className="rounded-3xl" />
        </div>
        <p className="text-3xl font-bold">{name}</p>
        <p className="text-xl font-semibold text-gray-700">{price}</p>
      </a>
    </Link>
  );
};

export default SpecialOffer;
