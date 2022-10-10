import { VariantProps } from "@stitches/react";
import { Icon } from "components";
import { ComponentProps } from "react";
import { Button } from "./styles";

export interface ButtonProps extends VariantProps<typeof Button> {
  children: string
  icon?: ComponentProps<typeof Icon>
}
