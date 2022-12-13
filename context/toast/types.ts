import { ReactNode } from "react";

export interface ToastProviderProps {
  children: ReactNode;
}

export interface Notify {
  title: string;
  action?: string;
  description?: string;
}
export interface ToastContextProps {
  onNotify: (props: Notify) => void;
}
