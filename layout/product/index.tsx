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
    },
    product,
  } = props;

  const renderSubmitButtons = () => {
    if (size?.unavailableSize) return null;

    const handleAddWishlist = async () => {
      if (!size) return setIsUnselected(true);

      profileContext?.addWishlist?.({
        product,
        size,
      });
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
            onSelectSize={(option) => {
              setSize(option);
              setIsUnselected(false);
            }}
            errorMessage={isUnselected ? "Selecione uma opção" : ""}
            product={product}
          />
          <ProductDescription product={product} />
          {renderFreight()}
          {renderSubmitButtons()}
        </Styles.ProductInfo>
      </Styles.Content>
    </Styles.Container>
  );
}
