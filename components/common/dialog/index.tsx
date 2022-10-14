import { ButtonIcon } from "components/button-icon";
import * as Styles from "./styles";

import { DialogProps } from "./types";

export function Dialog(props: DialogProps) {
  const { onOpenChange, open } = props;

  return (
    <Styles.Root open={open} onOpenChange={onOpenChange}>
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
          <h1>Dialog</h1>
        </Styles.Content>
      </Styles.Portal>
    </Styles.Root>
  );
}
