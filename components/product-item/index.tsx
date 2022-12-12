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
import { sanityClient, urlFor } from "lib/sanity";
import { useNextSanityImage } from "next-sanity-image";
import { Discount } from "./components";

import * as Styles from "./styles";

export function ProductItem(props: Product) {
  const {
    _id,
    slug,
    default_variant,
    name,
    price,
  } = props;

  const {
    images,
    discount = 0,
  } = default_variant;

  const [firstImage, lastImage] = images;

  const parsedFirstImage = urlFor(firstImage.asset.url).width(563).height(750);

  const parsedLastImage = urlFor(lastImage.asset.url).width(563).height(750);

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
                src={parsedFirstImage.url()}
                layout="responsive"
                width={563}
                height={750}
                alt={firstImage.alternative_text}
              />
            </Styles.ImageContainer>
            <Styles.ImageContainer isHidden={isHoverThumb}>
              <Image
                src={parsedLastImage.url()}
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
