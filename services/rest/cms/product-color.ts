import strapiQuery from "lib/strapi-query";

import { ResponseDataType } from "factors/types";
import { ProductColorsRequest } from "types/product-colors";
import { responseFactory } from "factors/meta";
import { cmsApi } from ".";

export async function getProductColor(productId: number) {
  const query = strapiQuery.parse("/product-colors", {
    populate: ["image", "products"],
    filters: {
      products: {
        id: {
          $eq: productId,
        },
      },
    },
  });

  const response = await cmsApi.get<ResponseDataType<ProductColorsRequest[]>>(query);

  const { data: color, ...rest } = response;

  const data = responseFactory({
    meta: color?.meta,
    data: color.data,
  });

  return {
    ...rest,
    data,
  };
}
