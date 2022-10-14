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
      "heroMobile",
      "langerieCarousel",
      "langerieCarousel.products",
      "langerieCarousel.products.image",
      "langerieCarousel.products.hoverImage",
      "langerieCarousel.products.defaultImage",
      "sectionBanner1",
      "lubrificantes",
      "lubrificantes.products",
      "lubrificantes.products.image",
      "lubrificantes.products.hoverImage",
      "lubrificantes.products.defaultImage",
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
