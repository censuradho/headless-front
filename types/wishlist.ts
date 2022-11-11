import { ProductAttr } from "./product";

export interface WishlistUpdatePayload {
  inventories: number[],
  user: number,
}

export type WishlistProduct = Pick<ProductAttr,
  "defaultImage"
  | "description"
  | "price"
  | "name"
  | "discount"
  | "slug"
  | "installment"
  | "sizes"
>

export interface WishlistUpdateResponse {
  id: number
  products: WishlistProduct
}
