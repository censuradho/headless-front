/* eslint-disable react/no-array-index-key */
import { useEffect, useMemo, useState } from "react";

import { Image } from "components";
import { useKeenSlider } from "keen-slider/react";
import { urlFor } from "lib/sanity";
import { uuid } from "utils";
import { PreviewProps } from "./types";
import * as Styles from "./styles";

export function Preview(props: PreviewProps) {
  const {
    product,
  } = props;

  const { images } = product;

  if (!images) return null;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [, setCurrentSlidePreview] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider();

  const [sliderPreviewRef] = useKeenSlider({
    slides: {
      perView: 4,
      spacing: 16,
    },
    mode: "snap",
    vertical: true,
    slideChanged(slider) {
      setCurrentSlidePreview(slider.track.details.rel);
    },
  });

  useEffect(() => {
    instanceRef.current?.update({
      slides: {
        perView: 1,
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
    });
  }, []);

  const renderPhotos = useMemo(() => (
    images?.map((value, index) => {
      const image = urlFor(value);

      return (
        <div className="keen-slider__slide" key={index}>
          <Image
            src={image.url()}
            alt={value.alternative_text}
            width={600}
            height={790}
          />
        </div>
      );
    })
  ), []);

  const renderPreview = useMemo(() => images?.map((value, index) => {
    const image = urlFor(value);

    return (
      <Styles.PreviewImageItem
        key={index}
        className="keen-slider__slide"
        onClick={() => instanceRef.current?.moveToIdx(index)}
        selected={currentSlide === index}
      >
        <Image
          src={image.url()}
          alt={value.alternative_text}
          width={600}
          height={790}
          layout="responsive"
        />
      </Styles.PreviewImageItem>
    );
  }), [currentSlide, instanceRef]);

  const renderDots = useMemo(() => images?.map((value, index) => (
    <li key={uuid()}>
      <Styles.Dot
        onClick={() => instanceRef.current?.moveToIdx(index)}
        active={currentSlide === index}
      />
    </li>
  )), [images, currentSlide]);

  return (
    <Styles.Container>
      <Styles.Preview>
        <div ref={sliderPreviewRef} className="keen-slider">
          {renderPreview}
        </div>
      </Styles.Preview>
      <Styles.Thumb>
        <Styles.LikeMobile />
        <div ref={sliderRef} className="keen-slider">
          {renderPhotos}
        </div>
        <Styles.DotContainer>{renderDots}</Styles.DotContainer>
      </Styles.Thumb>
    </Styles.Container>
  );
}
