import { ComponentProps } from "react";
import { Root } from "./styles";

type RootSelect = Pick<ComponentProps<typeof Root>,
  "onOpenChange"
  | "onValueChange"
  | "value"
  | "name"
  | "required"
  | "defaultValue"
>

export interface SelectData {
  label: string
  value: string | number
}

export interface SelectProps extends RootSelect {
  data: SelectData[]
  placeholder?: string,
  fullWidth?: boolean
  id?: string
  label?: string
  errorMessage?: string
}
