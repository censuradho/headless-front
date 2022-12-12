import { useState } from "react";
import router from "next/router";

import { Button } from "components";
import { useCart } from "context";
import { InventoryCartItem } from "context/cart/types";
import { SizeOption } from "hooks/useProductSizes";

import { paths } from "constants/routes";
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
  console.log(props);
  // const { addCartItem, setIsOpenResumeCart } = useCart();

  // const [isUnselected, setIsUnselected] = useState(false);

  // const [size, setSize] = useState<SizeOption>();

  // const {
  //   product: {
  //     id,
  //     attributes,
  //   },
  //   product,
  // } = props;

  // const renderSubmitButtons = () => {
  //   if (size?.unavailableSize) return null;

  //   const handleAddCart = async () => {
  //     if (!size) return;

  //     const selectedInventory = attributes
  //       ?.inventories
  //       .data
  //       .find((value) => value.id === size.inventoryId);

  //     if (!selectedInventory) return;

  //     const inventory: InventoryCartItem = {
  //       id: selectedInventory.id,
  //       size: selectedInventory.attributes.size.data.attributes.name,
  //       quantity: 1,
  //       stock: selectedInventory.attributes.stock,
  //     };

  //     addCartItem({
  //       defaultImage: attributes.defaultImage,
  //       id,
  //       name: attributes?.name,
  //       price: attributes?.price,
  //       slug: attributes?.slug,
  //       inventories: {
  //         [inventory.id]: inventory,
  //       },
  //     });

  //     setIsOpenResumeCart(true);
  //   };

  //   const handleBuy = () => {
  //     if (!size) return setIsUnselected(true);

  //     handleAddCart();
  //     router.push(paths.checkout);
  //   };

  //   return (
  //     <Styles.BuyButtons>
  //       <Button
  //         fullWidth
  //         variant="letter"
  //         onClick={handleAddCart}
  //       >
  //         Adicionar à sacola
  //       </Button>
  //       <Button
  //         fullWidth
  //         onClick={handleBuy}
  //       >
  //         Comprar
  //       </Button>
  //     </Styles.BuyButtons>
  //   );
  // };

  // const renderFreight = () => {
  //   if (size?.unavailableSize) return null;

  //   return (
  //     <Freight />
  //   );
  // };

  return (
    <Styles.Container>
      <Styles.Content>
        {/* <Preview {...product} /> */}
        <Styles.ProductInfo>
          {/* <ProductInfo {...attributes} /> */}
          {/* <ProductSizes
            onSelectSize={(option) => {
              setSize(option);
              setIsUnselected(false);
            }}
            errorMessage={isUnselected ? "Selecione uma opção" : ""}
            product={product}
          /> */}
          {/* <ProductDescription product={product} /> */}
          {/* {renderFreight()} */}
          {/* {renderSubmitButtons()} */}
        </Styles.ProductInfo>
      </Styles.Content>
    </Styles.Container>
  );
}
