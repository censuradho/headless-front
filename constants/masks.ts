/* eslint-disable no-param-reassign */
import { KeyboardEvent } from "react";

export const PHONE_MASK = "(##) ####-#####";
export const CPF_MASK = "###.###.###-##";
export const DATE_MASK = "##/##/####";
export const CEP_MASK = "######-##";

export const cepMask = (event: any) => {
  const target = event.target as HTMLInputElement;
  target.maxLength = 9;

  let cep = target.value;

  cep = cep
    .replace(/\D/g, "");

  cep = cep.replace(/^(\d{5})(\d)/, "$1-$2");

  event.target.value = cep;

  return event;
};

export const cpfMask = (event: any) => {
  const target = event.target as HTMLInputElement;
  target.maxLength = 14;

  let cpf = target.value;

  cpf = cpf
    .replace(/\D/g, "")
    .replace(/^(\d{3})/, "$1.")
    .replace(/^(\d{3}).(\d{3})/, "$1.$2.")
    .replace(/^(\d{3}).(\d{3}).(\d{3})/, "$1.$2.$3-")
    .replace(/^(\d{3}).(\d{3}).(\d{3})-(\d)/, "$1.$2.$3-$4");

  event.target.value = cpf;

  return event;
};
