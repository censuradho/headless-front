import { forwardRef, memo } from "react";

import * as Styles from "./styles";
import { InputProps } from "./types";

export const BaseInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    label,
    errorMessage,
    ...otherProps
  } = props;
  const hasError = !!errorMessage;

  const renderLabel = () => {
    if (!label) return null;
    return (
      <Styles.Label
        as="label"
        htmlFor={otherProps?.id}
        variant="caption1"
        hasError={hasError}
      >
        {label}
      </Styles.Label>
    );
  };

  const renderErrorMessage = () => {
    if (!hasError) return null;

    return (
      <Styles.ErrorMessage variant="caption2">{errorMessage}</Styles.ErrorMessage>

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
      {renderErrorMessage()}
    </Styles.Container>
  );
});

export const Input = memo(BaseInput);
