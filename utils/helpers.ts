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
