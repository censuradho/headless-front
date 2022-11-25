import { InventoryAttr } from "./product";
import { Data, Entity } from "./utils";

export interface CartItemAttr {
  createdAt: string
  updatedAt: string
  quantity: number
  inventory: Data<Entity<InventoryAttr>>
}

export type CartItem = Entity<CartItemAttr>

export interface CartAttr {
  createdAt: string
  updatedAt: string
  cartItems: Data<CartItem[]>
}

export type Cart = Entity<CartAttr>

export type GetCartResponse = Data<Cart[]>
export type GetCartByIdResponse = Data<Cart>
