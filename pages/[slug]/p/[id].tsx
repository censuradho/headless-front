import { Header } from "components";
import { MainLayout, ProductPageLayout } from "layout";
import { ProductPageProps } from "layout/product/types";
import {
  getProductsIdentifier,
  getProduct,
} from "lib/sanity/sanity.queries";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await getProductsIdentifier();

  const paths = products?.map((value) => ({
    params: {
      slug: value.slug.current,
      id: value._id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ProductPageProps> = async (context) => {
  const _id = context?.params?.id as string;
  const slug = context?.params?.slug as string;

  const product = await getProduct({ _id, slug });

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
