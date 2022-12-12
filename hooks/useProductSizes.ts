import { useState } from "react";

import { Product } from "lib/sanity/types/product";

export interface SizeOption {
  stock: number,
  size: string,
  remainingMessage: string
  unavailableSize: boolean
}

export function useProductSizes(params: Product) {
  const [size, setSize] = useState<SizeOption>();

  const {
    sizes: sizeOptions,
  } = params;

  const getRemainingMessage = (amount: number) => {
    if (amount === 1) return `Resta ${amount}`;
    if (amount > 0 && amount <= 3) return `Restam ${amount}`;
    return "";
  };

  const sizes: SizeOption[] = sizeOptions?.map((value) => ({
    size: value.size.name,
    stock: value.stock,
    unavailableSize: value.stock === 0,
    remainingMessage: getRemainingMessage(value.stock),
  }));

  return {
    size,
    setSize,
    sizes,
  };
}
