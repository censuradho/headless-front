import { imageFactory, productFactory } from "factors/product";
import type { Home, LangerieCarousel } from "layout/home/types";

function carouselFactory (props: Partial<LangerieCarousel>): LangerieCarousel {
  return {
    id: props?.id || 0,
    products: {
      data: props?.products?.data?.map(value => productFactory(value)) || []
    },
    title: props?.title || ''
  }
}

export function homeFactory (props: Partial<Home>): Home {

  return {
    id: props?.id || 0,
    attributes: {
      hero: {
        data: props?.attributes?.hero?.data?.map(value => imageFactory(value)) || []
      },
      heroMobile: {
        data: props?.attributes?.hero?.data?.map(value => imageFactory(value)) || []
      },
      lubrificantes: carouselFactory(props.attributes?.lubrificantes || {}),
      langerieCarousel: carouselFactory(props.attributes?.langerieCarousel || {}),
      sectionBanner1: {
        data: imageFactory(props.attributes?.sectionBanner1?.data || {})
      },
      lubri: props.attributes?.lubri || {}
    },
  }
}