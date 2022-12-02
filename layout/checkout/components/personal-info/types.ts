import { PerfilAttr } from "types/checkout";

export interface PersonalInfoFormData extends PerfilAttr {
  email: string
}

export interface PersonalInfoProps {
  isActive?: boolean
}
