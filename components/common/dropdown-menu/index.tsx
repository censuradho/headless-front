import { Fragment } from "react";
import { uuid } from "utils";
import * as Styles from "./styles";
import type { DropDownMenuProps } from "./types";

export function DropDownMenu(props: DropDownMenuProps) {
  const {
    items,
    trigger: triggerChild,
  } = props;

  // const renderItems = items.map((item) => {
  //   const options = item.options.map((option) => (
  //     <Styles.Item key={uuid()}>
  //       {option.label}
  //     </Styles.Item>
  //   ));

  //   const hasSeparator = options.length > 1;

  //   return (
  //     <Fragment key={uuid()}>
  //       <Styles.Group>
  //         {options}
  //       </Styles.Group>
  //       {hasSeparator && <Styles.Separator />}
  //     </Fragment>
  //   );
  // });

  return (
    <Styles.Root>
      <Styles.Trigger asChild={typeof triggerChild !== "string"}>
        {triggerChild}
      </Styles.Trigger>
      <Styles.Portal>
        <Styles.Content>
          <Styles.Group>
            <Styles.Item>
              teste
            </Styles.Item>
          </Styles.Group>
          {/* {renderItems} */}
          <Styles.Arrow />
        </Styles.Content>
      </Styles.Portal>
    </Styles.Root>
  );
}
