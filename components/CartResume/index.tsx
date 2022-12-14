import { useEffect, useMemo } from "react";
import { Box } from "components/Box";

import { Button, Typography, ButtonIcon } from "components";
import { useCart } from "context";
import { toLocaleMonetize, uuid } from "utils";

import { Icon } from "components/Icon";
import { paths } from "constants/routes";
import { useRouter } from "next/router";
import { ProductPreview } from "./components";

import * as Styles from "./styles";

export function CartResume() {
  const router = useRouter();

  const { cart, setIsOpenResumeCart, isOpenResumeCart } = useCart();

  const renderProductPreview = () => {
    const products = Object.entries(cart).map(([, value]) => value);

    return products.map((product) =>
      Object.entries(product.inventories).map(([, inventory]) => (
        <ProductPreview key={uuid()} inventory={inventory} product={product} />
      ))
    );
  };

  const total = useMemo(() => {
    const products = Object.entries(cart).map(([key, value]) => value);

    return products
      .map((product) => {
        const entriesPrice = Object.entries(product?.inventories || {}).map(
          ([, value]) => value.quantity * product.price
        );

        return entriesPrice?.reduce((prev, next) => prev + next, 0);
      })
      .reduce((prev, next) => prev + next, 0);
  }, [cart]);

  const renderProductsPreview = () => {
    if (!total) {
      return (
        <Box
          flexDirection="column"
          gap={2}
          flex={1}
          justifyContent="center"
          alignItems="center"
        >
          <Icon name="shoppingBag" size={50} />
          <Typography as="strong" textAlign="center" variant="sub-headline">
            Sua sacola está vazia!
          </Typography>
          <Typography as="p" textAlign="center">
            Para inserir produtos em sua sacola, basta navegar pela webstore ou
            utilizar a busca, e ao encontrar os produtos desejados, clique no
            botão Adicionar à sacola.
          </Typography>
          <Button
            onClick={() => setIsOpenResumeCart(false)}
            as="a"
            href={paths.home}
          >
            Escolher produto
          </Button>
        </Box>
      );
    }

    return (
      <>
        <Styles.ScrollView>{renderProductPreview()}</Styles.ScrollView>
        <Styles.SubtotalContainer>
          <Typography>Subtotal</Typography>
          <Typography>{toLocaleMonetize(total)}</Typography>
        </Styles.SubtotalContainer>

        <Styles.SubmitContainer>
          <Button as="a" href={paths.cart} fullWidth variant="letter">
            Ver sacola
          </Button>
          <Button as="a" fullWidth href={paths.checkout}>
            Finalizar compra
          </Button>
        </Styles.SubmitContainer>
      </>
    );
  };

  useEffect(() => {
    router.events.on("routeChangeStart", () => setIsOpenResumeCart(false));

    return router.events.off("routeChangeStart", () =>
      setIsOpenResumeCart(false)
    );
  }, []);

  return (
    <Styles.Root
      modal
      open={isOpenResumeCart}
      onOpenChange={setIsOpenResumeCart}
    >
      <Styles.Portal>
        <Styles.Overlay />
        <Styles.Content>
          <Styles.Header>
            <Typography as="strong" variant="sub-headline">
              Minha sacola
            </Typography>
            <Styles.Close>
              <ButtonIcon icon={{ name: "close" }} />
            </Styles.Close>
          </Styles.Header>
          {renderProductsPreview()}
        </Styles.Content>
      </Styles.Portal>
    </Styles.Root>
  );
}
