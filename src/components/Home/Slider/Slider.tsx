import React, { Fragment } from "react";
import { useSwiper, Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SliderNavBtns from "./SliderNavBtns";
import { useQuery } from "react-query";
import Image from "next/image";
import { getSlider } from "utils/getData";

const Slider = () => {
  const { data }: { data: any[] | undefined } = useQuery("sliders", getSlider, {
    staleTime: 5 * 60 * 1000,
  });
  console.log(data);
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      spaceBetween={20}
      slidesPerView={1}
      className="overflow-visible"
      loop={true}
    >
      <div className="absolute z-10 bottom-6 right-10">
        <SliderNavBtns />
      </div>
      {data?.map((slide) => (
        <SwiperSlide key={slide.attributes.name}>
          <div
            className="relative h-64 bg-contain lg:h-80"
            style={{
              backgroundImage: `url(${slide.attributes.img_name.data.attributes.url})`,
            }}
          >
            {/* <Image
              src={slide.attributes.img_name.data.attributes.url}
              alt={slide.attributes.name}
              layout="fill"
            /> */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
