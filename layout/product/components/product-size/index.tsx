import { SizeButton, Tooltip, Typography } from "components";
import { useProductSizes } from "hooks/useProductSizes";

import { uuid } from "utils";
import { NotifyMe } from "../notify-me";

import * as Styles from "./styles";
import { ProductSizeProps } from "./types";

export function ProductSizes(props: ProductSizeProps) {
  const { onSelectSize, ...otherProps } = props;

  const {
    sizes,
    setSize,
    size,

  } = useProductSizes(otherProps);

  const renderSizes = sizes.map((value) => {
    const isSelected = value.size === size?.size;

    return (
      <li key={uuid()}>
        <Tooltip message={value.remainingMessage}>
          <SizeButton
            onClick={() => {
              setSize(value);
              onSelectSize?.(value);
            }}
            selected={isSelected}
            disabled={value.unavailableSize}
          >
            {value.size}
          </SizeButton>
        </Tooltip>
      </li>
    );
  });

  const renderNotifyMe = () => {
    if (!size?.unavailableSize) return null;
    return <NotifyMe />;
  };

  if (!sizes || sizes.length === 0) return null;

  return (
    <Styles.Container>
      <Typography variant="callout">Tamanho</Typography>
      <Styles.SizeList>
        {renderSizes}
      </Styles.SizeList>
      {renderNotifyMe()}
    </Styles.Container>
  );
}
