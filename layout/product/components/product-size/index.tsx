import { SizeButton, Tooltip, Typography } from "components";
import { useProductSizes } from "hooks/useProductSizes";
import { ProductAttr } from "types/product";
import { uuid } from "utils";

import * as Styles from "./styles";

export function ProductSizes(props: ProductAttr) {
  const {
    sizes,
    setSize,
    size,
  } = useProductSizes(props);

  const renderSizes = sizes.map((value) => {
    const isSelected = value.size === size?.size;

    return (
      <li
        key={uuid()}
      >
        <Tooltip message={value.remainingMessage}>
          <SizeButton
            onClick={() => setSize(value)}
            selected={isSelected}
            disabled={value.unavailableSize}
          >
            {value.size}
          </SizeButton>
        </Tooltip>
      </li>
    );
  });

  if (!sizes || sizes.length === 0) return null;

  return (
    <Styles.Container>
      <Typography variant="callout">Tamanho</Typography>
      <Styles.SizeList>
        {renderSizes}
      </Styles.SizeList>
    </Styles.Container>
  );
}
