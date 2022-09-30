import { Box, ProductItem } from "components"
import { useScrollDirection } from "hooks/useScrollDirection"
import { MainLayout } from "layout/main"
import { HeroCarousel, ProductCategorySlide } from "./components"
import { HomeProps } from "./types"

import * as Styles from './styles'

export function HomeLayout (props: HomeProps) {
  const scrollDirection = useScrollDirection()


  console.log(scrollDirection)
  const { 
    data: { 
      attributes: { 
        hero,
        langerieCarousel
      } 
    } 
  } = props || {}
  
  
  const renderProduct = langerieCarousel?.products?.data?.map((value, index) => (
    <ProductItem key={value?.id} {...value}/>
  ))

  return (
    <MainLayout>
      <Styles.Container>
        <HeroCarousel data={hero.data} />
        <ProductCategorySlide title={langerieCarousel?.title} data={langerieCarousel?.products?.data} />
      </Styles.Container>
    </MainLayout>
  )
}