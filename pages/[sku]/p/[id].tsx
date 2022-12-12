import { Header } from "components";
import { ProductPageLayout } from "layout";
import { ProductPageProps } from "layout/product/types";
import {
  getProductsIdentifier,
  getProduct,
} from "lib/sanity/sanity.queries";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await getProductsIdentifier();

  const paths = [] as any;

  products.forEach((product) => {
    product.variants.forEach((variant) => {
      paths.push({
        params: {
          id: product._id,
          sku: variant.sku,
        },
      });
    });
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ProductPageProps> = async (context) => {
  const _id = context?.params?.id as string;

  const product = await getProduct({ _id });

  return {
    props: {
      data: product,
    },
    revalidate: 10,
  };
};

export default function ProductPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Header />
      <ProductPageLayout {...props} />
    </>
  );
}
