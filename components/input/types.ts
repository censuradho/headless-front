import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form/dist/types";

type RootInputProps = Pick<InputHTMLAttributes<HTMLInputElement>,
  "onChange"
  | "onFocus"
  | "onBlur"
  | "name"
  | "id"
  | "placeholder"
  | "defaultValue"
>

export interface InputProps extends RootInputProps {
  label?: string
  register?: UseFormRegisterReturn
  errorMessage?: string
}
