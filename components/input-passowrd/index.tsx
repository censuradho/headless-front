import { useState } from "react";

import { Input } from "components";

import { InputPasswordProps } from "./types";

export function InputPassword(props: InputPasswordProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Input
      {...props}
      onRightIconClick={() => setIsVisible((prevState) => !prevState)}
      type={!isVisible ? "password" : "text"}
      leftIcon={{
        name: "key",
      }}
      rightIcon={{
        name: isVisible ? "eyeOff" : "eye",
      }}
    />
  );
}
