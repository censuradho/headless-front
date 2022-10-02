import { useState } from 'react'

import { Image } from 'components'
import { useKeenSlider } from 'keen-slider/react'
import * as Styles from './styles'
import { PreviewProps } from './types'

export function Preview (props: PreviewProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 1
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })

  const renderPhotos = props?.image?.data?.map(value => (
    <div className="keen-slider__slide" key={value.id}>
      <Image 
        src={value.attributes?.formats?.large?.url}
        alt={value.attributes?.alternativeText}
        width={value.attributes?.formats?.large?.width}
        height={value.attributes?.formats?.large?.height}
        layout="responsive"
      />
    </div>
  ))

  const renderDots = props?.image?.data?.map((value, index) => (
    <li key={value.id}>
      <Styles.Dot 
        onClick={() => instanceRef.current?.moveToIdx(index)} 
        active={currentSlide === index} 
      />
    </li>
  ))

  return (
    <Styles.Container>
      <div ref={sliderRef} className="keen-slider">
        {renderPhotos}
      </div>
      <Styles.DotContainer>{renderDots}</Styles.DotContainer>
    </Styles.Container>
  )
}