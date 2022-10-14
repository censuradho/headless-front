import { DialogProps as RadixDialogProps } from "@radix-ui/react-dialog";

type RootDialogProps = Pick<RadixDialogProps,
  "onOpenChange"
  | "open"
>

export interface DialogProps extends RootDialogProps {

}
