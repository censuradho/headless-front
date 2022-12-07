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
    [cardFlags.elo]: /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})/,
    [cardFlags.jcb]: /^(?:2131|1800|35\d{3})\d{11}/,
    [cardFlags.aura]: /^(5078\d{2})(\d{2})(\d{11})$/,
  };

  const [
    [flag],
  ] = Object.entries(cards).filter(([key, value]) => (!!value.test(cardNumberParsed)));

  return flag;
}
