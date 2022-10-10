import { MESSAGES } from "constants/validations";
import * as yup from "yup";

export const notifyMeValidationSchema = yup.object({
  name: yup.string().required(MESSAGES.REQUIRED),
  email: yup.string().email(MESSAGES.MAIL_VALID).required(MESSAGES.REQUIRED),
});
