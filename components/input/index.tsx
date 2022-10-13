import { forwardRef, memo } from "react";

import * as Styles from "./styles";
import { InputProps } from "./types";

export const BaseInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    label,
    errorMessage,
    register,
    fullWidth,
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
    <Styles.Container fullWidth={fullWidth}>
      {renderLabel()}
      <Styles.Input
        {...otherProps}
        ref={ref}
        {...register}
        hasError={hasError}
      />
      {renderErrorMessage()}
    </Styles.Container>
  );
});

export const Input = memo(BaseInput);
