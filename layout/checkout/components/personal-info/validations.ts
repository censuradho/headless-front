import { MESSAGES } from "constants/validations";
import * as y from "yup";

export const personalInfoSchemaValidations = y.object({
  email: y.string().email(MESSAGES.MAIL_VALID).required(MESSAGES.REQUIRED),
  firstName: y.string().required(MESSAGES.REQUIRED),
  lastName: y.string().required(MESSAGES.REQUIRED),
  gender: y.string().required(MESSAGES.REQUIRED),
  birthDate: y
    .string()
    .required(MESSAGES.REQUIRED)
    .length(10, MESSAGES.INCORRECT_FORMAT),
  clientDocument: y.string().required(MESSAGES.REQUIRED).length(13, MESSAGES.INCORRECT_FORMAT),
  phone: y.string().required(MESSAGES.REQUIRED).length(15, MESSAGES.INCORRECT_FORMAT),
});
