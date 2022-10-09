import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { SizeButton, Typography } from "components";
import { useProductSizes } from "hooks/useProductSizes";
import { ProductAttr } from "types/product";
import { uuid } from "utils";

import * as Styles from "./styles";

export function ProductSizes(props: ProductAttr) {
  const router = useRouter();
  const { size: defaultSize } = router.query;

  const [size, setSize] = useState<string | null>(defaultSize as string);

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

  useEffect(() => {
    if (!defaultSize) return;

    setSize(defaultSize as string);
  }, [defaultSize]);

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
