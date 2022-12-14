import { icons } from "constants/icons";
import { useTheme } from "context/theme";
import { IconProps } from "./type";

export function Icon(props: IconProps) {
  const { name, color, customColor, size = 20 } = props;

  const { theme } = useTheme();

  const Svg = icons[name];

  const fill = (customColor || theme.colors[color || "title"].value) as string;

  return <Svg style={{ fill }} size={size} />;
}
