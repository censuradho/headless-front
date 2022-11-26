import { useRouter } from "next/router";

import { Icon } from "components";

import { routePaths } from "constants/routes";

import { useCart } from "context";

import { uuid } from "utils";
import { useMemo } from "react";
import * as Styles from "./styles";
import { ProductPreview } from "./components";

export function CartButton() {
  const router = useRouter();
  const { cart } = useCart();

  const quantity = useMemo(() => {
    const inventories = Object
      .entries(cart)
      .map(([key, value]) => value.inventories)
      .reduce((prev, next) => ({
        ...prev,
        ...next,
      }), {});

    return Object
      .entries(inventories || {})
      .map(([key, value]) => value.quantity)
      .reduce((prev, next) => prev + next, 0);
  }, [cart]);

  const renderCount = () => {
    if (!quantity) return null;

    return (
      <Styles.Count>{quantity}</Styles.Count>
    );
  };

  const renderProductPreview = () => {
    const products = Object
      .entries(cart)
      .map(([, value]) => value);

    return products.map((product) => Object
      .entries(product.inventories)
      .map(([, inventory]) => (
        <ProductPreview
          key={uuid()}
          inventory={inventory}
          product={product}
        />
      )));
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
          {renderProductPreview()}

          <Styles.TooltipArrow />
        </Styles.TooltipContent>
      </Styles.TooltipRoot>
    </Styles.TooltipProvider>
  );
}
