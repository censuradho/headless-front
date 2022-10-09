import { TooltipProps } from "./types";
import * as Styles from "./styles";

export function Tooltip(props: TooltipProps) {
  const { children, message } = props;

  return (
    <Styles.Provider>
      <Styles.Root>
        <Styles.Trigger>{children}</Styles.Trigger>
        <Styles.Portal>
          <Styles.Content sideOffset={5}>
            {message}
            <Styles.Arrow />
          </Styles.Content>
        </Styles.Portal>
      </Styles.Root>
    </Styles.Provider>
  );
}
