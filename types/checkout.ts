import { Entity } from "./utils";

export interface AddressAttr {
  cep: string
  logradouro: string
  bairro: string
  complemento?: string
  localidade: string
  uf: string
  numero: number
  user: number
  isMain?: boolean
}
export type Address = Entity<AddressAttr>

export interface PerfilAttr {
  firstName: string
  lastName: string
  phone: string
  clientDocument: string
  gender: string
  birthDate: string
}

export type PostPerfilRequest = PerfilAttr

export type PutPerfilRequest = PostPerfilRequest

export type Perfil = Entity<PerfilAttr>

export interface GenerateCardTokenRequest {
  description?: string
  amount: {
    value: number,
    currency: string
  },
  payment_method: {
    installments: number
    capture?: boolean
    soft_descriptor?: string
    card: {
      number: string
      exp_month: string
      exp_year: string
      security_code: string
      store: boolean
      holder: {
        name: string
      }
    }
  }
}

export interface GenerateCardTokenResponse {
  id: string
  reference_id: string
  status: string
  description: string
  amount: {
    value: number,
    currency: string,
    summary: {
        total: number,
        paid: number,
        refunded: number
    }
  }
  payment_response: {
    type: string
    installments: number
    card: {
      id: string
      brand: string
      last_digits: string
      holder: {
        name: string
      }
    }
    soft_descriptor: string
  }
}
