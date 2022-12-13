import { Size, Product } from "lib/sanity/types/product";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
} from "react";

export interface CartProviderProps {
  children: ReactNode
}

export interface VariantOption extends Pick<Size, "_id" | "name">{
  quantity: number,
  stock: number
}

export type ProductAttr = Pick<Product,
  "description"
  | "discount"
  | "price"
  | "images"
  | "_id"
  | "slug"
  | "name"
>

export interface CartAttr extends ProductAttr {
  variant: Record<string, VariantOption>
}

export interface Cart {
  [productId: string]: CartAttr
}

export interface CartContextProps {
  cart: Cart
  isOpenResumeCart: boolean
  subTotal: number
  setIsOpenResumeCart: Dispatch<SetStateAction<boolean>>
  addCartItem: (payload: CartAttr, type?: "increase" | "set") => void
  decreaseCartItem: (productId: string, variantId: string) => void
  removeCartItem: (productId: string, variantId: string) => void
}
