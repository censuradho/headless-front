import { ResponseDataType } from "factors/types";
import { Product } from "types/product";

export interface HomeAttrs {
  langeriCarousel?: Array<Product>;
}
export interface Home  {
  id: number;
  attributes: HomeAttrs
}

export type HomeProps = ResponseDataType<Home[]>