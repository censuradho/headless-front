import { Box, Button, Typography } from "components";
import { paths } from "constants/routes";
import { useCart } from "context";
import { CheckoutLayout } from "layout/checkout";
import { useMemo } from "react";
import { toLocaleMonetize, uuid } from "utils";
import { ProductPreview } from "./components";
import * as Styles from "./styles";

export function CartPageLayout() {
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

  const total = useMemo(() => {
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

  return (
    <CheckoutLayout>
      <Styles.Container>
        <Typography uppercase variant="callout">Minha sacola</Typography>
        <Styles.Wrapper>
          <Styles.ProductPreviewList>
            {renderProductPreview()}
          </Styles.ProductPreviewList>
          <Styles.ResumeView>
            <Typography variant="sub-headline" as="strong">Resumo do carrinho</Typography>
            <Styles.Resume>
              <Box justifyContent="space-between">
                <Typography semiBold variant="footnote">Total:</Typography>
                <Typography semiBold variant="footnote">{toLocaleMonetize(total)}</Typography>
              </Box>
              <Styles.ResumeGoToCheckoutView>
                <Button fullWidth>Avançar para o checkout</Button>
                <Button fullWidth variant="letter" as="a" href={paths.home}>Continuar comprando</Button>
              </Styles.ResumeGoToCheckoutView>
            </Styles.Resume>
          </Styles.ResumeView>
        </Styles.Wrapper>
      </Styles.Container>
    </CheckoutLayout>
  );
}
