import { MainLayout } from "layout";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { getProduct, getProducts } from "services/rest/cms";

export default function ProductPage (props: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(props)
  return (
    <MainLayout>
      <h1>Product page</h1>
    </MainLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await getProducts()

  const paths = data?.data?.map(value => ({ 
    params: { 
      slug: value.attributes?.slug,
      id: String(value?.id)
    }
  }))

  return {
    paths,
    fallback: false
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id as string
  const slug = context?.params?.slug as string


  const { data: product } = await getProduct({
    id,
    slug
  })

  return {
    props: {
      product,
    },
    revalidate: 10
  }
}

