import { useAddress } from "../useAddress";
import { usePerfil } from "../usePerfil";

export interface UsePaymentMethodParams {
  perfil: ReturnType<typeof usePerfil>;
  address: ReturnType<typeof useAddress>;
}
export interface PaymentMethodFormData {
  installments: string;
  creditCardNumber: string;
  holderName: string;
  expMonth: string;
  expYear: string;
  securityCode: string;
  clientDocument: string;
}
