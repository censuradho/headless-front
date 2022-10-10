import { ReactNode } from "react";

export interface ProfileProviderProps {
  children: ReactNode
}

interface Favorite {
  id: number
}

export interface ProfileContextProps {
  favorite: Favorite
}
