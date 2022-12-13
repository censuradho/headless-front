import { Meta, ResponseDataType } from "./types";

export function metaFactory(props: Partial<Meta>): Meta {
  return {
    pagination: {
      page: props.pagination?.page || 0,
      pageCount: props.pagination?.pageCount || 0,
      pageSize: props.pagination?.pageSize || 0,
      total: props.pagination?.total || 0,
    },
  };
}

export function responseFactory <T>(props: Partial<ResponseDataType<T>>): ResponseDataType<T> {
  return {
    meta: metaFactory(props?.meta || {}),
    data: props?.data || {} as T,
  };
}
