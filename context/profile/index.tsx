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

  const handleIncreaseWishProduct = (productId: number, sizeId: number) => {
    setWishlist((prevState) => ({
      ...prevState,
      ...(prevState && ({
        [productId]: {
          ...prevState[productId],
          sizes: {
            ...prevState[productId].sizes,
            [sizeId]: {
              ...prevState[productId].sizes[sizeId],
              amount: prevState[productId].sizes[sizeId].amount + 1,
            },
          },
        },
      }))
      ,
    }));
  };

  const handleDecreaseWishProduct = (productId: number, sizeId: number) => {
    setWishlist((prevState) => {
      if (!prevState) return;
      const currentState = prevState;

      if (currentState[productId].sizes[sizeId].amount === 1) {
        delete currentState[productId].sizes[sizeId];

        return ({
          ...currentState,
        });
      }

      return ({
        ...currentState,
        ...(currentState && ({
          [productId]: {
            ...currentState[productId],
            sizes: {
              ...currentState[productId].sizes,
              [sizeId]: {
                ...currentState[productId].sizes[sizeId],
                amount:
                  currentState[productId].sizes[sizeId].amount >= 0
                    ? currentState[productId].sizes[sizeId].amount - 1
                    : currentState[productId].sizes[sizeId].amount,
              },
            },
          },
        }))
        ,
      });
    });
  };

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
        increaseWishProduct: handleIncreaseWishProduct,
        decreaseWishProduct: handleDecreaseWishProduct,
      }}
    >
      {children}

    </ProfileContext.Provider>
  );
}

export const useProfileContext = () => useContext(ProfileContext);
