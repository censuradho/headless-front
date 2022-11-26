import { useState } from "react";

import { Product } from "types/product";

export interface SizeOption {
  stock: number,
  size: string,
  inventoryId: number
  productId: number
  remainingMessage: string
  unavailableSize: boolean
}

export function useProductSizes(props: Product) {
  const [size, setSize] = useState<SizeOption>();

  const {
    id,
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
    inventoryId: value.id,
    productId: id,
    size: value.attributes.size.data.attributes.name,
    stock: value.attributes.stock,
    unavailableSize: value.attributes.stock === 0,
    remainingMessage: getRemainingMessage(value.attributes.stock),
  }));

  return {
    size,
    setSize,
    sizes,
  };
}
