import { useAddress, usePaymentMethod, usePerfil } from "hooks/entries";
import { createContext, useContext } from "react";

import type {
  CheckoutParams,
} from "./types";

const CheckoutContext = createContext({} as CheckoutParams);

export function CheckoutProvider({ children }: any) {
  const perfil = usePerfil();
  const address = useAddress();

  const paymentMethod = usePaymentMethod({
    address,
    perfil,
  });

  return (
    <CheckoutContext.Provider
      value={{
        perfil,
        address,
        paymentMethod,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export const useCheckout = () => useContext(CheckoutContext);
