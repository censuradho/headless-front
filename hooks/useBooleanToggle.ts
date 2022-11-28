import { useState } from "react";

export function useBooleanToggle(initialState = false): [boolean, () => void] {
  const [state, setState] = useState(initialState);

  const toggleState = () => {
    setState((prevState) => !prevState);
  };

  return [state, toggleState];
}
