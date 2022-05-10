import { FC } from "react";
import Image from "next/image";
const Slide: FC<{ src: string; alt: string }> = ({ src, alt }) => {
  return (
    <div className="relative object-contain h-72">
      <Image src={src} alt={alt} layout="fill" />
    </div>
  );
};

export default Slide;
