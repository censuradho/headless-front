import { useMemo } from "react";
import { Box } from "components/box";

import { Button } from "components/button";
import { ButtonIcon } from "components/button-icon";
import { Typography } from "components/typography";
import { useCart } from "context";
import { toLocaleMonetize, uuid } from "utils";

import { ProductPreview } from "./components";

import * as Styles from "./styles";

export function CartResume() {
  const { cart, setIsOpenResumeCart, isOpenResumeCart } = useCart();

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

  const price = useMemo(() => {
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

  const renderProductsPreview = () => {
    if (!price) {
      return (
        <Box flexDirection="column">
          <Typography variant="sub-headline">Sua sacola está vazia!</Typography>
          <Typography>
            Para inserir produtos em sua sacola, basta navegar pela webstore ou utilizar a busca,
            e ao encontrar os produtos desejados, clique no botão 'Adicionar à sacola'.

          </Typography>
        </Box>
      );
    }
    return (
      <Styles.ScrollView>
        <Box flexDirection="column">
          {renderProductPreview()}
        </Box>
      </Styles.ScrollView>
    );
  };

  return (
    <Styles.Root modal open={isOpenResumeCart} onOpenChange={setIsOpenResumeCart}>
      <Styles.Portal>
        <Styles.Overlay />
        <Styles.Content>
          <Styles.Header>
            <Typography
              as="strong"
              variant="sub-headline"
            >
              Minha sacola
            </Typography>
            <Styles.Close>
              <ButtonIcon
                icon={{ name: "close" }}
              />
            </Styles.Close>
          </Styles.Header>
          {renderProductsPreview()}
          <Styles.SubtotalContainer>
            <Typography>Subtotal</Typography>
            <Typography>{toLocaleMonetize(price)}</Typography>
          </Styles.SubtotalContainer>

          <Styles.SubmitContainer>
            <Button fullWidth variant="letter">Ver sacola</Button>
            <Button fullWidth>Finalizar compra</Button>
          </Styles.SubmitContainer>
        </Styles.Content>

      </Styles.Portal>
    </Styles.Root>
  );
}
