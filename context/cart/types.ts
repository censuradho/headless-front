import { ReactNode } from "react";
import { ProductAttr } from "types/product";

export interface CartProviderProps {
  children: ReactNode
}

export interface InventoryCartItem {
  size: string
  id: number,
  stock: number
  quantity: number
}

export type ProductCartItemAttr = Pick<ProductAttr,
  "defaultImage"
  | "name"
  | "price"
  | "slug"
> & {
  id: number
}

export interface CartAttr extends ProductCartItemAttr {
  inventories: Record<string | number, InventoryCartItem>
}

export type Cart = Record<string | number, CartAttr>
export interface CartContextProps {
  cart: Cart
  addCartItem: (payload: CartAttr, type?: "increase" | "set") => void
  decreaseCartItem: (productId: number, inventoryId: number) => void
  removeCartItem: (productId: number, inventoryId: number) => void
}
