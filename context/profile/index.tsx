import {
  createContext, useContext, useMemo, useState,
} from "react";
import { baseProfileContext } from "./mock";
import {
  Favorite,
  ProfileContextProps,
  ProfileProviderProps,
  Wish,
  WishProduct,
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

  const handleAddWishlist = (data: Wish) => {
    setWishlist((prevState) => ({
      ...prevState,
      [data.product.id]: {
        product: data.product,
        sizes: {
          ...prevState?.[data.product.id]?.sizes,
          [data.size.id]: {
            data: data.size,
            amount: (prevState?.[data.product.id]?.sizes?.[data.size.id]?.amount || 0) + 1,
          },
        },
      },
    }));
  };

  const wishlistProducts = Object
    .entries(wishlist || {})
    .map(([, value]) => value) as WishProduct[];

  return (
    <ProfileContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        favorite,
        addWishlist: handleAddWishlist,
        wishlistProducts,
        wishlist: useMemo(() => wishlist, [wishlist]),
        likeProduct: handleLikeProduct,
        unlikeProduct: handleUnlikeProduct,
      }}
    >
      {children}

    </ProfileContext.Provider>
  );
}

export const useProfileContext = () => useContext(ProfileContext);
