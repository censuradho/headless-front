import { SelectProps } from "components/select/types";

import {
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

type RootSelectProps = Pick<
  SelectProps,
  | "data"
  | "defaultValue"
  | "fullWidth"
  | "errorMessage"
  | "id"
  | "label"
  | "placeholder"
>;

export interface SelectFormProps extends RootSelectProps {
  register: UseFormRegister<any>;
  name: string;
  setValue: UseFormSetValue<any>;
  watch: UseFormWatch<any>;
}
