import { ReactNode } from "react";

import { KeyBreakpoints } from "constants/breakpoints";

export interface HiddenViewProps {
  breakpoint?: KeyBreakpoints,
  children?: ReactNode
  fullWidth?: boolean
}
