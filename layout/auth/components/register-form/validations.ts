import { MESSAGES } from "constants/validations";
import * as yup from "yup";

export const registerSchemaValidation = yup.object({
  email: yup.string().email(MESSAGES.MAIL_VALID).required(MESSAGES.REQUIRED),
  username: yup.string().required(MESSAGES.REQUIRED),
  lastName: yup.string().required(MESSAGES.REQUIRED),
  password: yup
    .string()
    .required(MESSAGES.REQUIRED)
    .min(6, MESSAGES.PASSWORD_MUST_BE_AT),
  rePassword: yup
    .string()
    .required(MESSAGES.REQUIRED)
    .oneOf([yup.ref("password"), null], MESSAGES.PASSWORD_MATCH),
});
