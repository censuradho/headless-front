import { useState } from "react";

import { Product } from "types/product";

export interface SizeOption {
  stock: number,
  size: string,
  id: number,
  remainingMessage: string
  unavailableSize: boolean
}

export function useProductSizes(props: Product) {
  const [size, setSize] = useState<SizeOption>();

  const {
    attributes: {
      inventories: {
        data: inventories,
      },
    },
  } = props;

  const getRemainingMessage = (amount: number) => {
    if (amount === 1) return `Resta ${amount}`;
    if (amount > 0 && amount <= 3) return `Restam ${amount}`;
    return "";
  };

  const sizes: SizeOption[] = inventories.map((value) => ({
    id: value.attributes.size.data.id,
    size: value.attributes.size.data.attributes.name,
    stock: value.attributes.amount,
    unavailableSize: value.attributes.amount === 0,
    remainingMessage: getRemainingMessage(value.attributes.amount),
  }));

  return {
    size,
    setSize,
    sizes,
  };
}
