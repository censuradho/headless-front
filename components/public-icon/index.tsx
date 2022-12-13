import { publicIcons } from "constants/public-icons";
import { useTheme } from "context/theme";
import { IconProps } from "./type";

export function PublicIcon(props: IconProps) {
  const { name, color, customColor } = props;

  const { theme } = useTheme();

  const Svg = publicIcons[name];

  const fill =
    theme?.colors[color as keyof typeof theme.colors]?.value ||
    customColor ||
    ("none" as string);

  return (
    <Svg
      preserveAspectRatio="xMidYMid meet"
      style={{
        fill,
      }}
    />
  );
}
