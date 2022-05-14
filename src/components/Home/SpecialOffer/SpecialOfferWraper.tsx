import React from "react";
import { useQuery } from "react-query";
import { getCars } from "utils/getData";
import SpecialOffer from "./SpecialOffer";

const SpecialOfferWraper = () => {
  const { data }: { data: any[] | undefined } = useQuery("cars", getCars);
  return (
    <>
      {data?.map((product) => {
        const info = product.attributes;
        const imageUrl = info.image?.data?.attributes.formats.medium.url;
        console.log(imageUrl);
        return (
          <SpecialOffer
            key={info.name}
            link={info.slug}
            name={info.name}
            src={imageUrl}
            price={info.price}
          />
        );
      })}
    </>
  );
};

export default SpecialOfferWraper;
