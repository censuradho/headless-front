import { useState } from "react";
import router, { useRouter } from "next/router";

import { Button } from "components";
import { useCart } from "context";
import { SizeOption } from "hooks/useProductSizes";

import { paths } from "constants/routes";
import { VariantOption } from "context/sanity/cart/types";
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
  const {
    data,
  } = props;

  const { addCartItem, setIsOpenResumeCart } = useCart();

  const [size, setSize] = useState<SizeOption>();

  const [isUnselected, setIsUnselected] = useState(false);

  const renderSubmitButtons = () => {
    if (size?.unavailableSize) return null;

    const handleAddCart = async () => {
      if (!size) return;

      const selectedSize = data.sizes.find((value) => value.size._id === size.id);

      if (!selectedSize) return;

      const variant: VariantOption = {
        quantity: 1,
        stock: selectedSize.stock,
        _id: selectedSize.size._id,
        name: selectedSize.size.name,
      };

      addCartItem({
        _id: data._id,
        description: data.description,
        price: data.price,
        discount: data.discount,
        images: data.images,
        name: data.name,
        slug: data.slug,
        variant: {
          [size.id]: variant,
        },
      });

      setIsOpenResumeCart(true);
    };

    const handleBuy = () => {
      if (!size) return setIsUnselected(true);

      handleAddCart();
      router.push(paths.checkout);
    };

    return (
      <Styles.BuyButtons>
        <Button
          fullWidth
          variant="letter"
          onClick={handleAddCart}
        >
          Adicionar à sacola
        </Button>
        <Button
          fullWidth
          onClick={handleBuy}
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
        <Preview
          product={data}
        />

        <Styles.ProductInfo>
          <ProductInfo
            product={data}
          />
          <ProductSizes
            onSelectSize={(option) => {
              setSize(option);
              setIsUnselected(false);
            }}
            errorMessage={isUnselected ? "Selecione uma opção" : ""}
            product={data}
          />

          <ProductDescription product={data} />
          {renderFreight()}
          {renderSubmitButtons()}
        </Styles.ProductInfo>
      </Styles.Content>
    </Styles.Container>
  );
}
