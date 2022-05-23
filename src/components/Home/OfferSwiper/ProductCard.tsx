import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard: FC<{
  href: string;
  totalPrice: number;
  prevPrice: number;
  offPercent: number;
  src: string;
  alt: string;
}> = ({ href, totalPrice, prevPrice, offPercent, src, alt }) => {
  return (
    <Link href={href} passHref>
      <a className="flex flex-col w-full h-64 bg-white">
        <Image
          src={src}
          alt={alt}
          width={"100%"}
          height={"100%"}
          className="aspect-square"
          layout="responsive"
        />
        <div className="flex items-center justify-center py-3 space-x-3">
          <strong>$ {totalPrice}</strong>
          <strong className="px-2 py-1 text-white bg-red-600 rounded-l-full rounded-r-full">
            {offPercent}%
          </strong>
        </div>
        <del className="block text-sm font-semibold text-center text-gray-400">
          {prevPrice}
        </del>
      </a>
    </Link>
  );
};

export default ProductCard;
