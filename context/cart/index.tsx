import { useLocalStorage } from "hooks";
import {
  createContext,
  useContext,
} from "react";

import type {
  CartProviderProps,
  CartContextProps,
  Cart,
  CartAttr,
  InventoryCartItem,
} from "./types";

const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useLocalStorage<Cart>("cart", {});

  const handleAddCartItem = (payload: CartAttr, type: "increase" | "set" = "increase") => {
    // eslint-disable-next-line max-len
    const getQuantity = (prev: InventoryCartItem, next: InventoryCartItem) => {
      const mapFunctions = {
        increase: () => (prev.stock >= prev.quantity
          ? prev.quantity + next.quantity
          : prev.quantity),
        set: () => next.quantity,
      };

      return mapFunctions[type]();
    };

    setCart((prevState) => {
      const product = prevState[payload.id];

      if (!product) {
        return ({
          ...prevState,
          [payload.id]: payload,
        });
      }

      const parsedInventories = Object
        .entries(payload.inventories)
        .map(([key, value]) => ({
          [key]: {
            ...value,
            ...(product.inventories[key] && ({
              quantity: getQuantity(product.inventories[key], value),
            })),
          },
        }))
        .reduce((prev, next) => ({
          ...prev,
          ...next,
        }), {});

      const inventories = {
        ...product.inventories,
        ...parsedInventories,
      };

      return ({
        ...prevState,
        [product.id]: {
          ...product,
          inventories,
        },
      });
    });
  };

  const handleDecreaseCartItem = (productId: number, inventoryId: number) => {
    setCart((prevState) => {
      const product = prevState[productId];

      if (!product) return prevState;

      const inventory = product.inventories[inventoryId];

      if (!inventory) return prevState;

      if (inventory.quantity > 0) {
        const parsedInventory = {
          ...inventory,
          quantity: inventory.quantity - 1,
        };

        return {
          ...prevState,
          [productId]: {
            ...product,
            inventories: {
              ...product.inventories,
              [inventoryId]: parsedInventory,
            },
          },
        };
      }

      delete product.inventories[inventoryId];

      return {
        ...prevState,
        [productId]: product,
      };
    });
  };

  const handleRemoveCartItem = (productId: number, inventoryId: number) => {
    setCart((prevState) => {
      const product = prevState[productId];

      if (!product) return prevState;

      delete product.inventories[inventoryId];

      return {
        ...prevState,
        [productId]: product,
      };
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addCartItem: handleAddCartItem,
        decreaseCartItem: handleDecreaseCartItem,
        removeCartItem: handleRemoveCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
