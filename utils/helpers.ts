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
