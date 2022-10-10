import {
  createContext, useContext, useState,
} from "react";
import { baseProfileContext } from "./mock";
import { Favorite, ProfileContextProps, ProfileProviderProps } from "./types";

const ProfileContext = createContext<ProfileContextProps>(baseProfileContext);

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [favorite, setFavorite] = useState(baseProfileContext.favorite);
  const [bag, setBag] = useState(baseProfileContext.bag);

  const handleLikeProduct = (data: Favorite) => {
    setFavorite((prevState) => ([
      ...prevState.filter((value) => value.id !== data.id),
      {
        ...data,
      },
    ]));
  };

  const handleUnlikeProduct = (data: Favorite) => {
    setFavorite((prevState) => ([
      ...prevState.filter((value) => value.id !== data.id),
    ]));
  };

  return (
    <ProfileContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        favorite,
        setFavorite,
        setBag,
        bag,
        likeProduct: handleLikeProduct,
        unlikeProduct: handleUnlikeProduct,
      }}
    >
      {children}

    </ProfileContext.Provider>
  );
}

export const useProfileContext = () => useContext(ProfileContext);
