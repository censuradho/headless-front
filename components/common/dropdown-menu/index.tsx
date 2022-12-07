import { Fragment } from "react";
import { uuid } from "utils";
import * as Styles from "./styles";
import type { DropDownMenuProps } from "./types";

export function DropDownMenu(props: DropDownMenuProps) {
  const {
    items,
    trigger: triggerChild,
  } = props;

  const renderItems = items.map((item) => {
    const options = item.options.map((option) => (
      <Styles.Item key={uuid()} onSelect={option?.onSelect}>
        {option.label}
      </Styles.Item>
    ));

    return (
      <Fragment key={uuid()}>
        <Styles.Group>
          {options}
        </Styles.Group>
      </Fragment>
    );
  });

  return (
    <Styles.Root>
      <Styles.Trigger asChild>
        {triggerChild}
      </Styles.Trigger>
      <Styles.Content sideOffset={2} alignOffset={-5}>
        {renderItems}
        <Styles.Arrow />
      </Styles.Content>
    </Styles.Root>
  );
}
