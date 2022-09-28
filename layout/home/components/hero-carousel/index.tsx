import React, { useState } from 'react'
import Image from 'next/image'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module
import { HeroCarouselProps } from './types'

import * as Styles from './styles'
import { Box } from 'components'

export function HeroCarousel (props: HeroCarouselProps) {
  const { data } = props

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      spacing: 0,
      perView: 1
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })

  const [currentSlide, setCurrentSlide] = useState(0)


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


  const renderDots = instanceRef.current?.track.details.slides?.map((value, index) => (
    <li key={index}>
      <Styles.Dot 
        onClick={() => instanceRef.current?.moveToIdx(index)} 
        active={currentSlide === index} 
      />
    </li>
  ))

  return (
    <Styles.Container>
      <div ref={sliderRef} className="keen-slider">
        {renderItem}
      </div>
      <Styles.DotContainer>{renderDots}</Styles.DotContainer>
    </Styles.Container>
  )
}