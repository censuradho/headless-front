import { memo } from "react";
import Loader from "public/icons/loader.svg";

import { Icon } from "components";

import * as Styles from "./styles";

import { ButtonProps } from "./types";

function BaseButton(props: ButtonProps) {
  const {
    children,
    icon,
    loading,
    disabled,
    type = "button",
    ...otherProps
  } = props;

  const renderLoading = () => {
    if (!loading) return null;

    return (
      <Styles.LoaderContainer>
        <Loader />
      </Styles.LoaderContainer>
    );
  };

  return (
    <Styles.Button
      type={type}
      disabled={disabled || loading}
      {...otherProps}
    >
      {icon && <Icon {...icon} />}
      {children}
      {renderLoading()}
    </Styles.Button>
  );
}

export const Button = memo(BaseButton);
