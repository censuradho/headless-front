import { ReactNode } from "react";

interface Options {
  label: string
}

interface Group {
  options: Options[]
}

export interface DropDownMenuProps {
  items: Group[]
  trigger: ReactNode | string
}
