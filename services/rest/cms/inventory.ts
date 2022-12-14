import { inventoryFactory } from "factors/inventory";
import { responseFactory } from "factors/meta";
import { ResponseDataType } from "factors/types";
import strapiQuery from "lib/strapi-query";
import { Inventory } from "types/product";
import { Data } from "types/utils";
import { cmsApi } from ".";

export async function getInventories(filters: Record<string, any>) {
  const query = strapiQuery.parse("/inventories", {
    populate: ["product", "product.defaultImage", "size"],
    filters,
  });

  const response = await cmsApi.get<ResponseDataType<Inventory[]>>(query);

  const { data: inventory, ...rest } = response;

  const data = responseFactory({
    meta: inventory?.meta,
    data: inventory.data.map((value) => inventoryFactory(value)),
  });

  return {
    ...rest,
    data,
  };
}
