import { ResponseDataType } from "factors/types";

import { responseFactory } from "factors/meta";
import strapiQuery from "lib/strapi-query";
import { Home } from "layout/home/types";
import { homeFactory } from "factors/home";
import { cmsApi } from ".";

export async function getHome() {
  const query = strapiQuery.parse("/home", {
    populate: [
      "hero",
      "section1",
      "section1.products",
      "section1.products.image",
      "section1.products.hoverImage",
      "section1.products.defaultImage",
    ],
  });

  const response = await cmsApi.get<ResponseDataType<Home>>(query);

  const { data: home, ...rest } = response;

  const data = responseFactory({
    meta: home?.meta,
    data: homeFactory(home.data),
  });

  return {
    ...rest,
    data,
  };
}
