import { useMemo, useState } from "react";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import { Image } from "components";
import useInterval from "hooks/useInterval";
import { breakpoints } from "constants/breakpoints";
import { uuid } from "utils";
import { urlFor } from "lib/sanity";
import Link from "next/link";
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

  const renderItem = useMemo(() => data?.map((value) => {
    const img = urlFor(value.image);

    const width = 3264;
    const height = 1134;

    return (
      <div className="keen-slider__slide" key={uuid()}>
        <Link href={value.path}>
          <a>
            <Image
              src={img.url()}
              alt={value.image.alternative_text}
              width={width}
              height={height}
              layout="responsive"
            />
          </a>
        </Link>
      </div>
    );
  }), [data]);

  const renderDots = data?.map((value, index) => (
    <li key={uuid()}>
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
