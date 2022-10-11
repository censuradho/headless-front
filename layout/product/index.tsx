import { Button } from "components";
import { useState } from "react";
import {
  Preview,
  ProductInfo,
  ProductSizes,
  Freight,
  ProductDescription,
} from "./components";
import * as Styles from "./styles";

import { ProductPageProps } from "./types";

export function ProductPageLayout(props: ProductPageProps) {
  const [isUnavailableSize, setIsUnavailableSize] = useState(false);

  const {
    product: {
      attributes,
    },
    product,
  } = props;

  const renderSubmitButtons = () => {
    if (isUnavailableSize) return null;

    return (
      <Styles.BuyButtons>
        <Button fullWidth variant="letter">Adicionar à sacola</Button>
        <Button fullWidth>Comprar</Button>
      </Styles.BuyButtons>
    );
  };

  const renderFreight = () => {
    if (isUnavailableSize) return null;

    return (
      <Freight />
    );
  };

  return (
    <Styles.Container>
      <Styles.Content>
        <Preview {...product} />
        <Styles.ProductInfo>
          <ProductInfo {...attributes} />
          <ProductSizes
            onSelectSize={(size) => setIsUnavailableSize(size.unavailableSize)}
            {...attributes}
          />
          <ProductDescription
            product={product}
          />
          {renderFreight()}
          {renderSubmitButtons()}
        </Styles.ProductInfo>
      </Styles.Content>
    </Styles.Container>
  );
}
