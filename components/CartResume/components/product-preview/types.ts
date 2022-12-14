import { InventoryCartItem, ProductCartItemAttr } from "context/cart/types";

export interface ProductPreviewProps {
  product: ProductCartItemAttr;
  inventory: InventoryCartItem;
}
