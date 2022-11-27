import { uuid } from "utils";
import { Icon } from "components/icon";
import { SelectProps } from "./types";

import * as Styles from "./styles";

export function Select(props: SelectProps) {
  const {
    data,
    placeholder,
    fullWidth,
    id,
    ...otherProps
  } = props;

  const renderOptions = data.map((option) => (
    <Styles.Item
      key={uuid()}
      value={String(option.value)}
    >
      <Styles.ItemText>
        {option.label}
      </Styles.ItemText>

    </Styles.Item>
  ));

  return (
    <Styles.Root {...otherProps}>
      <Styles.Trigger
        id={id}
        fullWidth={fullWidth}
      >
        <Styles.Value aria-label={otherProps.value} placeholder={placeholder} />
        <Icon
          name="arrowDown"
          size={10}
          color="body"
        />
      </Styles.Trigger>
      <Styles.Portal>
        <Styles.Content>
          <Styles.Viewport>
            <Styles.Group>{renderOptions}</Styles.Group>
          </Styles.Viewport>
        </Styles.Content>
      </Styles.Portal>
    </Styles.Root>
  );
}
