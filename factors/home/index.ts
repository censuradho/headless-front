import { imageFactory, productFactory } from "factors/product";
import type { Home, langeriCarousel } from "layout/home/types";

function langeriCarouselFactory (props: Partial<langeriCarousel>): langeriCarousel {
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
      langeriCarousel: langeriCarouselFactory(props.attributes?.langeriCarousel || {}),
    },
  }
}