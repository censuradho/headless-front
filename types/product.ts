import { Data, Entity } from "./utils";

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

export interface InventoryAttr {
  stock: number
  size: Data<Size>
  // eslint-disable-next-line no-use-before-define
  product: Data<Product>
}

export type Inventory = Data<Entity<InventoryAttr>[]>

export interface ProductAttr {
  name: string
  description: string,
  price: number,
  createdAt: string
  updatedAt: string
  publishedAt: string
  inventories: Inventory,
  discount: Data<Discount | null>;
  slug: string;
  installment: number;
  videoPreview?: string;
  hoverImage: Data<Image>,
  image: Data<Image>,
  defaultImage: Data<Image>
}

export type Product = Entity<ProductAttr>
