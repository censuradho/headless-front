import { Product } from "./product";

export interface GetHomeQueryResponse {
  description: string,
  title: string,
  emphasis: Product[]
}
