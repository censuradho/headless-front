import { useRouter } from "next/router";

import { Icon } from "components";

import { routePaths } from "constants/routes";

import { useCart } from "context";
import { useMemo } from "react";
import * as Styles from "./styles";

export function CartButton() {
  const router = useRouter();
  const { cart } = useCart();

  const getInventoryQuantity = () => {
    const inventories = Object
      .entries(cart)
      .map(([key, value]) => value.inventories)
      .reduce((prev, next) => ({
        ...prev,
        ...next,
      }), {});

    const quantity = Object
      .entries(inventories || {})
      .map(([key, value]) => value.quantity)
      .reduce((prev, next) => prev + next, 0);

    return quantity;
  };

  const renderCount = () => {
    const quantity = getInventoryQuantity();

    if (!quantity) return null;

    return (
      <Styles.Count>{quantity}</Styles.Count>
    );
  };

  return (
    <Styles.TooltipProvider>
      <Styles.TooltipRoot delayDuration={300}>
        <Styles.TooltipTrigger onClick={() => router.push(routePaths.cart.link)}>
          <Icon
            name="shoppingBag"
            color="primaryDark"
            size={30}
          />
          {renderCount()}
        </Styles.TooltipTrigger>
        <Styles.TooltipContent sideOffset={5}>
          {/* <ProductPreview
            amount={1}
            product={product.product}
            size={size?.data}
          /> */}
          <Styles.TooltipArrow />
        </Styles.TooltipContent>
      </Styles.TooltipRoot>
    </Styles.TooltipProvider>
  );
}
