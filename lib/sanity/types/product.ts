export interface Image {
  alternative_text: string
  asset: {
    url: string
  }
}

interface Size {
  _id: string
  name: string,
  value: number
}

export interface Variant {
  _id: string
  color: string,
  sizes: Size[]
  sku: string,
  stock: number
  images: Image[]
  discount?: number
}

export interface Product {
  _id: string
  name: string,
  price: number
  description: number
  slug: {
    current: string
  }
  variants: Variant[],
  default_variant: Variant
}

export interface GetProductQueryRequest {
  _id: string
}
