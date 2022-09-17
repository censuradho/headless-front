import type { GetStaticProps,  } from 'next'

import { HomeLayout } from 'layout'
import { getProduct } from 'services/rest/cms'

export const getStaticProps: GetStaticProps = async () => {
  try {
    const data = await getProduct()
    
    console.log(data)
    return {
      props: {},
      revalidate: 10,
    }
  } catch (err) {
    return {
      props: {},
      notFound: true
    }
  }
}

function Home () {
  return <HomeLayout  />
}

export default Home
