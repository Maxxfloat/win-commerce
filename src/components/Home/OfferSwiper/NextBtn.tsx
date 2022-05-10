import { useSwiper } from "swiper/react";
import { BsArrowRight } from "react-icons/bs";
import { FC } from "react";
import Swiper from "swiper";

const NextBtn: FC<{ swiper?: Swiper }> = ({ swiper }) => {
  //   const Swiper = useSwiper();
  return (
    <button
      onClick={() => {
        swiper?.slideNext();
      }}
      className="p-3 ml-2 rounded-full bg-white border-[1px] border-gray-500"
    >
      <BsArrowRight />
    </button>
  );
};

export default NextBtn;
