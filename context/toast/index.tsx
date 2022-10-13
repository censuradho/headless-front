import {
  createContext, useContext, useState,
} from "react";

import { ToastContextProps, Notify, ToastProviderProps } from "./types";

import * as Styles from "./styles";

const ToastContext = createContext<ToastContextProps>({
  // eslint-disable-next-line no-unused-vars
  onNotify: (options: Notify) => {},
});

const baseNotify: Notify = {
  title: "",
  description: "",
  action: "",
};

export function ToastProvider({ children }: ToastProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [notify, setNotify] = useState(baseNotify);

  const onNotify = (props: Notify) => {
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
        onNotify,
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

export const useToast = () => useContext(ToastContext);
