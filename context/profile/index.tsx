import {
  createContext, useContext, useState,
} from "react";
import { baseProfileContext } from "./mock";
import {
  Favorite, ProfileContextProps, ProfileProviderProps, Wishlist,
} from "./types";

const ProfileContext = createContext<ProfileContextProps>(baseProfileContext);

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [favorite, setFavorite] = useState(baseProfileContext.favorite);
  const [wishlist, setWishlist] = useState(baseProfileContext.wishlist);

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

  const handleAddWishlist = (data: Wishlist) => {
    setWishlist((prevState) => ([
      ...prevState,
      data,
    ]));
  };

  const handleRemoveWishlist = (data: Favorite) => {
    setWishlist((prevState) => ([
      ...prevState.filter((value) => value.id !== data.id),
    ]));
  };

  return (
    <ProfileContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        favorite,
        wishlist,
        likeProduct: handleLikeProduct,
        unlikeProduct: handleUnlikeProduct,
        addWishlist: handleAddWishlist,
        removeWishlist: handleRemoveWishlist,
      }}
    >
      {children}

    </ProfileContext.Provider>
  );
}

export const useProfileContext = () => useContext(ProfileContext);
