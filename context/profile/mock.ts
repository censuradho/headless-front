import { ProfileContextProps } from "./types";

export const baseProfileContext: ProfileContextProps = {
  bag: {
    productsId: ([] as number[]),
  },
  setBag: () => {},
  favorite: {
    productsId: ([] as number[]),
  },
  setFavorite: () => {},
};
