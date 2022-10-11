import { Image } from "./product";

export interface ProductColorsAttr {
  name: string,
  image: {
    data: Image
  }
}

export interface ProductColorsRequest {
  id: number
  attributes: ProductColorsAttr
}
