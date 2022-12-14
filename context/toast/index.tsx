import {
  createContext, useContext, useEffect, useState,
} from "react";

import { Box, Typography } from "components";
import { cmsApi } from "services/rest/cms";
import { API_ERRORS } from "constants/validations";
import { AxiosError } from "axios";
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

  useEffect(() => {
    cmsApi.interceptors.response.use((response) => response, async (data: AxiosError) => {
      const { response } = data;

      const responseParsed = response as any;

      const isError = responseParsed?.data?.error
        && responseParsed.data.error.status >= 400
        && responseParsed.data.error.status < 500;

      if (isError) {
        const errorMessage = API_ERRORS?.[responseParsed?.data?.error?.message as keyof typeof API_ERRORS] || "";
        if (errorMessage) {
          onNotify({
            title: errorMessage,
          });
        }
      }
      Promise.reject(data);
    });
  }, []);

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
