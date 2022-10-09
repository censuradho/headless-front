import { Preview, ProductInfo, ProductSizes } from "./components";
import * as Styles from "./styles";

import { ProductPageProps } from "./types";

export function ProductPageLayout(props: ProductPageProps) {
  const {
    product: { attributes },
  } = props;

  return (
    <Styles.Container>
      <Styles.Content>
        <Preview {...attributes} />
        <Styles.ProductInfo>
          <ProductInfo {...attributes} />
          <ProductSizes {...attributes} />
        </Styles.ProductInfo>
      </Styles.Content>
      <h1>product page</h1>
    </Styles.Container>
  );
}
