import { icons } from "constants/icons";
import { useTheme } from "context/theme";

type Colors = ReturnType<typeof useTheme>["theme"]["colors"]
export type IconNames = keyof typeof icons

export interface IconProps {
  name: IconNames
  color?: keyof Colors
  customColor?: string,
  /** in rem */
  size?: number
}
