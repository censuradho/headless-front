import { DialogProps } from "components/common/dialog/types";
import { ForgotPasswordPayload, ResetPasswordPayload } from "types/auth";

export interface RecoveryPasswordProps extends Omit<DialogProps, "children"> {}

export type ForgottenFormData = ForgotPasswordPayload

export type ResetFormData = Omit<ResetPasswordPayload, "code">

export interface CodeFormData {
  code: string
}
