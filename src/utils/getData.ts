import get from "modules/get";
import qs from "qs";

const populateAllParam = qs.stringify(
  {
    populate: "*",
  },
  { encodeValuesOnly: true }
);

export const getSlider = async () =>
  get(`/slides?${populateAllParam}`).then((res) => res.data);

export const getClocks = async () => {
  const query = qs.stringify(
    {
      populate: "*",
      filters: {
        category: {
          name: {
            $eq: "clock",
          },
        },
      },
    },
    { encodeValuesOnly: true }
  );

  return get(`/products?${query}`).then((res) => res.data);
};

export const getCategories = async () => {
  const query = qs.stringify(
    {
      populate: "*",
    },
    { encodeValuesOnly: true }
  );
  return get(`/categories?${query}`).then((res) => res.data);
};

export const getCars = async () => {
  const query = qs.stringify(
    {
      populate: "*",
      filters: {
        category: {
          name: {
            $eq: "car",
          },
        },
      },
      pagination: {
        start: 0,
        limit: 2,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  return get(`/products?${query}`).then((res) => res.data);
};

export const getProducts = async (
  query: string = qs.stringify({ populate: "*" }, { encodeValuesOnly: true })
) => {
  return get(`/products?${query}`).then((res) => res.data);
};

export const getProduct = async (productSlug?: string | string[]) => {
  try {
    const query = qs.stringify({
      populate: "*",
      filters: {
        name: { $eq: productSlug },
      },
    });
    return await get(`/products?${query}`).then((res) => res.data);
  } catch {
    throw Error("NO DATA");
  }
};
