import { useState } from "react";

import { Image, Box } from "components";
import { paths } from "constants/routes";
import { toLocaleDateString } from "lib/toLocaleDateString";

import {
  getPriceProduct,
  getRelatedPercentage,
  resolvePath,
} from "utils";

import { Product } from "lib/sanity/types/product";
import { urlFor } from "lib/sanity";
import { imageSizes } from "constants/imageSizes";
import { Discount } from "./components";

import * as Styles from "./styles";

export function ProductItem(props: Product) {
  const {
    _id,
    name,
    slug,
    discount,
    images,
    price,
  } = props;

  const [firstImage, lastImage] = images || [];

  const parsedFirstImage = firstImage ? urlFor(firstImage.asset.url).width(563).height(750).url() : "";

  const parsedLastImage = lastImage ? urlFor(lastImage.asset.url).width(563).height(750).url() : "";

  const [isHoverThumb, setIsHoverThumb] = useState(true);

  const [isGrab, setIsGrab] = useState(false);

  const renderDiscount = () => {
    if (!discount) return null;

    return (
      <Styles.DiscountValue>{toLocaleDateString(price)}</Styles.DiscountValue>
    );
  };

  const renderValue = () => {
    const value = getPriceProduct(price, discount);
    const hasDiscount = !!discount;

    return <Styles.Price hasDiscount={hasDiscount}>{toLocaleDateString(value)}</Styles.Price>;
  };

  const renderDiscountTag = () => {
    if (!discount) return null;
    return (
      <Discount>{`${getRelatedPercentage(price, discount)}% OFF`}</Discount>
    );
  };

  const href = resolvePath(paths.pdp, {
    slug: slug.current,
    id: _id,
  });

  const handleHoverThumb = () => {
    if (!lastImage) return;

    setIsHoverThumb((prevState) => !prevState);
  };

  return (

    <Styles.Container>
      <Styles.Link
        href={href}
        isGrab={isGrab}
        onMouseDown={() => setIsGrab(true)}
        onMouseUp={() => setIsGrab(false)}
      >
        <a>
          <Styles.Thumb
            onMouseEnter={handleHoverThumb}
            onMouseLeave={handleHoverThumb}
          >
            <Styles.ImageContainer isHidden={!isHoverThumb}>
              <Image
                src={parsedFirstImage}
                layout="responsive"
                width={imageSizes["563x750"].width}
                height={imageSizes["563x750"].height}
                alt={firstImage.alternative_text}
              />
            </Styles.ImageContainer>
            <Styles.ImageContainer isHidden={isHoverThumb}>
              <Image
                src={parsedLastImage}
                layout="responsive"
                width={563}
                height={750}
                alt={lastImage.alternative_text}
              />
            </Styles.ImageContainer>
          </Styles.Thumb>
          <Styles.Content>
            <Styles.Name>{name}</Styles.Name>
            {renderDiscount()}
            <Box gap={1}>
              {renderValue()}
              {renderDiscountTag()}
            </Box>
          </Styles.Content>
        </a>
      </Styles.Link>
    </Styles.Container>

  );
}
