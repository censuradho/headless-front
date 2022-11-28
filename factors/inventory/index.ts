import { productFactory } from "factors/product";
import { Inventory, Size } from "types/product";

function sizeFactory(payload: Partial<Size>): Size {
  const { attributes, id } = payload;

  return {
    id: id || 0,
    attributes: {
      name: attributes?.name || "",
    },
  };
}

export function inventoryFactory(payload: Partial<Inventory>): Inventory {
  const { attributes, id } = payload;

  return {
    id: id || 0,
    attributes: {
      product: {
        data: productFactory(attributes?.product.data || {}),
      },
      size: {
        data: sizeFactory(attributes?.size?.data || {}),
      },
      stock: attributes?.stock || 0,
    },
  };
}
