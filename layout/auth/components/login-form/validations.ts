import { MESSAGES } from "constants/validations";
import * as yup from "yup";

export const loginValidationSchema = yup.object({
  email: yup.string().email(MESSAGES.MAIL_VALID).required(MESSAGES.REQUIRED),
  password: yup.string().required(MESSAGES.REQUIRED).min(3),
});
