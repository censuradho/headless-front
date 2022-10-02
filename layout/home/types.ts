import { ResponseDataType } from "factors/types";
import { Image, Product } from "types/product";

export interface LangerieCarousel {
  id: number;
  title: string
  products: {
    data: Product[]
  }
}

export interface HomeAttrs {
  langerieCarousel: LangerieCarousel;
  hero: {
    data: Array<Image>
  }
  heroMobile: {
    data: Array<Image>
  }
  sectionBanner1: {
    data: Image
  },
  lubrificantes: LangerieCarousel
}
export interface Home  {
  id: number;
  attributes: HomeAttrs
}

export type HomeProps = ResponseDataType<Home>