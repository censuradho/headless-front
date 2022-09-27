import type { GetStaticProps, InferGetStaticPropsType,  } from 'next'

import { HomeLayout } from 'layout'
import { getHome } from 'services/rest/cms/home'
import { HomeProps } from 'layout/home/types'

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    const { data } = await getHome()

    return {
      props: {
        ...data
      },
      revalidate: 10,
    }
  } catch (err) {
    return {
      props: {},
      notFound: true
    }
  }
}

function Home (props: InferGetStaticPropsType<typeof getStaticProps>) {
  return <HomeLayout {...props} />
}

export default Home
