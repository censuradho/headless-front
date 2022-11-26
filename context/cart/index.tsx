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
} from "./types";

const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useLocalStorage<Cart>("cart", {});

  const handleAddCartItem = (payload: CartAttr) => {
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
              quantity: product.inventories[key].quantity + value.quantity,
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

  return (
    <CartContext.Provider
      value={{
        cart,
        addCartItem: handleAddCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
