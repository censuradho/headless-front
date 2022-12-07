import { usePerfil } from "hooks/entries";

export interface CheckoutParams {
  perfil: ReturnType<typeof usePerfil>
}
