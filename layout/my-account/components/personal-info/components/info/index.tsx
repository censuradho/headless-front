import { Box } from "components";
import { useState } from "react";
import { uuid } from "utils";
import { InfoProps } from "./types";

import * as Styles from "./styles";

export function Info(props: InfoProps) {
  const { label, value: defaultValue, id } = props;
  const [value, setValue] = useState(defaultValue);

  return (
    <Box gap={0.5} flexDirection="column" fullWidth>
      <Styles.Label htmlFor={id}>{label}</Styles.Label>
      <Styles.Input value={value} id={id} />
    </Box>
  );
}
