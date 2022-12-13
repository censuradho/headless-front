import { Data, Entity } from "./utils";

export interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface SizeAttr {
  name: string;
}

export type Size = Entity<SizeAttr>;

export interface ImageAttr {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    thumbnail: ImageFormat;
    large: ImageFormat;
    medium: ImageFormat;
    small: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider?: string;
  createdAt: string;
  updatedAt: string;
}

export type Image = Entity<ImageAttr>;

export interface InventoryAttr {
  stock: number;
  size: Data<Size>;
  // eslint-disable-next-line no-use-before-define
  product: Data<Product>;
}

export type Inventory = Entity<InventoryAttr>;

export interface ProductAttr {
  name: string;
  description: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  inventories: Data<Inventory[]>;
  slug: string;
  installment: number;
  videoPreview?: string;
  hoverImage: Data<Image>;
  image: Data<Image[]>;
  defaultImage: Data<Image>;
  installments: number;
}

export type Product = Entity<ProductAttr>;
