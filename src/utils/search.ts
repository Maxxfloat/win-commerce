import qs from "qs";
import get from "modules/get";

const search = async (input: string) => {
  if (input)
    if (input?.length < 3) {
      return null;
    }
  const query = qs.stringify(
    {
      filters: {
        $containsi: input,
      },
    },
    { encodeValuesOnly: true }
  );
  const products = await get(`/products?${input && query}`).then(
    (res) => res.data
  );
  // const categories = await get(`/categories?${query}`).then((res) => res.data);

  // return { products, categories };
  return products;
};

export default search;
