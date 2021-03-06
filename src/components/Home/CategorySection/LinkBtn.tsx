import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const LinkBtn: FC<{ link: string; src: string; categoryName: string }> = ({
  link,
  src,
  categoryName,
}) => {
  return (
    <Link
      href={{
        pathname: "/products",
        query: { category: link },
      }}
    >
      <a className="flex flex-col justify-center ">
        <div className="relative h-[80px] w-[80px]">
          <Image
            src={src}
            alt={categoryName}
            layout="fill"
            className="rounded-full "
          />
        </div>
        <span className="py-3 font-bold text-center">{categoryName}</span>
      </a>
    </Link>
  );
};

export default LinkBtn;
