import { VariantProps } from "@stitches/react";
import { IconProps } from "components/icon/type";
import { InputHTMLAttributes, KeyboardEvent } from "react";
import { UseFormRegisterReturn } from "react-hook-form/dist/types";

import { setMask } from "utils/helpers";
import { Container } from "./styles";

type RootInputProps = Pick<InputHTMLAttributes<HTMLInputElement>,
  "onChange"
  | "onFocus"
  | "onBlur"
  | "name"
  | "id"
  | "placeholder"
  | "defaultValue"
  | "type"
  | "autoFocus"
  | "disabled"
>

type InputStylesProps = Pick<VariantProps<typeof Container>,
  "fullWidth"
>
export interface InputProps extends
  RootInputProps,
  InputStylesProps {
  label?: string
  register?: UseFormRegisterReturn
  errorMessage?: string
  leftIcon?: IconProps
  rightIcon?: IconProps
  onRightIconClick?: () => void;
  onLeftIconClick?: () => void;
  value?: string
  mask?: (event: KeyboardEvent<HTMLInputElement>) => void
}
