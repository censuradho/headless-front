import { DotNestedKeys } from "types/utils";

interface Sort {
  value: string | number;
  desk?: boolean
}

type LogicalOperators<T> = {
  $and?: WhereParams<T>[];
  $or?: WhereParams<T>[];
  $not?: WhereParams<T>;
};

type AttributeOperators<T, K extends keyof T> = {
  $eq?: T[K] | Array<T[K]>;
  $ne?: T[K] | Array<T[K]>;
  $in?: T[K][];
  $notIn?: T[K][];
  $lt?: T[K];
  $lte?: T[K];
  $gt?: T[K];
  $gte?: T[K];
  $between?: [T[K], T[K]];
  $contains?: T[K];
  $notContains?: T[K];
  $containsi?: T[K];
  $notContainsi?: T[K];
  $startsWith?: T[K];
  $endsWith?: T[K];
  $null?: boolean;
  $notNull?: boolean;
  $not?: WhereParams<T> | AttributeOperators<T, K>;
};

export type WhereParams<T> = {
  [K in keyof T]?: T[K]  | AttributeOperators<T, K>;
} &
  LogicalOperators<T>;

export interface Pagination {
  page?: number;
  pageSize?: number
  withCount?: boolean
  start?: number;
  limit?: number
}

export interface Options<F> {
  sort?: Sort[]
  pagination?: Pagination
  publicationState?: 'live' | 'preview'
  fields?: Array<DotNestedKeys<F>> 
  filters?: WhereParams<F>
  populate?: Record<string, any>
}
