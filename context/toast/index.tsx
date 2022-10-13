import {
  createContext, useContext, useState,
} from "react";

import { Box, Typography } from "components";
import { cmsApi } from "services/rest/cms";
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

  const handleClose = () => {
    setIsOpen(false);
    setNotify(baseNotify);
  };

  const renderAction = () => {
    if (!notify.action) return null;

    return <Styles.Action altText={notify.action}>{notify.action}</Styles.Action>;
  };

  cmsApi.interceptors.response.use((response) => response, (error) => {
    if (error.response.status === 400) {
      onNotify({
        title: "Ocorreu algum erro no servidor, tente novamente",
      });
    }

    return error;
  });

  return (
    <ToastContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        onNotify,
      }}
    >
      <Styles.Provider swipeDirection="right">
        {children}
        <Styles.Root
          open={isOpen}
          onOpenChange={handleClose}
          onEscapeKeyDown={handleClose}
        >
          <Styles.Title asChild>
            <Typography variant="sub-headline">{notify.title}</Typography>
          </Styles.Title>
          <Box fullWidth justifyContent="space-between" gap={1}>
            <Styles.Description>{notify.description}</Styles.Description>
            {renderAction()}
          </Box>
        </Styles.Root>
        <Styles.Viewport />
      </Styles.Provider>
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
