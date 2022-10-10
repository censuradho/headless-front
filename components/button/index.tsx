import { memo } from "react";

import { Icon } from "components";

import * as Styles from "./styles";

import { ButtonProps } from "./types";

function BaseButton(props: ButtonProps) {
  const { children, icon, ...otherProps } = props;

  return (
    <Styles.Button {...otherProps}>
      {icon && <Icon {...icon} />}
      {children}
    </Styles.Button>
  );
}

export const Button = memo(BaseButton);
