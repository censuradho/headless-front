import { VariantProps } from "@stitches/react";
import { Icon } from "components";
import { ComponentProps, ButtonHTMLAttributes } from "react";
import { Button } from "./styles";

type RootButtonProps = Pick<ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick"
  | "onFocus"
  | "id"
  | "type"
  | "disabled"
>
export interface ButtonProps extends
  VariantProps<typeof Button>,
  RootButtonProps {
  children: string
  icon?: ComponentProps<typeof Icon>
  loading?: boolean
}
