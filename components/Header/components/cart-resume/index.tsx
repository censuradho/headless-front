import { Box } from "components/box";
import { ButtonIcon } from "components/button-icon";
import { Typography } from "components/typography";
import { useCart } from "context";
import { uuid } from "utils";
import { ProductPreview } from "../product-preview";
import * as Styles from "./styles";

export function CartResume() {
  const { cart } = useCart();

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
    <Styles.Root open>
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
            <ButtonIcon
              icon={{ name: "close" }}
            />
          </Styles.Header>
          <Box flexDirection="column">
            {renderProductPreview()}
          </Box>
        </Styles.Content>

      </Styles.Portal>
    </Styles.Root>
  );
}
