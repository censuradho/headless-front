import { Product } from "types/product";
import { ResponseDataType } from "factors/types";

import { responseFactory } from "factors/meta";
import strapiQuery from "lib/strapi-query";
import { productFactory } from "factors/product";
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
      "sizes",
      "sizes.size",
      "defaultImage",
    ],
    filters: {
      slug: {
        $eq: slug,
      },
    },
  });

  const response = await cmsApi.get<ResponseDataType<Product>>(query);

  const { data: product, ...rest } = response;

  const data = responseFactory({
    meta: product?.meta,
    data: productFactory(product.data),
  });

  return {
    ...rest,
    data,
  };
}
