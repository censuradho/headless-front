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
import { urlFor } from "lib/sanity";
import { imageSizes } from "constants/imageSizes";
import * as Styles from "./styles";
import { ProductPreviewProps } from "./types";

export const ProductPreview = memo((props: ProductPreviewProps) => {
  const {
    product: {
      _id: productId,
      slug,
      images,
      price,
      name,
      description,
      discount,
    },
    variant,
  } = props;

  const {
    _id: variantId,
    name: size,
    quantity,
    stock,
  } = variant;

  const [defaultImage] = images || [];

  const defaultImageParsedUrl = urlFor(defaultImage)
    .width(imageSizes["563x750"].width)
    .height(imageSizes["563x750"].height)
    .url();

  const href = resolvePath(paths.pdp, {
    slug: slug.current,
    id: productId,
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
        <a>
          <Styles.ImagePreviewContainer>
            <Image
              src={defaultImageParsedUrl}
              width={imageSizes["563x750"].width}
              height={imageSizes["563x750"].height}
              alt={defaultImage?.alternative_text}
              layout="responsive"
            />
          </Styles.ImagePreviewContainer>
        </a>
      </Link>
      <Box alignItems="flex-start" gap={1} flex={1}>
        <Styles.InfoView>
          <Styles.Name variant="caption2">{name}</Styles.Name>
          <Typography variant="footnote" semiBold>{toLocaleDateString(price)}</Typography>
          <Box justifyContent="space-between">
            <Typography as="strong" variant="caption2" semiBold>
              Tamanho:
              {" "}
              <Typography semiBold>{size}</Typography>
            </Typography>
          </Box>
        </Styles.InfoView>
        <Box flexDirection="column" justifyContent="space-between">
          <Box flex={1} justifyContent="flex-end">
            <ButtonIcon
              onClick={() => removeCartItem(productId, variantId)}
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
                _id: productId,
                description,
                name,
                price,
                slug,
                discount,
                images,
                variant: {
                  [variantId]: {
                    _id: variantId,
                    name: size,
                    quantity: Number(value),
                    stock,
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
