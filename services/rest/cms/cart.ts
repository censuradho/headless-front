import { cartFactory } from "factors/cart";
import { responseFactory } from "factors/meta";
import strapiQuery from "lib/strapi-query";

import type {
  GetCartByIdResponse,
  GetCartResponse,
} from "types/cart";
import type { ResponseDataType } from "factors/types";

import { cmsApi } from ".";

export async function getCart(id: number) {
  const query = strapiQuery.parse(`/carts/${id}`, {
    populate: [
      "cartItems",
      "cartItems.inventory",
      "cartItems.inventory.product",
      "cartItems.inventory.product.defaultImage",
      "inventories",
      "cartItems.inventory.size",
    ],
  });

  const response = await cmsApi.get<ResponseDataType<GetCartByIdResponse>>(query);

  const { data: cart, ...rest } = response;

  const data = responseFactory({
    meta: cart?.meta,
    data: cartFactory(cart.data?.data),
  });

  return {
    ...rest,
    data,
  };
}

export async function getCarts(userId: number) {
  const query = strapiQuery.parse("/carts", {
    filters: {
      user: {
        id: {
          $eq: userId,
        },
      },
    },
  });

  const response = await cmsApi.get<ResponseDataType<GetCartResponse>>(query);

  const { data: cart, ...rest } = response;

  const data = responseFactory({
    meta: cart?.meta,
    data: cart.data?.data.map((entry) => cartFactory(entry)),
  });

  return {
    ...rest,
    data,
  };
}
