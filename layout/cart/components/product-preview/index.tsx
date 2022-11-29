import {
  Box, Button, Image, Select, Typography,
} from "components";
import { paths } from "constants/routes";
import { useCart } from "context";
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

  const href = resolvePath(paths.pdp, {
    slug,
    productId,
  });

  return (
    <Styles.Container>
      <Box gap={1} alignItems="center">
        <Styles.ImagePreviewView>
          <Image
            src={defaultImage?.data?.attributes?.formats?.thumbnail?.url}
            width={defaultImage?.data?.attributes?.formats?.thumbnail?.width}
            height={defaultImage?.data?.attributes?.formats?.thumbnail?.height}
            alt={defaultImage?.data?.attributes?.alternativeText}
            layout="responsive"
          />
        </Styles.ImagePreviewView>
        <Box flexDirection="column" gap={1.3} flex={1}>
          <Box justifyContent="space-between" fullWidth>
            <Link href={href}>
              <Styles.Name>
                {name}
              </Styles.Name>
            </Link>
            <Button
              variant="letter-underline"
              onClick={() => removeCartItem(productId, inventoryId)}
            >
              Remover item
            </Button>
          </Box>
          <Typography>
            Tamanho:
            {" "}
            <Typography>{size}</Typography>
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
}
