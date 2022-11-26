import { Button, Select } from "components";
import { useAuth, useCart } from "context";
import { InventoryCartItem } from "context/cart/types";
import { SizeOption } from "hooks/useProductSizes";
import { useEffect, useState } from "react";

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
  const { addCartItem, cart } = useCart();

  const [isUnselected, setIsUnselected] = useState(false);

  const [size, setSize] = useState<SizeOption>();

  const {
    product: {
      id,
      attributes,
    },
    product,
  } = props;

  const renderSubmitButtons = () => {
    if (size?.unavailableSize) return null;

    const handleAddCart = async () => {
      if (!size) return setIsUnselected(true);

      const selectedInventory = attributes
        ?.inventories
        .data
        .find((value) => value.id === size.inventoryId);

      if (!selectedInventory) return;

      const inventory: InventoryCartItem = {
        id: selectedInventory.id,
        size: selectedInventory.attributes.size.data.attributes.name,
        quantity: 1,
        stock: selectedInventory.attributes.stock,
      };

      addCartItem({
        defaultImage: attributes.defaultImage,
        id,
        name: attributes?.name,
        price: attributes?.price,
        slug: attributes?.slug,
        inventories: {
          [inventory.id]: inventory,
        },
      });
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
          onClick={handleAddCart}
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

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Styles.Container>
      <Styles.Content>
        <Preview {...product} />
        <Styles.ProductInfo>
          <Select
            placeholder="selecione um..."
            data={[
              {
                label: "teste",
                value: "teste",
              },
              {
                label: "Lorem Ipsum",
                value: "Lorem Ipsum",
              },
            ]}
          />
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
