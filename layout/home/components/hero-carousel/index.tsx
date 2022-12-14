import { useState } from "react";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import { Image } from "components";
import useInterval from "hooks/useInterval";
import { breakpoints } from "constants/breakpoints";
import * as Styles from "./styles";
import { HeroCarouselProps } from "./types";

export function HeroCarousel(props: HeroCarouselProps) {
  const { data } = props;

  const hasData = data.length > 0;

  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      spacing: 0,
    },
    breakpoints: {
      [breakpoints["smartphone-min"]]: {
        drag: true,
      },
      [breakpoints["laptops-min"]]: {
        drag: false,
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const renderItem = data?.map((value, index) => (
    <div className="keen-slider__slide" key={index}>
      <Image
        src={value.attributes?.formats?.large?.url}
        alt={value.attributes?.alternativeText}
        width={value.attributes?.formats?.large?.width}
        height={value.attributes?.formats?.large?.height}
        layout="responsive"
      />
    </div>
  ));

  const renderDots = data?.map((value, index) => (
    <li key={index}>
      <Styles.Dot
        onClick={() => instanceRef.current?.moveToIdx(index)}
        active={currentSlide === index}
      />
    </li>
  ));

  useInterval(() => hasData && instanceRef?.current?.next(), 5000);

  return (
    <Styles.Container>
      <div ref={sliderRef} className="keen-slider">
        {renderItem}
      </div>
      <Styles.DotContainer>{renderDots}</Styles.DotContainer>
    </Styles.Container>
  );
}
