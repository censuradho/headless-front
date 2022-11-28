import { InputProps } from "components/input/types";

export type InputPasswordProps = Omit<InputProps,
  "type"
  | "onRightIconClick"
  | "onLeftIconClick"
>
