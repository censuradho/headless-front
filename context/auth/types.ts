import { Dispatch, ReactNode, SetStateAction } from "react";
import { User } from "types/auth";

export interface AuthProviderProps {
  children: ReactNode
}

export interface AuthContextProps {
  user: User | null
  setUser: Dispatch<SetStateAction<User | null>>
  jwt?: string | null,
  setJwt: Dispatch<SetStateAction<string | null>>
}
