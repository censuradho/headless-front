import { Button } from "components";
import { useProfileContext } from "context";
import { SizeOption } from "hooks/useProductSizes";
import { useState } from "react";
import {
  Preview,
  ProductInfo,
  ProductSizes,
  Freight,
  ProductDescription,
  Color,
} from "./components";
import * as Styles from "./styles";

import { ProductPageProps } from "./types";

export function ProductPageLayout(props: ProductPageProps) {
  const profileContext = useProfileContext();
  const [isUnselected, setIsUnselected] = useState(false);

  const [size, setSize] = useState<SizeOption>();

  const {
    product: {
      attributes,
      id,
    },
    product,
  } = props;

  const renderSubmitButtons = () => {
    if (size?.unavailableSize) return null;

    const handleAddWishlist = () => {
      if (!size) return setIsUnselected(true);

      profileContext?.addWishlist?.({ id });
    };

    return (
      <Styles.BuyButtons>
        <Button
          fullWidth
          variant="letter"
          onClick={handleAddWishlist}
        >
          Adicionar à sacola
        </Button>
        <Button
          fullWidth
          onClick={handleAddWishlist}
        >
          Comprar

        </Button>
      </Styles.BuyButtons>
    );
  };

  const renderFreight = () => {
    if (size?.unavailableSize) return null;

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
            onSelectSize={(size) => {
              setSize(size);
              setIsUnselected(false);
            }}
            errorMessage={isUnselected ? "Selecione uma opção" : ""}
            {...attributes}
          />
          <ProductDescription product={product} />
          <Color product={product} />
          {renderFreight()}
          {renderSubmitButtons()}
        </Styles.ProductInfo>
      </Styles.Content>
    </Styles.Container>
  );
}
