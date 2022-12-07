import { MESSAGES } from "constants/validations";
import * as y from "yup";

export const addressSchemaValidation = y.object({
  logradouro: y.string().required(MESSAGES.REQUIRED),
  cep: y.string().required(MESSAGES.REQUIRED),
  localidade: y.string().required(MESSAGES.REQUIRED),
  bairro: y.string().required(MESSAGES.REQUIRED),
  numero: y.string().required(MESSAGES.REQUIRED),
  uf: y.string().required(MESSAGES.REQUIRED),
});
