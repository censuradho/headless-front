import { Wish } from "context/profile/types";
import { SizeOption } from "hooks/useProductSizes";
import { Product } from "types/product";

export interface ProductPreviewProps extends Wish {
  product: Product;
  size: SizeOption
  amount: number
}
