import qs from "qs";
import get from "modules/get";

const search = async (input: string): Promise<any[] | null> => {
  if (input.length < 2) return [];
  const query = qs.stringify(
    {
      populate: "*",
      filters: {
        name: { $containsi: input },
      },
    },
    { encodeValuesOnly: true }
  );
  const products = await get(`/products?${input && query}`).then(
    (res) => res.data
  );
  return products;
};

export default search;
