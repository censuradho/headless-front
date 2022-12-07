import { ReactNode } from "react";

interface Options {
  label: string | ReactNode
  onSelect?: () => void
}

interface Group {
  options: Options[]
}

export interface DropDownMenuProps {
  items: Group[]
  trigger: ReactNode | string
}
