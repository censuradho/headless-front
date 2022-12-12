/* eslint-disable react/no-array-index-key */
import { useEffect, useMemo, useState } from "react";

import { Image } from "components";
import { useKeenSlider } from "keen-slider/react";
import { useRouter } from "next/router";
import { urlFor } from "lib/sanity";
import { uuid } from "utils";
import { imageSizes } from "constants/imageSizes";
import { PreviewProps } from "./types";
import * as Styles from "./styles";

export function Preview(props: PreviewProps) {
  const router = useRouter();

  const { sku } = router.query;

  const {
    product: {
      variants,
    },
  } = props;

  const currentVariant = variants.find((variant) => variant.sku === sku);

  if (!currentVariant?.images) return null;

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
    currentVariant?.images?.map((value, index) => {
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

  const renderPreview = useMemo(() => currentVariant?.images?.map((value, index) => {
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

  const renderDots = useMemo(() => currentVariant?.images?.map((value, index) => (
    <li key={uuid()}>
      <Styles.Dot
        onClick={() => instanceRef.current?.moveToIdx(index)}
        active={currentSlide === index}
      />
    </li>
  )), [currentVariant, currentSlide]);

  if (!currentVariant) return null;

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
