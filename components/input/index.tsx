import { forwardRef, memo } from "react";

import * as Styles from "./styles";
import { InputProps } from "./types";

export const BaseInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    label,
    hasError,
    ...otherProps
  } = props;

  const renderLabel = () => {
    if (!label) return null;
    return (
      <Styles.Label
        as="label"
        htmlFor={otherProps?.id}
        variant="caption2"
        hasError={hasError}
      >
        {label}
      </Styles.Label>
    );
  };

  return (
    <Styles.Container>
      {renderLabel()}
      <Styles.Input
        {...otherProps}
        hasError={hasError}
        ref={ref}
      />
    </Styles.Container>
  );
});

export const Input = memo(BaseInput);
