import type { GetStaticProps,  } from 'next'

import { HomeLayout } from 'layout'
import { getProduct } from 'services/rest/cms'

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = await getProduct()
    

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

function Home (props: GetStaticProps<typeof getStaticProps>) {
  return <HomeLayout  {...props} />
}

export default Home
