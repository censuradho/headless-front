import { Select } from "components";
import { useEffect } from "react";
import { SelectFormProps } from "./types";

export function SelectForm(props: SelectFormProps) {
  const {
    register,
    name,
    setValue,
    watch,
    ...otherProps
  } = props;

  const selectValue = watch(name);

  useEffect(() => {
    register(name);
  }, [register]);

  const handleChange = (value: string) => {
    setValue(name, value);
  };

  return (
    <Select
      onValueChange={handleChange}
      value={selectValue}
      defaultValue={selectValue}
      {...otherProps}
    />
  );
}
