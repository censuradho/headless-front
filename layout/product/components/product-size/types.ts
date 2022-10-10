import { SizeOption } from "hooks/useProductSizes";

import { ProductAttr } from "types/product";

export interface ProductSizeProps extends ProductAttr {
  onSelectSize?: (size: SizeOption) => void
}
