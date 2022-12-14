import { isBrowser } from "utils";
import { TooltipProps } from "./types";
import * as Styles from "./styles";

export function Tooltip(props: TooltipProps) {
  const { children, message } = props;

  if (!isBrowser()) return null;

  const renderMessage = () => {
    if (!message) return null;
    return (
      <Styles.Portal>
        <Styles.Content sticky="always" sideOffset={5}>
          {message}
          <Styles.Arrow />
        </Styles.Content>
      </Styles.Portal>
    );
  };
  return (
    <Styles.Provider>
      <Styles.Root>
        <Styles.Trigger>{children}</Styles.Trigger>
        {renderMessage()}
      </Styles.Root>
    </Styles.Provider>
  );
}
