import { Typography } from "components";

import * as Styles from "./styles";
import { ProductDescriptionProps } from "./types";

export function ProductDescription(props: ProductDescriptionProps) {
  const {
    product: {
      attributes: {
        description,
      },
    },
  } = props;

  if (!description) return null;

  return (
    <Styles.Container>
      <Typography
        as="h1"
        capitalize
        variant={{
          "@initial": "footnote",
          "@laptops-min": "sub-headline",
        }}
      >
        Descrição
      </Typography>
      <Typography>{description}</Typography>
    </Styles.Container>
  );
}
