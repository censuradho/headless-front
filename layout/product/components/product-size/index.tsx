import { useProductSizes } from "hooks/useProductSizes";
import { ProductAttr } from "types/product";
import * as Styles from "./styles";

export function ProductSizes(props: ProductAttr) {
  const { sizes } = useProductSizes(props);

  console.log(sizes);
  return (
    <Styles.Container>
      <span>product sizes</span>
    </Styles.Container>
  );
}
