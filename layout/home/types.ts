import { ResponseDataType } from "factors/types";
import { Image, Product } from "types/product";

export interface Section {
  id: number;
  title: string;
  products: {
    data: Product[];
  };
}

export interface HomeAttrs {
  section1: Section;
  hero: {
    data: Array<Image>;
  };
  sectionBanner1: {
    data: Image;
  };
}
export interface Home {
  id: number;
  attributes: HomeAttrs;
}

export type HomeProps = ResponseDataType<Home>;
