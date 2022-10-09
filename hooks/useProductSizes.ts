import { ProductAttr } from "types/product";

export function useProductSizes(props: ProductAttr) {
  const {
    sizes: productSizes,
  } = props;

  const sizes = productSizes?.map((value) => ({
    stock: value?.stock,
    size: value?.size?.data?.attributes?.name,
  }));

  const unavailableSizes = sizes?.filter((value) => value.stock === 0);

  return {
    sizes,
    unavailableSizes,
  };
}
