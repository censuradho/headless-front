import { InventoryAttr } from "./product";
import { Data, Entity } from "./utils";

export interface CartItemAttr {
  createdAt: string
  updatedAt: string
  quantity: number
  inventory: Data<Entity<InventoryAttr>>
}

export interface CartAttr {
  createdAt: string
  updatedAt: string
  cartItems: Data<Entity<CartItemAttr>>
}

export type Cart = Data<Entity<CartAttr>[]>
