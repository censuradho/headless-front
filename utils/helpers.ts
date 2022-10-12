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

export function getPercentValue(percent: number, value: number) {
  return value - ((percent / 100) * value);
}

export const uuid = v4;

export function parseUrlQuery(value: ReturnType<typeof useRouter>["query"]) {
  if (typeof value !== "string") return null;
  return value;
}

export function getPriceProduct(price: number, discount?: number) {
  return discount ? getPercentValue(discount, price) : price;
}
