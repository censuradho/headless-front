import { Box, Image, Typography } from "components";
import { paths } from "constants/routes";
import Link from "next/link";
import { resolvePath } from "utils";
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

  const sizeOptions = Array(stock)
    .fill(1)
    .map((value, index) => index + 1)
    .map((value) => ({
      label: String(value),
      value: String(value),
    }));

  const href = resolvePath(paths.pdp, {
    slug,
    id: productId,
  });

  const description = `${name} - ${size}`;
  return (
    <Styles.Container>
      <Box gap={1} alignItems="center">
        <Link href={href}>
          <a>
            <Styles.ImagePreviewView>
              <Image
                src={defaultImage?.data?.attributes?.formats?.thumbnail?.url}
                width={defaultImage?.data?.attributes?.formats?.thumbnail?.width}
                height={defaultImage?.data?.attributes?.formats?.thumbnail?.height}
                alt={defaultImage?.data?.attributes?.alternativeText}
                layout="responsive"
              />
            </Styles.ImagePreviewView>
          </a>
        </Link>
        <Typography>{description}</Typography>
      </Box>
    </Styles.Container>
  );
}
