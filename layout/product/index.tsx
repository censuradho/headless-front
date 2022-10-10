import { Box, Button } from "components";
import { useState } from "react";
import {
  Preview,
  ProductInfo,
  ProductSizes,
  Freight,
} from "./components";
import * as Styles from "./styles";

import { ProductPageProps } from "./types";

export function ProductPageLayout(props: ProductPageProps) {
  const [isUnavailableSize, setIsUnavailableSize] = useState(false);

  const {
    product: { attributes },
  } = props;

  const renderSubmitButtons = () => {
    if (isUnavailableSize) return null;

    return (
      <Box justifyContent="center" gap={1}>
        <Button fullWidth variant="letter">Adicionar à sacola</Button>
        <Button fullWidth>Comprar</Button>
      </Box>
    );
  };

  return (
    <Styles.Container>
      <Styles.Content>
        <Preview {...attributes} />
        <Styles.ProductInfo>
          <ProductInfo {...attributes} />
          <ProductSizes
            onSelectSize={(size) => setIsUnavailableSize(size.unavailableSize)}
            {...attributes}
          />
          <Freight />
          {renderSubmitButtons()}
        </Styles.ProductInfo>
      </Styles.Content>
    </Styles.Container>
  );
}
