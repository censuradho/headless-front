import { SizeOption } from "hooks/useProductSizes";

import { Product } from "types/product";

export interface ProductSizeProps {
  onSelectSize?: (size: SizeOption) => void;
  errorMessage?: string;
  product: Product;
}
