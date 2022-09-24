import { DotNestedKeys } from "types/utils";

interface Sort {
  value: string | number;
  desk?: boolean
}

interface FilterOptions {
  /**Equal*/
  $eq?: string | number
  /**Equal (case-insensitive)*/
  $eqi?: string | number
  /**Not equal*/
  $ne?: string | number
  /**Less than*/
  $lt?: string | number
  /**Less than or equal to*/
  $lte?: string | number
  /**Greater than*/
  $gt?: string | number
  /**Greater than or equal to*/
  $gte?: string | number
  /**Included in an array*/
  $in?: (string | number)[]
  /**Not included in an array*/
  $notIn?: (string | number)[]
  /**Contains*/
  $contains?: string | number
  /**Does not contain*/
  $notContains?: string | number
  /**Contains (case-insensitive)*/
  $containsi?: string | number
  /**Does not contain (case-insensitive)*/
  $notContainsi?: string | number
  /**Is null*/
  $null?: string | number
  /**Is not null*/
  $notNull?: string | number
  /**Is between*/
  $between?: string | number
  /**Starts with*/
  $startsWith?: string | number
  /**Ends with*/
  $endsWith?: string | number
}

export interface Pagination {
  page?: number;
  pageSize?: number
  withCount?: boolean
  start?: number;
  limit?: number
}

// type Filters<T> = Record<string, FilterOptions | RecursiveFilters<T>>

type Filters<T = {}> = T extends FilterOptions ? Extract<FilterOptions, T> : Record<string, FilterOptions | RecursiveFilters>
interface RecursiveFilters extends Filters {}


export interface Options<F> {
  sort?: Sort[]
  pagination?: Pagination
  publicationState?: 'live' | 'preview'
  /**By default, fields are selected except relations, media, dynamic zones, and components, but you can specify a wildcard * instead of an array.*/
  fields?: Array<DotNestedKeys<F>> 
  // filters?: Filters<F> | FilterOptions
  filters?: FilterOptions | Filters<F>
}
