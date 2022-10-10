import {
  createContext, useContext, useMemo, useState,
} from "react";
import { baseProfileContext } from "./mock";
import { ProfileContextProps, ProfileProviderProps } from "./types";

const ProfileContext = createContext<ProfileContextProps>(baseProfileContext);

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [favorite, setFavorite] = useState(baseProfileContext.favorite);
  const [bag, setBag] = useState(baseProfileContext.bag);

  return (
    <ProfileContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        favorite,
        setFavorite,
        setBag,
        bag,
      }}
    >
      {children}

    </ProfileContext.Provider>
  );
}

export const useProfileContext = () => useContext(ProfileContext);
