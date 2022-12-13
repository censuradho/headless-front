import { ButtonIcon } from "components/button-icon";
import * as Styles from "./styles";

import { DialogProps } from "./types";

export function Dialog(props: DialogProps) {
  const { onOpenChange, open, children } = props;

  return (
    <Styles.Root modal open={open} onOpenChange={onOpenChange}>
      <Styles.Portal>
        <Styles.Overlay />
        <Styles.Content>
          <Styles.Close asChild>
            <ButtonIcon
              icon={{
                name: "close",
              }}
            />
          </Styles.Close>
          {children}
        </Styles.Content>
      </Styles.Portal>
    </Styles.Root>
  );
}
