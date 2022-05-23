import { Dispatch, FC, SetStateAction, useState } from "react";
import { useQuery, UseQueryResult } from "react-query";
import SwiperType from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { getClocks } from "utils/getData";
import NextBtn from "./NextBtn";
import ProductCard from "./ProductCard";
import SwiperBanner from "./SwiperBanner";

const BBtn: FC<{
  setSwiper: Dispatch<SetStateAction<SwiperType | undefined>>;
}> = ({ setSwiper }) => {
  const swiper = useSwiper();
  setSwiper(swiper);
  return null;
};
const HomeSwiper = () => {
  const { data, isSuccess } = useQuery("clocks", getClocks);
  const [navSwiper, setNavSwiper] = useState<SwiperType>();
  return (
    <div className="relative flex items-center w-full p-3 mx-auto my-8 overflow-visible bg-red-600 lg:w-10/12 xl:w-9/12">
      <SwiperBanner />
      <Swiper
        spaceBetween={5}
        slidesPerView={2}
        breakpoints={{
          760: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        loop={true}
        className="flex rounded-md -z-20"
      >
        {isSuccess &&
          data.map((product: { attributes: any }) => {
            const info = product.attributes;
            const imageUrl = info.image.data.attributes.formats.thumbnail.url;
            return (
              <SwiperSlide key={info.name}>
                <ProductCard
                  href={`/products/${info.name}`}
                  alt={info.name}
                  prevPrice={info.price}
                  offPercent={5}
                  src={imageUrl}
                  totalPrice={Number(
                    (info.price - (info.price * 5) / 100).toFixed(2)
                  )}
                />
              </SwiperSlide>
            );
          })}
        <BBtn setSwiper={setNavSwiper} />
      </Swiper>

      <div className="w-20" />
      <div className="absolute z-10 overflow-visible right-2 lg:right-0">
        <NextBtn swiper={navSwiper} />
      </div>
    </div>
  );
};

export default HomeSwiper;
