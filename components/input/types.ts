import { InputHTMLAttributes } from "react";
import { VariantProps } from "@stitches/react";

import { Input } from "./styles";

type RootInputProps = Pick<InputHTMLAttributes<HTMLInputElement>,
  "onChange"
  | "onFocus"
  | "onBlur"
  | "name"
  | "id"
  | "placeholder"
>

export interface InputProps extends RootInputProps, VariantProps<typeof Input> {
  label?: string
}
