import { useState } from "react";

import { Image, Box } from "components";
import { paths } from "constants/routes";
import { toLocaleDateString } from "lib/toLocaleDateString";

import { Product } from "types/product";
import {
  getPriceProduct,
  getRelatedPercentage,
  resolvePath,
} from "utils";

import { Discount } from "./components";

import * as Styles from "./styles";

export function ProductItem(props: Product) {
  const {
    id,
    attributes: {
      slug,
      hoverImage,
      name,
      price,
      defaultImage,
      discount,
    },
  } = props || {};

  const firstImage = defaultImage?.data || {};
  const lastImage = hoverImage?.data || {};

  const [isHoverThumb, setIsHoverThumb] = useState(true);

  const [isGrab, setIsGrab] = useState(false);

  const renderDiscount = () => {
    if (!discount) return null;

    return (
      <Styles.DiscountValue>{toLocaleDateString(price)}</Styles.DiscountValue>
    );
  };

  const renderValue = () => {
    const value = getPriceProduct(price, discount?.data?.attributes?.value);
    const hasDiscount = !!discount;

    return <Styles.Price hasDiscount={hasDiscount}>{toLocaleDateString(value)}</Styles.Price>;
  };

  const renderDiscountTag = () => {
    if (!discount) return null;
    return (
      <Discount>{`${getRelatedPercentage(price, discount?.data?.attributes?.value)}% OFF`}</Discount>
    );
  };

  const href = resolvePath(paths.pdp, {
    slug,
    id,
  });

  const handleHoverThumb = () => {
    if (!lastImage?.id) return;

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
                src={firstImage?.attributes?.url}
                alt={firstImage?.attributes?.alternativeText}
                height={firstImage?.attributes?.height}
                width={firstImage?.attributes?.width}
                layout="responsive"
              />
            </Styles.ImageContainer>
            <Styles.ImageContainer isHidden={isHoverThumb}>
              <Image
                src={lastImage?.attributes?.url}
                alt={lastImage?.attributes?.alternativeText}
                height={lastImage?.attributes?.height}
                width={lastImage?.attributes?.width}
                layout="responsive"
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
