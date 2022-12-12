import { HomeLayout } from "layout";
import { HomeProps } from "layout/home/types";
import { getHomePage } from "lib/sanity/sanity.queries";

import type { GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    const data = await getHomePage();

    return {
      props: {
        ...data,
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(props);
  return (
    <HomeLayout {...props} />
  );
}

export default Home;
