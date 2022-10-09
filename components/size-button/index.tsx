import * as Styles from "./styles";
import { SizeButtonProps } from "./types";

export function SizeButton(props: SizeButtonProps) {
  const { children } = props;

  return (
    <Styles.Container>{children}</Styles.Container>
  );
}
