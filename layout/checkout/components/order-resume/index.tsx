import {
  Box, Icon, Typography,
} from "components";
import { useCart } from "context";
import { memo } from "react";
import { toLocaleMonetize, uuid } from "utils";
import { ProductPreview } from "./components";
import * as Styles from "./styles";

export const OrderResume = memo(() => {
  const { cart } = useCart();

  // const renderProductPreview = () => {
  //   const products = Object
  //     .entries(cart)
  //     .map(([, value]) => value);

  //   return products.map((product) => Object
  //     .entries(product.inventories)
  //     .map(([, inventory]) => (
  //       <li
  //         key={uuid()}
  //       >
  //         <ProductPreview
  //           inventory={inventory}
  //           product={product}
  //         />
  //       </li>
  //     )));
  // };

  const total = 0;

  return (
    <Styles.Container>
      <Box flexDirection="column" gap={0.8}>
        <Box gap={1} alignItems="center">
          <Icon name="shoppingBag" />
          <Typography variant="sub-headline">Resumo da compra</Typography>
        </Box>
        {/* <Styles.ProductPreviewList>{renderProductPreview()}</Styles.ProductPreviewList> */}
      </Box>
      <Styles.SummaryItem>
        <Typography>Subtotal:</Typography>
        {/* <Typography>{toLocaleMonetize(subTotal)}</Typography> */}
      </Styles.SummaryItem>
      <Styles.SummaryItem>
        <Typography semiBold>Total:</Typography>
        <Typography semiBold>{toLocaleMonetize(total)}</Typography>
      </Styles.SummaryItem>
    </Styles.Container>
  );
});
