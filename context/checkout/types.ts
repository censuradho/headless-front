import { useAddress, usePaymentMethod, usePerfil } from "hooks/entries";

export interface CheckoutParams {
  perfil: ReturnType<typeof usePerfil>
  address: ReturnType<typeof useAddress>
  paymentMethod: ReturnType<typeof usePaymentMethod>
}
