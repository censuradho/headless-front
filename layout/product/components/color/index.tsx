import { Image, Typography } from "components";
import { useProductColor } from "hooks/services";
import { uuid } from "utils";

import { useMemo } from "react";
import * as Styles from "./styles";

import type { ColorProps } from "./types";

import { Loader } from "./loader";

export function Color(props: ColorProps) {
  const {
    product: {
      id,
    },
  } = props;

  const {
    data,
    isLoading,
  } = useProductColor(id);

  const renderColors = useMemo(() => data?.map((value) => {
    const productIds = value.attributes?.products?.data?.map?.((product) => product.id);
    const isSelected = productIds?.includes(id);

    return (
      <Styles.Item key={uuid()} selected={isSelected}>
        <Image
          width={value.attributes?.image?.data?.attributes?.width}
          src={value.attributes?.image?.data?.attributes?.url}
          height={value.attributes?.image?.data?.attributes?.height}
          alt={value.attributes?.image?.data?.attributes?.alternativeText}
          layout="responsive"
        />
      </Styles.Item>
    );
  }), [data]);

  return (
    <Styles.Container>
      <Typography
        as="h1"
        capitalize
        variant={{
          "@initial": "footnote",
          "@laptops-min": "sub-headline",
        }}
      >
        Cores
      </Typography>
      {renderColors}
    </Styles.Container>
  );
}
