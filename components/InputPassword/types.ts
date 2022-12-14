import { InputProps } from "../Input/types";

export type InputPasswordProps = Omit<
  InputProps,
  "type" | "onRightIconClick" | "onLeftIconClick"
>;
