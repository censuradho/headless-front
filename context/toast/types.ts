import { ReactNode } from "react";

export interface ToastProviderProps {
  children: ReactNode
}

export interface ToastProps {
  title: string
  action?: string
  description?: string
}
export interface ToastContextProps {
  toast: (props: ToastProps) => void
}
