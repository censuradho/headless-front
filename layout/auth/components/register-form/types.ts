import { CreateUserWithEmailPasswordPayload } from "types/auth";

export interface RegisterFormData extends CreateUserWithEmailPasswordPayload {
  rePassword: string,
  lastName: string
}
