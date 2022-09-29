import React, { useState } from 'react'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { HeroCarouselProps } from './types'

import * as Styles from './styles'
import { Image } from 'components'

export function HeroCarousel (props: HeroCarouselProps) {
  const { data } = props

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      spacing: 0,
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


  const renderDots = data?.map((value, index) => (
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