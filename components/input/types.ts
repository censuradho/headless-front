import { VariantProps } from "@stitches/react";
import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form/dist/types";

import { Input } from "./styles";

type RootInputProps = Pick<InputHTMLAttributes<HTMLInputElement>,
  "onChange"
  | "onFocus"
  | "onBlur"
  | "name"
  | "id"
  | "placeholder"
  | "defaultValue"
>

type InputStylesProps = Pick<VariantProps<typeof Input>,
  "fullWidth"
>
export interface InputProps extends
  RootInputProps,
  InputStylesProps {
  label?: string
  register?: UseFormRegisterReturn
  errorMessage?: string
}
