import { Box, ProductItem } from "components"
import { MainLayout } from "layout/main"
import { HeroCarousel, ProductCategorySlide } from "./components"
import { HomeProps } from "./types"

export function HomeLayout (props: HomeProps) {
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
        <HeroCarousel data={hero.data} />
        <ProductCategorySlide data={langerieCarousel?.products?.data} />
    </MainLayout>
  )
}