import { useRouter } from "next/router";

import { Icon } from "components";

import { routePaths } from "constants/routes";
import { uuid } from "utils";
import { useProfileContext } from "context";

import * as Styles from "./styles";
import { CartButtonProps } from "./types";
import { ProductPreview } from "./components";

export function CartButton(props: CartButtonProps) {
  const { count } = props;
  const profileContext = useProfileContext();

  const router = useRouter();

  const renderProductItems = profileContext?.wishlistProducts?.map((product) => {
    const sizes = Object
      .entries(product.sizes)
      .map(([, size]) => size);

    const renderCards = sizes.map((size) => (
      <ProductPreview
        key={uuid()}
        amount={size.amount}
        product={product.product}
        size={size?.data}
      />
    ));

    return renderCards;
  });

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
          {renderProductItems}
          <Styles.TooltipArrow />
        </Styles.TooltipContent>
      </Styles.TooltipRoot>
    </Styles.TooltipProvider>
  );
}
