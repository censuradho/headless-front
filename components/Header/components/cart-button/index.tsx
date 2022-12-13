import { useMemo } from "react";

import { Icon } from "components";

import { useCart } from "context";

import * as Styles from "./styles";

export function CartButton() {
  const { cart, setIsOpenResumeCart } = useCart();

  const quantity = useMemo(() => {
    const variant = Object
      .entries(cart)
      .map(([, value]) => value.variant)
      .reduce((prev, next) => ({
        ...prev,
        ...next,
      }), {});

    return Object
      .entries(variant || {})
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
