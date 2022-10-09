import { Product } from "types/product";
import { ResponseDataType } from "factors/types";

import { responseFactory } from "factors/meta";
import strapiQuery from "lib/strapi-query";
import { cmsApi } from ".";

export async function getProducts() {
  const response = await cmsApi.get<ResponseDataType<Product[]>>("/products?fields=*&populate=*");

  const { data: products, ...rest } = response;

  const data = responseFactory(products);

  return {
    ...rest,
    data,
  };
}

export async function getProduct(options: { id: string, slug: string }) {
  const { id, slug } = options;

  const query = strapiQuery.parse(`/products/${id}`, {
    populate: [
      "image",
      "size",
    ],
    filters: {
      slug: {
        $eq: slug,
      },
    },
  });

  const response = await cmsApi.get<ResponseDataType<Product>>(query);

  const { data: product, ...rest } = response;

  console.log(product);

  const data = responseFactory(product);

  return {
    ...rest,
    data,
  };
}
