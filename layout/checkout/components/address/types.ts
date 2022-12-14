import { AddressAttr } from "types/checkout";

export type AddressFormData = Omit<AddressAttr, "user">;

export interface AddressProps {
  isActive?: boolean;
}
