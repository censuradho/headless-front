import { CartResume } from "components/cart-resume";
import { useBooleanToggle, useLocalStorage } from "hooks";
import { createContext, useContext, useMemo, useState } from "react";

import type {
  CartProviderProps,
  CartContextProps,
  Cart,
  CartAttr,
  InventoryCartItem,
} from "./types";

const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProviderProps) {
  const [isOpenResumeCart, setIsOpenResumeCart] = useState(false);

  const [cart, setCart] = useLocalStorage<Cart>("cart", {});

  const handleAddCartItem = (
    payload: CartAttr,
    type: "increase" | "set" = "increase"
  ) => {
    // eslint-disable-next-line max-len
    const getQuantity = (prev: InventoryCartItem, next: InventoryCartItem) => {
      const mapFunctions = {
        increase: () =>
          prev.stock >= prev.quantity
            ? prev.quantity + next.quantity
            : prev.quantity,
        set: () => next.quantity,
      };

      return mapFunctions[type]();
    };

    setCart((prevState) => {
      const product = prevState[payload.id];

      if (!product) {
        return {
          ...prevState,
          [payload.id]: payload,
        };
      }

      const parsedInventories = Object.entries(payload.inventories)
        .map(([key, value]) => ({
          [key]: {
            ...value,
            ...(product.inventories[key] && {
              quantity: getQuantity(product.inventories[key], value),
            }),
          },
        }))
        .reduce(
          (prev, next) => ({
            ...prev,
            ...next,
          }),
          {}
        );

      const inventories = {
        ...product.inventories,
        ...parsedInventories,
      };

      return {
        ...prevState,
        [product.id]: {
          ...product,
          inventories,
        },
      };
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

      const hasInventories = Object.keys(product.inventories).length > 0;

      if (!hasInventories) {
        const currentState = {
          ...prevState,
        };

        delete currentState[productId];
        return {
          ...currentState,
        };
      }

      return {
        ...prevState,
        [productId]: product,
      };
    });
  };

  const subTotal = useMemo(() => {
    const products = Object.entries(cart).map(([key, value]) => value);

    return products
      .map((product) => {
        const entriesPrice = Object.entries(product?.inventories || {}).map(
          ([, inventory]) => inventory.quantity * product.price
        );

        return entriesPrice?.reduce((prev, next) => prev + next, 0);
      })
      .reduce((prev, next) => prev + next, 0);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        subTotal,
        isOpenResumeCart,
        setIsOpenResumeCart,
        addCartItem: handleAddCartItem,
        decreaseCartItem: handleDecreaseCartItem,
        removeCartItem: handleRemoveCartItem,
      }}
    >
      <CartResume />
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
