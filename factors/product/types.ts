import { getProduct } from "services/rest/cms";

export type ProductProp = Awaited<ReturnType<typeof getProduct>>["data"]
