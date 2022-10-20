import { Entity } from "./utils";

export interface ImageFormat {
  name: string
  hash: string
  ext: string
  mime: string
  path: string,
  width: number,
  height: number,
  size: number,
  url: string
}

export interface SizeAttr {
  name: string
}
export type Size = Entity<SizeAttr>

export interface SizeProduct {
  id: number
  size: {
    data: Size
  }
  stock: number
}

export interface ImageAttr {
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: {
    thumbnail: ImageFormat;
    large: ImageFormat;
    medium: ImageFormat;
    small: ImageFormat
  }
  hash: string,
  ext: string,
  mime: string,
  size: number,
  url: string,
  previewUrl?: string,
  provider?: string,
  createdAt: string,
  updatedAt: string
}

export type Image = Entity<ImageAttr>
interface DiscountAttr {
  name: string;
  description: string
  value: number;
  active: boolean
}

type Discount = Entity<DiscountAttr>
export interface ProductAttr {
  name: string
  description: string,
  price: number,
  createdAt: string
  updatedAt: string
  publishedAt: string
  discount: {
    data: Discount
  } | null;
  slug: string;
  installment: number;
  videoPreview?: string;
  hoverImage: {
    data: Image
  },
  image: {
    data: Image[]
  },
  defaultImage: {
    data: Image
  }
  sizes: SizeProduct[]
}

export type Product = Entity<ProductAttr>
