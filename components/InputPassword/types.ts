import { InputProps } from "components/Input/types";

export type InputPasswordProps = Omit<
  InputProps,
  "type" | "onRightIconClick" | "onLeftIconClick"
>;
