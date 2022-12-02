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
