import { ProductAttr } from "./product";

export interface WishlistUpdatePayload {
  products: number[],
  user: number,
  sizes: number[]
}

export type WishlistProduct = Pick<ProductAttr,
  "defaultImage"
  | "description"
  | "price"
  | "name"
  | "discount"
  | "slug"
  | "id"
  | "installment"
  | "sizes"
>

export interface WishlistUpdateResponse {
  id: number
  products: WishlistProduct
}
