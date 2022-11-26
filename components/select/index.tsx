import { uuid } from "utils";
import { SelectProps } from "./types";

import * as Styles from "./styles";

export function Select(props: SelectProps) {
  const {
    data,
    placeholder,
    fullWidth,
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
    <Styles.Root>
      <Styles.Trigger fullWidth={fullWidth}>
        {placeholder && <Styles.Value placeholder="Select a fruit..." />}
      </Styles.Trigger>
      <Styles.Content>
        <Styles.Viewport>
          <Styles.Group>{renderOptions}</Styles.Group>
        </Styles.Viewport>
      </Styles.Content>
    </Styles.Root>
  );
}
