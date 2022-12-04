import { Header } from "components";
import { MainLayout, ProductPageLayout } from "layout";
import { ProductPageProps } from "layout/product/types";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { getProduct, getProducts } from "services/rest/cms";

export const getStaticProps: GetStaticProps<ProductPageProps> = async (context) => {
  const id = context?.params?.id as string;
  const slug = context?.params?.slug as string;

  const {
    data: {
      data: product,
    },
  } = await getProduct({
    id,
    slug,
  });

  console.log(product);

  return {
    props: {
      product,
    },
    revalidate: 10,
  };
};

export default function ProductPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Header />
      <ProductPageLayout {...props} />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await getProducts();

  const paths = data?.data?.map((value) => ({
    params: {
      slug: value.attributes?.slug,
      id: String(value?.id),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
