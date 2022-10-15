import { MESSAGES } from "constants/validations";
import * as yup from "yup";

export const forgottenValidationSchema = yup.object({
  email: yup.string().email(MESSAGES.MAIL_VALID).required(MESSAGES.REQUIRED),
});

export const codeValidationSchema = yup.object({
  code: yup.string().required(MESSAGES.REQUIRED),
});

export const resetValidationSchema = yup.object({
  password: yup.string().required(MESSAGES.REQUIRED),
  passwordConfirmation: yup.string().required(MESSAGES.REQUIRED),
});
