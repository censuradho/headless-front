import { MainLayout } from "layout/main"
import { HeroCarousel } from "./components"
import { HomeProps } from "./types"

export function HomeLayout (props: HomeProps) {
  const { data: { attributes: { hero } } } = props
  
  console.log(props)
  
  return (
    <MainLayout>
      <HeroCarousel data={hero.data} />
    </MainLayout>
  )
}