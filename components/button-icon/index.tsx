import { Icon } from "components/icon";
import {
  MouseEvent, TouchEvent, useState,
} from "react";
import * as Styles from "./styles";
import { ButtonIconProps } from "./types";

export function ButtonIcon(props: ButtonIconProps) {
  const [isRipple, setIsRipple] = useState(false);

  const {
    icon,
    onMouseDown,
    onMouseUp,
    onTouchEnd,
    onTouchStart,
    type = "button",
    ...otherProps
  } = props;

  const handleTouchStart = (event: TouchEvent<HTMLButtonElement>) => {
    onTouchStart?.(event);
    setIsRipple(true);
  };

  const handleToucheEnd = (event: TouchEvent<HTMLButtonElement>) => {
    onTouchEnd?.(event);
    setIsRipple(false);
  };

  const handleMouseDown = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    onMouseDown?.(event);
    setIsRipple(true);
  };

  const handleMouseUp = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    onMouseUp?.(event);
    setIsRipple(false);
  };

  return (
    <Styles.Button
      onTouchStart={handleTouchStart}
      onTouchEnd={handleToucheEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      isRipple={isRipple}
      type={type}
      {...otherProps}
    >
      <Icon {...icon} />
    </Styles.Button>
  );
}
