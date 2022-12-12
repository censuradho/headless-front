import { SizeOption } from "hooks/useProductSizes";
import { Product } from "lib/sanity/types/product";

export interface ProductSizeProps {
  onSelectSize?: (size: SizeOption) => void
  errorMessage?: string,
  product: Product
}
