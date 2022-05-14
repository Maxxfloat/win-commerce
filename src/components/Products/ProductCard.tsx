import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const ProductCard: FC<{
  title: string;
  link: string;
  image: string;
  price: string;
}> = ({ title, image, price, link }) => {
  return (
    <Link href={`/products/${link}`}>
      <a className="flex justify-center border-[1px] border-gray-100 flex-col font-bold space-y-5 p-5 hover:shadow-xl shadow-black">
        {image && (
          <Image
            src={image}
            width={"100%"}
            height={200}
            alt={title}
            priority={true}
          />
        )}
        <p>{title}</p>
        <p>{price}</p>
      </a>
    </Link>
  );
};

export default ProductCard;
