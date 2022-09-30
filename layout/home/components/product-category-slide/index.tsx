import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from "keen-slider/react";

import { Box, ProductItem } from "components";
import { breakpoints } from "constants/breakpoints";

import* as Styles from './styles'

import { Product } from "types/product";
import { ProductCategorySlideProps } from "./types";

export function ProductCategorySlide (props: ProductCategorySlideProps) {

  const { data, title } = props

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    mode: 'snap',
    slides: {
      perView: 1.8,
      spacing: 20
    },
    breakpoints: {
      [breakpoints?.["table-min"]]: {
        slides: {
          perView: 3.5,
          spacing: 20
        },
      },
      [breakpoints?.["laptops-min"]]: {
        slides: {
          perView: 4.2,
          spacing: 35
        },
      },
      [breakpoints?.["desktop-min"]]: {
        slides: {
          perView: 'auto',
        },
      },
    }
  })

  const renderProducts = data?.map(value => (
    <div className="keen-slider__slide" key={value.id}>
      <ProductItem  {...value} />
    </div>
  ))


  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.Title>{title}</Styles.Title>
        <Styles.Hr />
      </Styles.Header>
      <div ref={sliderRef} className="keen-slider">{renderProducts}</div>
    </Styles.Container>
  )
}