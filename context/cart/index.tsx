import { useLocalStorage } from "hooks";
import {
  createContext,
  useContext,
} from "react";

import type {
  CartProviderProps,
  CartContextProps,
  Cart,
} from "./types";

const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useLocalStorage<Cart[]>("cart", []);

  const handleAddCartItem = (payload: Cart) => {
    setCart((prevState) => {
      const product = prevState.find((item) => item.id === payload.id);

      if (!product) {
        return ([
          ...prevState,
          payload,
        ]);
      }

      const inventories = product.inventories.map((value) => {
        const inventory = payload.inventories.find((item) => item.id === value.id);

        if (!inventory) return value;

        return {
          ...value,
          quantity: inventory.quantity + value.quantity,
        };
      });

      const updatedProduct: Cart = {
        ...product,
        inventories,
      };

      return ([
        ...prevState.filter((value) => value.id !== product.id),
        updatedProduct,
      ]);
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
