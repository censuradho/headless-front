import Link from "next/link";

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

import { memo } from "react";
import * as Styles from "./styles";
import { ProductPreviewProps } from "./types";

export const ProductPreview = memo((props: ProductPreviewProps) => {
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
    removeCartItem,
    addCartItem,
  } = useCart();

  const sizeOptions = Array(stock)
    .fill(1)
    .map((value, index) => index + 1)
    .map((value) => ({
      label: String(value),
      value: String(value),
    }));

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
      <Box alignItems="flex-start">
        <Box flexDirection="column" gap={1}>
          <Styles.Name variant="caption2">{name}</Styles.Name>
          <Typography variant="footnote" semiBold>{toLocaleDateString(price)}</Typography>
          <Box justifyContent="space-between">
            <Typography as="strong" variant="caption2" semiBold>
              Tamanho:
              {" "}
              <Typography semiBold>{size}</Typography>
            </Typography>
          </Box>
        </Box>
        <Box flexDirection="column" justifyContent="space-between">
          <Box flex={1} justifyContent="flex-end">
            <ButtonIcon
              onClick={() => removeCartItem(productId, inventoryId)}
              icon={{
                name: "trash",
              }}
            />
          </Box>
          <Box flexDirection="column" gap={0.5} flex={1}>
            <Typography as="strong" semiBold>
              Quantidade:
              {" "}

            </Typography>
            <Select
              data={sizeOptions}
              defaultValue={String(size)}
              placeholder="tamanho"
              value={String(quantity)}
              onValueChange={(value) => addCartItem({
                defaultImage,
                id: productId,
                name,
                price,
                slug,
                inventories: {
                  [inventoryId]: {
                    id: inventoryId,
                    quantity: Number(value),
                    stock,
                    size,
                  },
                },
              }, "set")}
            />
          </Box>
        </Box>
      </Box>

    </Styles.Container>

  );
});
