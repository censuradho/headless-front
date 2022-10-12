import { Image, Product } from "./product";

export interface ProductColorsAttr {
  name: string,
  image: {
    data: Image
  }
  products?: {
    data: Product[]
  }
}

export interface ProductColorsRequest {
  id: number
  attributes: ProductColorsAttr
}

export type ProductColor = ProductColorsRequest
