import { useState } from "react";

import { ProductAttr } from "types/product";

export function useProductSizes(props: ProductAttr, defaultSize: string) {
  const [size, setSize] = useState<string | null>(defaultSize as string);

  const {
    sizes: productSizes,
  } = props;

  const sizes = productSizes
    ?.filter((value) => value.id)
    ?.map((value) => ({
      stock: value?.stock,
      size: value?.size?.data?.attributes?.name,
    }));

  const unavailableSizes = sizes?.filter((value) => value.stock === 0);
  const isUniqueSize = sizes.length === 1;
  const remainingMessage = sizes.length <= 3 ? `Restam ${sizes.length}` : "";

  return {
    sizes,
    unavailableSizes,
    isUniqueSize,
    size,
    setSize,
    remainingMessage,
  };
}
