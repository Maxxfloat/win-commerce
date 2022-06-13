import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SliderNavBtns from "./SliderNavBtns";
import { useQuery } from "react-query";
import { getSlider } from "utils/getData";
import Link from "next/link";

const Slider = () => {
  const { data }: { data: any[] | undefined } = useQuery("sliders", getSlider, {
    staleTime: 5 * 60 * 1000,
  });
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
      {data?.map((slide) => {
        return (
          <SwiperSlide key={slide.attributes.name}>
            <Link
              href={`/products/${slide.attributes.product.data.attributes.slug}`}
            >
              <a
                className="relative block h-64 bg-contain lg:h-80"
                style={{
                  backgroundImage: `url(${slide.attributes.img_name.data.attributes.url})`,
                }}
              ></a>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
