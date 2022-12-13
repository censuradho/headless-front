import { CartResume } from "components/cart-resume";
import { useLocalStorage } from "hooks";
import {
  createContext, useContext, useMemo, useState,
} from "react";

import type {
  Cart,
  CartAttr,
  CartContextProps,
  CartProviderProps,
  VariantOption,
} from "./types";

const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProviderProps) {
  const [isOpenResumeCart, setIsOpenResumeCart] = useState(false);
  const [cart, setCart] = useLocalStorage<Cart>("cart", {});

  const handleAddCartItem = (payload: CartAttr, type: "increase" | "set" = "increase") => {
    const getQuantity = (prev: VariantOption, next: VariantOption) => {
      const mapFunctions = {
        increase: () => (prev.stock > prev.quantity
          ? prev.quantity + next.quantity
          : prev.quantity),
        set: () => next.quantity,
      };

      return mapFunctions[type]();
    };

    setCart((prevState) => {
      const product = prevState[payload._id];

      if (!product) {
        return ({
          ...prevState,
          [payload._id]: payload,
        });
      }

      const parsedSizeOptions = Object
        .entries(payload.variant).map(([key, value]) => ({
          [key]: {
            ...value,
            ...(product.variant[key] && ({
              quantity: getQuantity(product.variant[key], value),
            })),
          },
        }))
        .reduce((prev, next) => ({
          ...prev,
          ...next,
        }), {});

      const variant = {
        ...product.variant,
        ...parsedSizeOptions,
      };

      return ({
        ...prevState,
        [product._id]: {
          ...product,
          variant,
        },
      });
    });
  };

  const handleDecreaseCartItem = (productId: string, variantId: string) => {
    setCart((prevState) => {
      const product = prevState[productId];

      if (!product) return prevState;

      const variant = product.variant[variantId];

      if (!variant) return prevState;

      if (variant.quantity > 0) {
        const parsedInventory = {
          ...variant,
          quantity: variant.quantity - 1,
        };
        return {
          ...prevState,
          [productId]: {
            ...product,
            variant: {
              ...product.variant,
              [variantId]: parsedInventory,
            },
          },
        };
      }

      delete product.variant[variantId];

      return {
        ...prevState,
        [productId]: product,
      };
    });
  };

  const handleRemoveCartItem = (productId: string, variantId: string) => {
    setCart((prevState) => {
      const product = prevState[productId];

      if (!product) return prevState;

      delete product.variant[variantId];

      const hasVariant = Object.keys(product.variant).length > 0;

      if (!hasVariant) {
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
    const products = Object
      .entries(cart)
      .map(([, value]) => value);

    return products.map((product) => {
      const entriesPrice = Object
        .entries(product?.variant || {})
        .map(([, variant]) => variant.quantity * product.price);

      return entriesPrice?.reduce((prev, next) => prev + next, 0);
    })
      .reduce((prev, next) => prev + next, 0);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        isOpenResumeCart,
        setIsOpenResumeCart,
        decreaseCartItem: handleDecreaseCartItem,
        removeCartItem: handleRemoveCartItem,
        subTotal,
        cart,
        addCartItem: handleAddCartItem,
      }}
    >
      <CartResume />
      {children}
    </CartContext.Provider>

  );
}

export const useCart = () => useContext(CartContext);
