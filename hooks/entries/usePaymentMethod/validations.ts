import { MESSAGES } from "constants/validations";
import * as y from "yup";

export const PaymentMethodSchemaValidation = y.object({
  installments: y.string().required(MESSAGES.REQUIRED),
  creditCardNumber: y.string().required(MESSAGES.REQUIRED),
  holderName: y.string().required(MESSAGES.REQUIRED),
  expMonth: y.string().required(MESSAGES.REQUIRED),
  expYear: y.string().required(MESSAGES.REQUIRED),
  securityCode: y.string().required(MESSAGES.REQUIRED),
  clientDocument: y.string().required(MESSAGES.REQUIRED),
});
