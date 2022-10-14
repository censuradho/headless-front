import { LinkProps } from "next/link";

import { VariantProps } from "@stitches/react";
import { Icon } from "components";
import { ComponentProps, ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "./styles";

type RootButtonProps = Pick<ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick"
  | "onFocus"
  | "id"
  | "type"
  | "disabled"
>

type NextLinkProps = Partial<Pick<LinkProps,
"href"
>>

export interface ButtonProps extends
  VariantProps<typeof Button>,
  RootButtonProps,
  NextLinkProps {
  children: ReactNode
  icon?: ComponentProps<typeof Icon>
  loading?: boolean
  as?: any
}
