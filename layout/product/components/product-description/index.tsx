import { Button, Typography } from "components";
import { useBooleanToggle } from "hooks";

import * as Styles from "./styles";
import { ProductDescriptionProps } from "./types";

export function ProductDescription(props: ProductDescriptionProps) {
  const {
    product: {
      description,
    },
  } = props;

  const [isHidden, toggleIsHidden] = useBooleanToggle(true);

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
      <Styles.HiddenView hidden={isHidden}>
        <Typography>{description}</Typography>
      </Styles.HiddenView>
      <Styles.ShowMoreView>
        <Button
          onClick={toggleIsHidden}
          variant="letter"
          icon={{
            name: isHidden ? "arrowDown" : "arrowUp",
          }}
        >
          {isHidden ? "Ver mais" : "Ver menos"}
        </Button>
      </Styles.ShowMoreView>
    </Styles.Container>
  );
}
