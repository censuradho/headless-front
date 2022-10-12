import Link from "next/link";

import {
  Box, Typography, ButtonIcon, Image,
} from "components";
import { paths } from "constants/routes";
import { toLocaleDateString } from "lib/toLocaleDateString";
import { getPriceProduct, resolvePath } from "utils";

import * as Styles from "./styles";

import { ProductPreviewProps } from "./types";

export function ProductPreview(props: ProductPreviewProps) {
  const {
    product: {
      id,
      attributes: {
        slug,
        price,
        discount,
        name,
        defaultImage,
      },
    },
    size,
    amount,
  } = props;

  const priceParsed = getPriceProduct(price, discount);

  const href = resolvePath(paths.pdp, {
    slug,
    id,
  });

  return (
    <Link href={href}>
      <a>
        <Styles.Container>

          <Styles.ImagePreviewContainer>
            <Image
              src={defaultImage?.data?.attributes?.formats?.thumbnail?.url}
              width={defaultImage?.data?.attributes?.formats?.thumbnail?.width}
              height={defaultImage?.data?.attributes?.formats?.thumbnail?.height}
              alt={defaultImage?.data?.attributes?.alternativeText}
              layout="responsive"
            />
          </Styles.ImagePreviewContainer>
          <Box flexDirection="column" gap={1}>
            <Box alignItems="center" gap={0.5}>
              <Styles.Name variant="caption1">{name}</Styles.Name>
              <ButtonIcon
                icon={{
                  name: "trash",
                }}
              />
            </Box>
            <Typography variant="footnote" semiBold>{toLocaleDateString(priceParsed)}</Typography>
            <Box justifyContent="space-between">
              <Typography as="strong" semiBold>
                Tamanho:
                {" "}
                <Typography>{size.size}</Typography>
              </Typography>
              <Typography as="strong" semiBold>
                Quantidade:
                {" "}
                <Typography>{amount}</Typography>
              </Typography>
            </Box>
          </Box>
        </Styles.Container>
      </a>
    </Link>
  );
}
