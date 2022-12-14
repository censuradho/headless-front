import { responseFactory } from "factors/meta";
import { ResponseDataType } from "factors/types";

import {
  Address,
  AddressAttr,
  GenerateCardTokenRequest,
  GenerateCardTokenResponse,
  Perfil,
  PostPerfilRequest,
  PutPerfilRequest,
} from "types/checkout";

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

export async function getAddress() {
  const response = await cmsApi.get<ResponseDataType<Address[]>>("/user-addresses");

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

export async function postPerfil(payload: PostPerfilRequest) {
  const response = await cmsApi.post<ResponseDataType<Perfil>>("/perfils", {
    data: {
      ...payload,
    },
  });

  const {
    data: perfil,
    ...rest
  } = response;

  const data = responseFactory({
    meta: perfil?.meta,
    data: perfil.data,
  });

  return {
    data,
    ...rest,
  };
}

export async function putPerfil(id: number, payload: PutPerfilRequest) {
  const response = await cmsApi.put<ResponseDataType<Perfil>>(`/perfils/${id}`, {
    data: {
      ...payload,
    },
  });

  const {
    data: perfil,
    ...rest
  } = response;

  const data = responseFactory({
    meta: perfil?.meta,
    data: perfil.data,
  });

  return {
    data,
    ...rest,
  };
}

export async function getPerfil() {
  const response = await cmsApi.get<ResponseDataType<Perfil[]>>("/perfils");

  const {
    data: perfil,
    ...rest
  } = response;

  const [currentPerfil] = perfil.data;

  const data = responseFactory({
    meta: perfil?.meta,
    data: currentPerfil,
  });

  return {
    data,
    ...rest,
  };
}

export async function generateCardToken(payload: GenerateCardTokenRequest) {
  return cmsApi.post<GenerateCardTokenResponse>("/charge/token", payload);
}
