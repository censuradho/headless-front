import { createContext, useRef, useState } from "react";

import { ToastContextProps, ToastProps, ToastProviderProps } from "./types";

import * as Styles from "./styles";

const ToastContext = createContext<ToastContextProps>(null!);

const baseNotify: ToastProps = {
  title: "",
  description: "",
  action: "",
};

export function ToastProvider({ children }: ToastProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [notify, setNotify] = useState(baseNotify);

  const toast = (props: ToastProps) => {
    setNotify(props);
    setIsOpen(true);
  };

  const renderAction = () => {
    if (!notify.action) return null;

    return <Styles.Action altText={notify.action}>{notify.action}</Styles.Action>;
  };

  return (
    <ToastContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        toast,
      }}
    >
      <Styles.Provider>
        {children}
        <Styles.Root open={isOpen}>
          <Styles.Title>{notify.title}</Styles.Title>
          <Styles.Description>{notify.description}</Styles.Description>
          {renderAction()}
        </Styles.Root>
      </Styles.Provider>
    </ToastContext.Provider>
  );
}
