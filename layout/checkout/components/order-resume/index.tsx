import {
  Box, Button, Icon, Typography,
} from "components";
import { useCart } from "context";
import { memo, useMemo } from "react";
import { uuid } from "utils";
import { ProductPreview } from "./components";
import * as Styles from "./styles";

export const OrderResume = memo(() => {
  const { cart } = useCart();

  const renderProductPreview = () => {
    const products = Object
      .entries(cart)
      .map(([, value]) => value);

    return products.map((product) => Object
      .entries(product.inventories)
      .map(([, inventory]) => (
        <li
          key={uuid()}
        >
          <ProductPreview
            inventory={inventory}
            product={product}
          />
        </li>
      )));
  };

  const subTotal = useMemo(() => {
    const products = Object
      .entries(cart)
      .map(([key, value]) => value);

    return products.map((product) => {
      const entriesPrice = Object
        .entries(product?.inventories || {})
        .map(([, value]) => value.quantity * product.price);

      return entriesPrice?.reduce((prev, next) => prev + next, 0);
    })
      .reduce((prev, next) => prev + next, 0);
  }, [cart]);

  const total = subTotal;

  return (
    <Styles.Container>
      <Box flexDirection="column" gap={0.8}>
        <Box gap={1} alignItems="center">
          <Icon name="shoppingBag" />
          <Typography variant="sub-headline">Resumo da compra</Typography>
        </Box>
        <Styles.ProductPreviewList>{renderProductPreview()}</Styles.ProductPreviewList>
      </Box>
      <Styles.SummaryItem>
        <Typography>Subtotal:</Typography>
        <Typography>{subTotal}</Typography>
      </Styles.SummaryItem>
      <Styles.SummaryItem>
        <Typography semiBold>Total:</Typography>
        <Typography semiBold>{total}</Typography>
      </Styles.SummaryItem>
      <Box marginTop={2}>
        <Button fullWidth>Finalizar compra</Button>
      </Box>
    </Styles.Container>
  );
});
