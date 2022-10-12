import { SizeOption } from "hooks/useProductSizes";
import { ReactNode } from "react";
import { Product } from "types/product";

export interface ProfileProviderProps {
  children: ReactNode
}

export interface Favorite {
  id: number
}

export interface Wish {
  product: Product
  size: SizeOption
}

export interface WishSize {
  data: SizeOption,
  amount: number
}

export interface WishProduct {
  product: Product,
  sizes: {
    [sizeId: number]: WishSize
  }
}
export interface Wishlist {
  [productId: number]: WishProduct,
}

export interface WishlistItem {
  product: Product
}

export interface ProfileContextProps {
  favorite: Favorite[]
  wishlist?: Wishlist
  wishlistProducts: WishProduct[]
  likeProduct?: (data: Favorite) => void;
  unlikeProduct?: (data: Favorite) => void;
  addWishlist?: (data: Wish) => void
  removeWishlist?: (data: Wish) => void
}
