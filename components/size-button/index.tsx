import * as Styles from "./styles";
import { SizeButtonProps } from "./types";

export function SizeButton(props: SizeButtonProps) {
  const { children, disabled, ...otherProps } = props;

  return (
    <Styles.Container noSizes={disabled} {...otherProps}>
      {children}
    </Styles.Container>
  );
}
