import {
  Box, Button, Image, Select, Typography,
} from "components";
import { imageSizes } from "constants/imageSizes";
import { paths } from "constants/routes";
import { useCart } from "context";
import { urlFor } from "lib/sanity";
import Link from "next/link";
import { resolvePath, toLocaleMonetize } from "utils";
import * as Styles from "./styles";
import { ProductPreviewProps } from "./types";

export function ProductPreview(props: ProductPreviewProps) {
  const {
    product: {
      slug,
      _id: productId,
      description,
      name,
      price,
      discount,
      images,
    },
    variant,
  } = props;

  const {
    _id: variantId,
    quantity,
    name: size,
    stock,
  } = variant;

  const {
    addCartItem,
    removeCartItem,
  } = useCart();

  const sizeOptions = Array(stock)
    .fill(1)
    .map((value, index) => index + 1)
    .map((value) => ({
      label: String(value),
      value: String(value),
    }));

  const [defaultImage] = images || [];

  const defaultImageParsedUrl = urlFor(defaultImage)
    .width(imageSizes["563x750"].width)
    .height(imageSizes["563x750"].height)
    .url();

  const href = resolvePath(paths.pdp, {
    slug: slug.current,
    id: productId,
  });

  return (
    <Styles.Container>
      <Box gap={1} alignItems="flex-start">
        <Styles.ImagePreviewView>
          <Image
            src={defaultImageParsedUrl}
            width={imageSizes["563x750"].width}
            height={imageSizes["563x750"].height}
            alt={defaultImage?.alternative_text}
            layout="responsive"
          />
        </Styles.ImagePreviewView>
        <Box flexDirection="column" gap={1} flex={1}>
          <Box justifyContent="space-between" gap={1.3} fullWidth>
            <Link href={href}>
              <Styles.Name>
                {name}
              </Styles.Name>
            </Link>
            <Button
              variant="letter-underline"
              onClick={() => removeCartItem(productId, variantId)}
            >
              Remover item
            </Button>
          </Box>
          <Typography>
            Tamanho:
            {" "}
            <Typography>{size}</Typography>
          </Typography>
          <Typography>
            Preço:
            {" "}
            <Typography>{toLocaleMonetize(price)}</Typography>
          </Typography>
          <Box alignItems="center" gap={1}>
            <Typography>
              Quantidade:
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
}
