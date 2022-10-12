import { Image, Typography } from "components";
import { useProductColor } from "hooks/services";
import { uuid } from "utils";

import * as Styles from "./styles";

import type { ColorProps } from "./types";

export function Color(props: ColorProps) {
  const {
    product: {
      id,
    },
  } = props;

  const {
    data,
    error,
    isLoading,
  } = useProductColor(id);

  const renderColors = data?.map((value) => (
    <Styles.Item key={uuid()}>
      <Image
        width={value.attributes?.image?.data?.attributes?.width}
        src={value.attributes?.image?.data?.attributes?.url}
        height={value.attributes?.image?.data?.attributes?.height}
        alt={value.attributes?.image?.data?.attributes?.alternativeText}
        layout="responsive"
      />
    </Styles.Item>
  ));

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
