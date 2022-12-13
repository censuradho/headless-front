import { Icon } from "components/m-icon";
import { ButtonHTMLAttributes, ComponentProps } from "react";

type IconProps = ComponentProps<typeof Icon>;

type RootButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  | "onClick"
  | "onMouseDown"
  | "onMouseUp"
  | "onTouchEnd"
  | "onTouchStart"
  | "type"
  | "disabled"
>;

export interface ButtonIconProps extends RootButtonProps {
  icon: IconProps;
}
