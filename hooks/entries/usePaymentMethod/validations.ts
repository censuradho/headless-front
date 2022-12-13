import { MESSAGES } from "constants/validations";
import { getCardFlag, validateCpf } from "utils";
import * as y from "yup";

export const PaymentMethodSchemaValidation = y.object({
  installments: y.string().required(MESSAGES.REQUIRED),
  creditCardNumber: y
    .string()
    .required(MESSAGES.REQUIRED)
    .test("len", MESSAGES.INCORRECT_FORMAT, (val) => !!getCardFlag(val || "")),
  holderName: y.string().required(MESSAGES.REQUIRED),
  expMonth: y.string().required(MESSAGES.REQUIRED),
  expYear: y.string().required(MESSAGES.REQUIRED),
  securityCode: y.string().required(MESSAGES.REQUIRED),
  clientDocument: y
    .string()
    .required(MESSAGES.REQUIRED)
    .test("cpf", MESSAGES.INCORRECT_FORMAT, (val) => validateCpf(val || "")),
});
