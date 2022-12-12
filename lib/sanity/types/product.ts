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

interface ProductSize {
  stock: number
  size: Size
}

export interface Variant {
  _id: string
  color: string,
  size: Size
  sku: string,
  stock: number
  images?: Image[]
  discount?: number
}

export interface Product {
  _id: string
  name: string,
  price: number
  description: number
  discount?: number
  images?: Image[]
  sizes: ProductSize[]
  slug: {
    current: string
  }
}

export interface GetProductQueryRequest {
  _id: string
}
