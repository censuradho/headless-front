import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { ProductAttr } from "types/product";

interface Size {
  stock: number,
  size: string,
  id: number,
}

export function useProductSizes(props: ProductAttr) {
  const router = useRouter();
  const { size: defaultSize } = router.query;

  const [size, setSize] = useState<Size>();

  const {
    sizes: productSizes,
  } = props;

  const sizes = productSizes
    ?.filter((value) => value.id)
    ?.map((value) => ({
      stock: value?.stock,
      size: value?.size?.data?.attributes?.name,
      id: value?.id,
      // eslint-disable-next-line no-nested-ternary
      remainingMessage: value.stock === 1 ? `Resta ${value.stock}` : value.stock > 0 && value.stock <= 3 ? `Restam ${value.stock}` : "",
      unavailableSize: value?.stock === 0,
    }));

  const isUniqueSize = sizes.length === 1;

  useEffect(() => {
    if (!defaultSize) return;

    setSize(sizes.find((value) => value.size === defaultSize as string));
  }, [defaultSize]);

  return {
    sizes,
    isUniqueSize,
    size,
    setSize,
  };
}
