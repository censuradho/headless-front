import { DialogProps as RadixDialogProps } from "@radix-ui/react-dialog";
import { ReactNode } from "react";

type RootDialogProps = Pick<RadixDialogProps,
  "onOpenChange"
  | "open"
>

export interface DialogProps extends RootDialogProps {
  children: ReactNode
}
