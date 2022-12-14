import { useMemo, useState } from "react";

import { Image } from "components";
import { useKeenSlider } from "keen-slider/react";
import * as Styles from "./styles";
import { PreviewProps } from "./types";

export function Preview(props: PreviewProps) {
  const {
    id,
    attributes: {
      image,
    },
  } = props;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [, setCurrentSlidePreview] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 1,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

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

  const renderPhotos = useMemo(() => (
    image?.data?.map((value) => (
      <div className="keen-slider__slide" key={value.id}>
        <Image
          src={value.attributes?.formats?.large?.url}
          alt={value.attributes?.alternativeText}
          width={value.attributes?.formats?.large?.width}
          height={value.attributes?.formats?.large?.height}
          layout="responsive"
          objectFit="fill"
        />
      </div>
    ))
  ), []);

  const renderPreview = useMemo(() => image?.data?.map((value, index) => (
    <Styles.PreviewImageItem
      key={value.id}
      className="keen-slider__slide"
      onClick={() => instanceRef.current?.moveToIdx(index)}
      selected={currentSlide === index}
    >
      <Image
        src={value.attributes?.formats?.large?.url}
        alt={value.attributes?.alternativeText}
        width={value.attributes?.formats?.large?.width}
        height={value.attributes?.formats?.large?.height}
        layout="responsive"
      />
    </Styles.PreviewImageItem>
  )), [currentSlide, instanceRef]);

  const renderDots = image?.data?.map((value, index) => (
    <li key={value.id}>
      <Styles.Dot
        onClick={() => instanceRef.current?.moveToIdx(index)}
        active={currentSlide === index}
      />
    </li>
  ));

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
