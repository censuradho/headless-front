import React from 'react'
import Image from 'next/image'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module
import { HeroCarouselProps } from './types'

import * as Styles from './styles'

export function HeroCarousel (props: HeroCarouselProps) {
  const { data } = props

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
  })

  const renderItem = data?.map((value, index) => {

    return (
      <div className="keen-slider__slide" key={index}>
        <Image 
          src={value.attributes?.formats?.large?.url}
          alt={value.attributes?.alternativeText}
          width={value.attributes?.formats?.large?.width}
          height={value.attributes?.formats?.large?.height}
          layout="responsive"
        />
      </div>
    )
  })


  return (
    <Styles.Container>
      <div ref={sliderRef} className="keen-slider">
        {renderItem}
      </div>
    </Styles.Container>
  )
}