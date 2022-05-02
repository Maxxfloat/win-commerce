import { FC } from "react";
import { useSwiper } from "swiper/react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

export const SliderNavBtn: FC = () => {
  const swiper = useSwiper();

  return (
    <>
      <button
        className="py-2 pl-3 pr-1 mr-1 text-2xl text-gray-500 bg-white border-2 border-gray-400 rounded-l-full md:text-3xl md:py-3 md:pl-5 md:pr-1"
        onClick={() => swiper.slidePrev()}
      >
        <BsArrowLeft />
      </button>
      <button
        className="py-2 pl-1 pr-3 text-2xl text-gray-500 bg-white border-2 border-gray-400 rounded-r-full md:text-3xl md:py-3 md:pl-1 md:pr-5"
        onClick={() => swiper.slideNext()}
      >
        <BsArrowRight />
      </button>
    </>
  );
};

export default SliderNavBtn;
