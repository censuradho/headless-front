import {
  Box,
  Typography,
  ButtonIcon,
  Image,
  Select,
} from "components";
import { paths } from "constants/routes";
import { toLocaleDateString } from "lib/toLocaleDateString";
import { resolvePath } from "utils";

import { useCart } from "context";
import Link from "next/link";
import * as Styles from "./styles";

import { ProductPreviewProps } from "./types";

export function ProductPreview(props: ProductPreviewProps) {
  const {
    inventory,
    product: {
      defaultImage,
      id: productId,
      slug,
      price,
      name,
    },
  } = props;

  const {
    id: inventoryId,
    quantity,
    size,
    stock,
  } = inventory;

  const href = resolvePath(paths.pdp, {
    slug,
    productId,
  });

  const {
    decreaseCartItem,
    removeCartItem,
    addCartItem,
  } = useCart();

  const canIncrease = quantity < stock;

  return (
    <Styles.Container>
      <Link href={href}>
        <Styles.ImagePreviewContainer>
          <Image
            src={defaultImage?.data?.attributes?.formats?.thumbnail?.url}
            width={defaultImage?.data?.attributes?.formats?.thumbnail?.width}
            height={defaultImage?.data?.attributes?.formats?.thumbnail?.height}
            alt={defaultImage?.data?.attributes?.alternativeText}
            layout="responsive"
          />
        </Styles.ImagePreviewContainer>
      </Link>
      <Box flexDirection="column" gap={1}>
        <Box alignItems="center" gap={0.5}>
          <Styles.Name variant="caption1">{name}</Styles.Name>
          <Box gap={0.2}>
            <ButtonIcon
              onClick={() => decreaseCartItem(productId, inventoryId)}
              icon={{
                name: "remove",
              }}
            />
            <ButtonIcon
              onClick={() => removeCartItem(productId, inventoryId)}
              icon={{
                name: "trash",
              }}
            />
            <ButtonIcon
              disabled={canIncrease}
              onClick={() => addCartItem({
                defaultImage,
                id: productId,
                name,
                price,
                slug,
                inventories: {
                  [inventoryId]: {
                    id: inventoryId,
                    quantity: 1,
                    stock,
                    size,
                  },
                },
              })}
              icon={{
                name: "add",
              }}
            />
          </Box>
        </Box>
        <Box>
          <Typography variant="footnote" semiBold>{toLocaleDateString(price)}</Typography>

        </Box>
        <Box justifyContent="space-between">
          <Typography as="strong" semiBold>
            Tamanho:
            {" "}
            <Typography>{size}</Typography>
          </Typography>
          <Typography as="strong" semiBold>
            Quantidade:
            {" "}
            <Typography>{quantity}</Typography>
          </Typography>
        </Box>
      </Box>
    </Styles.Container>

  );
}
