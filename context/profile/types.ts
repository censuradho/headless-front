import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ProfileProviderProps {
  children: ReactNode
}

export interface Favorite {
  id: number
}

export interface Wishlist {
  id: number
}

export interface ProfileContextProps {
  favorite: Favorite[]
  likeProduct?: (data: Favorite) => void;
  unlikeProduct?: (data: Favorite) => void;
  addWishlist?: (data: Wishlist) => void
  removeWishlist?: (data: Wishlist) => void
  wishlist: Wishlist[]
}
