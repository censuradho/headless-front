import { Image, Product } from "./product";

export interface HeroBanners {
  image: Image
  path: string
}
export interface GetHomeQueryResponse {
  description: string,
  title: string,
  emphasis: Product[]
  hero_banners: HeroBanners[]
}
