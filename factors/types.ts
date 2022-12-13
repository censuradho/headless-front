interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Meta {
  pagination: Pagination;
}

export interface ResponseDataType<T> {
  meta: Meta;
  data: T;
}
