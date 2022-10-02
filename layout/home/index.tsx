import { MainLayout } from "layout/main"

import { HeroCarousel, ProductCategorySlide, SectionBanner1 } from "./components"
import { HomeProps } from "./types"

import * as Styles from './styles'

export function HomeLayout (props: HomeProps) {
  console.log(props)
  const { 
    data: { 
      attributes: { 
        hero,
        langerieCarousel,
        sectionBanner1,
        lubrificantes
      } 
    } 
  } = props || {}
  
  
  return (
    <MainLayout>
      <Styles.Container>
        <HeroCarousel data={hero.data} />
        <ProductCategorySlide title={langerieCarousel?.title} data={langerieCarousel?.products?.data} />
        <SectionBanner1 data={sectionBanner1?.data} />
        <ProductCategorySlide title={lubrificantes?.title} data={lubrificantes?.products?.data} />
      </Styles.Container>
    </MainLayout>
  )
}