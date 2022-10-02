
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

export interface Image {
  id: number
  attributes: ImageAttr
}

export interface ProductAttr {
  name: string
  description: string,
  price: number,
  createdAt: string
  updatedAt: string
  publishedAt: string
  discount: number;
  slug: string;
  parcelamento: number;
  
  hoverImage: {
    data: Image
  },
  image: {
    data: Image[]
  },
  defaultImage: {
    data: Image
  }
}

export interface Product {
  id: number
  attributes: ProductAttr
}