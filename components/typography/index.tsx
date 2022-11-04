import { memo } from "react";
import { theme } from "stitches.config";

import * as Styles from "./styles";
import { TypographyProps } from "./types";

export const Typography = memo((props: TypographyProps) => {
  const { children, color, ...otherProps } = props;

  return (
    <Styles.Typography
      style={{ color: theme.colors[color || "title"].value }}
      {...otherProps}
    >
      {children}
    </Styles.Typography>
  );
});
