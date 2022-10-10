import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ProfileProviderProps {
  children: ReactNode
}

export interface Favorite {
  id: number
}

interface Bag {
  id: number
}

export interface ProfileContextProps {
  favorite: Favorite[]
  setFavorite: Dispatch<SetStateAction<Favorite[]>>
  setBag: Dispatch<SetStateAction<Bag[]>>
  likeProduct?: (data: Favorite) => void;
  unlikeProduct?: (data: Favorite) => void;
  bag: Bag[]
}
