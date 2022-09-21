import { icons } from "constants/icons";
import { useTheme } from "context/theme";
import { SVGProps } from "react";

type Colors  = ReturnType<typeof useTheme>['theme']['colors']

export interface IconProps {
  name: keyof typeof icons
  color?: keyof Colors
  customColor?: string
}