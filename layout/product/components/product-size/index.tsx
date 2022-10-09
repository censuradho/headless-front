import { SizeButton, Tooltip, Typography } from "components";
import { useProductSizes } from "hooks/useProductSizes";
import { ProductAttr } from "types/product";
import { uuid } from "utils";

import * as Styles from "./styles";

export function ProductSizes(props: ProductAttr) {
  const {
    sizes,
    unavailableSizes,
    setSize,
    size,
  } = useProductSizes(props);

  const renderSizes = sizes.map((value) => {
    const isSelected = value.size === size?.size;

    const disabled = unavailableSizes
      .map((option) => option.size)
      .includes(value.size);

    return (
      <li
        key={uuid()}
      >
        <Tooltip message={value.remainingMessage}>
          <SizeButton
            onClick={() => setSize(value)}
            selected={isSelected}
            disabled={disabled}
          >
            {value.size}
          </SizeButton>
        </Tooltip>
      </li>
    );
  });

  if (!sizes) return null;

  return (
    <Styles.Container>
      <Typography variant="callout">Tamanho</Typography>
      <Styles.SizeList>
        {renderSizes}
      </Styles.SizeList>
    </Styles.Container>
  );
}
