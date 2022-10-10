import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ProfileProviderProps {
  children: ReactNode
}

interface Favorite {
  productsId: number[]
}

interface Bag {
  productsId: number[]
}

export interface ProfileContextProps {
  favorite: Favorite
  setFavorite: Dispatch<SetStateAction<Favorite>>
  setBag: Dispatch<SetStateAction<Bag>>
  bag: Bag
}
