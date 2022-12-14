/* eslint-disable no-plusplus */
import { cardFlags } from "constants/creditCard";
import { useRouter } from "next/router";
import { v4 } from "uuid";

export const isBrowser = () => typeof window !== "undefined";

export const resolvePath = (path: string, obj: Record<string, any>) => {
  let tempPath = path;

  Object.keys(obj).map((key) => {
    tempPath = tempPath.replace(`:${key}`, obj[key]);
  });

  return tempPath;
};

export const uuid = v4;

export function parseUrlQuery(value: ReturnType<typeof useRouter>["query"]) {
  if (typeof value !== "string") return null;
  return value;
}

export function getPriceProduct(price: number, discount?: number) {
  return discount ? price - discount : price;
}

/**
 * Calculates the Percentage of One Value Relative to Another
 */
export function getRelatedPercentage(total: number, value: number) {
  return ((value * 100) / total).toFixed(1);
}

export function toLocaleMonetize(value: number) {
  return value.toLocaleString("pt-BR", {
    currency: "BRL",
    style: "currency",
  });
}

export function setMask(value: string | number, pattern: string) {
  let i = 0;
  const valueInString = String(value).replace(/\D/g, "");

  // eslint-disable-next-line no-plusplus
  return pattern.replace(/#/g, () => valueInString[i++] || "");
}

export function getQueryFromUrl(key: string) {
  const result: any = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop as string),
  });

  return result?.[key] as any as string;
}

export function getCardFlag(cardnumber: string) {
  const cardNumberParsed = cardnumber.replace(/[^0-9]+/g, "");

  const cards = {
    [cardFlags.visa]: /^4[0-9]{12}(?:[0-9]{3})/,
    [cardFlags.mastercard]: /^5[1-5][0-9]{14}/,
    [cardFlags.diners]: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
    [cardFlags.amex]: /^3[47][0-9]{13}/,
    [cardFlags.discover]: /^6(?:011|5[0-9]{2})[0-9]{12}/,
    [cardFlags.hipercard]: /^(606282\d{10}(\d{3})?)|(3841\d{15})/,
    [cardFlags.elo]:
      /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})/,
    [cardFlags.jcb]: /^(?:2131|1800|35\d{3})\d{11}/,
    [cardFlags.aura]: /^(5078\d{2})(\d{2})(\d{11})$/,
  };

  const result = Object.entries(cards).filter(
    ([key, value]) => !!value.test(cardNumberParsed)
  );

  const [flag] = result[result.length - 1] || [];

  return flag;
}

export const validateCpf = (cpf: string) => {
  const parsedCpf = cpf.replace(/\D/g, "");

  if (parsedCpf == null) {
    return false;
  }
  if (parsedCpf.length !== 11) {
    return false;
  }
  if (
    parsedCpf === "00000000000" ||
    parsedCpf === "11111111111" ||
    parsedCpf === "22222222222" ||
    parsedCpf === "33333333333" ||
    parsedCpf === "44444444444" ||
    parsedCpf === "55555555555" ||
    parsedCpf === "66666666666" ||
    parsedCpf === "77777777777" ||
    parsedCpf === "88888888888" ||
    parsedCpf === "99999999999"
  ) {
    return false;
  }
  let numero: number = 0;
  let caracter: string = "";
  const numeros: string = "0123456789";
  let j: number = 10;
  let somatorio: number = 0;
  let resto: number = 0;
  let digito1: number = 0;
  let digito2: number = 0;
  let cpfAux: string = "";
  cpfAux = parsedCpf.substring(0, 9);
  for (let i: number = 0; i < 9; i++) {
    caracter = cpfAux.charAt(i);
    if (numeros.search(caracter) === -1) {
      return false;
    }
    numero = Number(caracter);
    somatorio += numero * j;
    j--;
  }
  resto = somatorio % 11;
  digito1 = 11 - resto;
  if (digito1 > 9) {
    digito1 = 0;
  }
  j = 11;
  somatorio = 0;
  cpfAux += digito1;
  for (let i: number = 0; i < 10; i++) {
    caracter = cpfAux.charAt(i);
    numero = Number(caracter);
    somatorio += numero * j;
    j--;
  }
  resto = somatorio % 11;
  digito2 = 11 - resto;
  if (digito2 > 9) {
    digito2 = 0;
  }
  cpfAux += digito2;
  if (parsedCpf !== cpfAux) {
    return false;
  }
  return true;
};

export function getInstallmentsSelectOptions(total: number) {
  return Array(12)
    .fill(1)
    .map((value, index) => index + 1)
    .map((value) => ({
      value: String(value),
      label: `${value}x ${toLocaleMonetize(total / value)}`,
    }));
}
