import { CSSProperties, memo, ReactNode } from "react";

type ViewStyle = Pick<CSSProperties,
  "alignItems"
  | "alignSelf"
  | "alignContent"
  | "justifyContent"
  | "flex"
  | "marginBottom"
  | "marginRight"
  | "marginLeft"
  | "marginTop"
  | "flexDirection"
  | "backgroundColor"
>

interface BoxProps extends ViewStyle {
  children: ReactNode;
  fullWidth?: boolean;
  gap?: number
}

export function Box(props: BoxProps) {
  const {
    children,
    fullWidth,
    gap,
    marginTop,
    ...otherProps
  } = props;

  return (
    <div style={{
      ...otherProps,
      display: "flex",
      width: fullWidth ? "100%" : "auto",
      ...(gap && { gap: `${gap}rem` }),
      ...(marginTop && { marginTop: `${marginTop}rem` }),
    }}
    >
      {children}
    </div>
  );
}
