import { Box, Button } from "components";
import { Preview, ProductInfo, ProductSizes } from "./components";
import * as Styles from "./styles";

import { ProductPageProps } from "./types";

export function ProductPageLayout(props: ProductPageProps) {
  const {
    product: { attributes },
  } = props;

  return (
    <Styles.Container>
      <Styles.Content>
        <Preview {...attributes} />
        <Styles.ProductInfo>
          <ProductInfo {...attributes} />
          <ProductSizes {...attributes} />
          <Box justifyContent="center" gap={1}>
            <Button fullWidth variant="letter">Adicionar à sacola</Button>
            <Button fullWidth>Comprar</Button>
          </Box>
        </Styles.ProductInfo>
      </Styles.Content>
    </Styles.Container>
  );
}
