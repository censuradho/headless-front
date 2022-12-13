import { useMemo } from "react";

import { useCart } from "context";

import { Icon } from "../../../m-icon";

import * as Styles from "./styles";

export function CartButton() {
  const { cart, setIsOpenResumeCart } = useCart();

  const quantity = useMemo(() => {
    const inventories = Object
      .entries(cart)
      .map(([, value]) => value.inventories)
      .reduce((prev, next) => ({
        ...prev,
        ...next,
      }), {});

    return Object
      .entries(inventories || {})
      .map(([, value]) => value.quantity)
      .reduce((prev, next) => prev + next, 0);
  }, [cart]);

  const renderCount = () => {
    if (!quantity) return null;

    return (
      <Styles.Count>{quantity}</Styles.Count>
    );
  };

  return (
    <Styles.Button onClick={() => setIsOpenResumeCart(true)}>
      <Icon
        name="shoppingBag"
        color="primaryDark"
        size={30}
      />
      {renderCount()}
    </Styles.Button>
  );
}
