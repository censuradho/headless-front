import { responseFactory } from "factors/meta";
import { ResponseDataType } from "factors/types";
import strapiQuery from "lib/strapi-query";
import { Address, AddressAttr } from "types/checkout";
import { Data } from "types/utils";
import { cmsApi } from ".";

export async function postAddress(payload: AddressAttr) {
  const response = await cmsApi.post<ResponseDataType<Address>>("/user-addresses", {
    data: {
      ...payload,
    },
  });

  const {
    data: checkout,
    ...rest
  } = response;

  const data = responseFactory({
    meta: checkout?.meta,
    data: checkout.data,
  });

  return {
    data,
    ...rest,
  };
}

export async function putAddress(id: number, payload: AddressAttr) {
  const response = await cmsApi.put<ResponseDataType<Address>>(`/user-addresses/${id}`, {
    data: {
      ...payload,
    },
  });

  const {
    data: address,
    ...rest
  } = response;

  const data = responseFactory({
    meta: address?.meta,
    data: address.data,
  });

  return {
    data,
    ...rest,
  };
}

export async function getAddressByUserId(userId: number) {
  const query = strapiQuery.parse("/user-addresses", {
    filters: {
      user: {
        id: userId,
      },
    },
  });

  const response = await cmsApi.get<ResponseDataType<Address[]>>(query);

  const {
    data: address,
    ...rest
  } = response;

  const mainAddress = address.data.find((value) => value.attributes?.isMain);
  const [firstAddress] = address.data;

  const data = responseFactory({
    meta: address?.meta,
    data: mainAddress || firstAddress,
  });

  return {
    data,
    ...rest,
  };
}
