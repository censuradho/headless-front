import { Input } from "components";
import { InputProps } from "components/input/types";

export function InputPassword(props: Omit<InputProps, "type">) {
  return (
    <Input
      {...props}
    />
  );
}
