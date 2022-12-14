import { imageFactory, productFactory } from "factors/product";

import type { Home, Section } from "layout/home/types";

function SectionFactory(params: Partial<Section>): Section {
  return {
    id: params?.id || 0,
    products: {
      data:
        params.products?.data?.map((product) => productFactory(product)) || [],
    },
    title: params?.title || "",
  };
}
export function homeFactory(props: Partial<Home>): Home {
  return {
    id: props?.id || 0,
    attributes: {
      hero: {
        data:
          props?.attributes?.hero?.data?.map((value) => imageFactory(value)) ||
          [],
      },
      section1: SectionFactory(props?.attributes?.section1 || {}),
      sectionBanner1: {
        data: imageFactory(props.attributes?.sectionBanner1?.data || {}),
      },
    },
  };
}
