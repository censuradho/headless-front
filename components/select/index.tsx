import { uuid } from "utils";
import { Icon } from "components/icon";
import { Box } from "components/box";
import { SelectProps } from "./types";

import * as Styles from "./styles";

export function Select(props: SelectProps) {
  const {
    data,
    placeholder,
    fullWidth,
    label,
    errorMessage,
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

  const renderLabel = () => {
    if (!label) return null;
    return (
      <Styles.Label
        htmlFor={id}
      >
        {label}
      </Styles.Label>
    );
  };

  return (
    <Box
      gap={0.5}
      fullWidth={fullWidth}
      flexDirection="column"
    >
      {renderLabel()}
      <Styles.Root {...otherProps}>
        <Styles.Trigger
          id={id}
        >
          <Styles.Value aria-label={otherProps.value} placeholder={placeholder} />
          <Icon
            name="arrowDown"
            size={10}
            color="body"
          />
        </Styles.Trigger>
        <Styles.Content>
          <Styles.Viewport>
            <Styles.Group>{renderOptions}</Styles.Group>
          </Styles.Viewport>
        </Styles.Content>
      </Styles.Root>
    </Box>
  );
}
