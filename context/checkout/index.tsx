import { usePerfil } from "hooks/entries";
import { createContext, useContext } from "react";

import type {
  CheckoutParams,
} from "./types";

const CheckoutContext = createContext({} as CheckoutParams);

export function CheckoutProvider({ children }: any) {
  const perfil = usePerfil();

  return (
    <CheckoutContext.Provider
      value={{
        perfil,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export const useCheckout = () => useContext(CheckoutContext);
