import { ResponseDataType } from "factors/types";
import { Image, Product } from "types/product";

interface HeroAttrs {
  name: string,
  alternativeText: string,
  caption: string,
  width: number,
  height: number,
}

type Hero  = Image
export interface HomeAttrs {
  langeriCarousel: Array<Product>;
  hero: {
    data: Array<Hero>
  }
}
export interface Home  {
  id: number;
  attributes: HomeAttrs
}

export type HomeProps = ResponseDataType<Home>