import { stringify } from "qs";
import { Options } from "./types";

function parse <T>(path: string, options?: Options<T>) {
  const {
    fields, pagination, populate, filters,
  } = options || {};

  const sort = options?.sort?.map((value) => `${value.value}:${value.desk ? "desk" : "asc"}`);

  const query = {
    ...(fields && { fields }),
    ...(filters && ({ filters })),
    ...((sort && { sort })),
    ...((pagination && { pagination })),
    ...((populate && { populate })),
  };

  return `${path}?${stringify(query, { encodeValuesOnly: true })}`;
}

const strapiQuery = {
  parse,
};

export default strapiQuery;
