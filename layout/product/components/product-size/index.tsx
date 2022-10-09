import { SizeButton } from "components";
import { useProductSizes } from "hooks/useProductSizes";
import { useState } from "react";
import { ProductAttr } from "types/product";
import { uuid } from "utils";
import * as Styles from "./styles";

export function ProductSizes(props: ProductAttr) {
  const [size, setSize] = useState<string | null>(null);

  const { sizes, unavailableSizes } = useProductSizes(props);

  const renderSizes = sizes.map((value) => {
    const isSelected = value.size === size;
    const disabled = unavailableSizes.map((option) => option.size).includes(value.size);

    return (
      <li
        key={uuid()}
      >
        <SizeButton
          onClick={() => setSize(value.size)}
          selected={isSelected}
          disabled={disabled}
        >
          {value.size}
        </SizeButton>
      </li>
    );
  });

  return (
    <Styles.Container>
      <Styles.SizeList>
        {renderSizes}
      </Styles.SizeList>
    </Styles.Container>
  );
}
