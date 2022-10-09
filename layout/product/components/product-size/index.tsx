import { SizeButton } from "components";
import { useProductSizes } from "hooks/useProductSizes";
import { ProductAttr } from "types/product";
import * as Styles from "./styles";

export function ProductSizes(props: ProductAttr) {
  const { sizes } = useProductSizes(props);

  const renderSizes = sizes.map((value, index) => (
    <SizeButton
      key={index}
    >
      {value.size}
    </SizeButton>
  ));

  return (
    <Styles.Container>
      <span>product sizes</span>
      {renderSizes}
    </Styles.Container>
  );
}
