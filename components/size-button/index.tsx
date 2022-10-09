import * as Styles from "./styles";
import { SizeButtonProps } from "./types";

export function SizeButton(props: SizeButtonProps) {
  const { children, ...otherProps } = props;

  return (
    <Styles.Container {...otherProps}>
      {children}

    </Styles.Container>
  );
}
