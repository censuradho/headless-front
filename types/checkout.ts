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
