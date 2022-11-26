import { useRouter } from "next/router";

import { Icon } from "components";

import { routePaths } from "constants/routes";

import * as Styles from "./styles";
import { CartButtonProps } from "./types";

export function CartButton(props: CartButtonProps) {
  const { count } = props;
  const router = useRouter();

  const renderCount = () => {
    if (!count) return null;

    return (
      <Styles.Count>{count}</Styles.Count>
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
