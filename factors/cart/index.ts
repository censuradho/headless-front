import { productFactory, sizeFactory } from "factors/product";
import {
  Cart,
  CartItem,
} from "types/cart";
import { Inventory } from "types/product";

function inventoryFactory(props: Partial<Inventory>): Inventory {
  const { attributes, id } = props;

  return {
    id: id || 0,
    attributes: {
      size: {
        data: sizeFactory(attributes?.size.data || {}),
      },
      product: {
        data: productFactory(attributes?.product.data || {}),
      },
      stock: attributes?.stock || 0,
    },
  };
}

function cartItemFactory(props: Partial<CartItem>): CartItem {
  const { attributes, id } = props;

  return {
    id: id || 0,
    attributes: {
      createdAt: attributes?.createdAt || "",
      updatedAt: attributes?.updatedAt || "",
      quantity: attributes?.quantity || 0,
      inventory: {
        data: inventoryFactory(attributes?.inventory?.data || {}),
      },
    },
  };
}

export function cartFactory(props: Partial<Cart>): Cart {
  const { attributes, id } = props;

  const cartItems = attributes
    ?.cartItems
    ?.data
    ?.map((cartItem) => cartItemFactory(cartItem)) || [];

  return {
    id: id || 0,
    attributes: {
      createdAt: attributes?.createdAt || "",
      updatedAt: attributes?.updatedAt || "",
      cartItems: {
        data: cartItems,
      },
    },
  };
}
