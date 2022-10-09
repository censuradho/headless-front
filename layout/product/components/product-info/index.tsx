import { Box, DiscountOff, Typography } from "components";
import { toLocaleDateString } from "lib/toLocaleDateString";
import { getPercentValue } from "utils";
import * as Styles from "./styles";

import { ProductInfoProps } from "./types";

export function ProductInfo(props: ProductInfoProps) {
  const {
    discount,
    installment,
    price,
    name,
  } = props;

  const renderValue = () => {
    if (!discount) return null;

    const value = discount ? getPercentValue(discount, price) : price;

    return (
      <Box alignItems="center" gap={1}>
        <DiscountOff>
          {discount}
          {" "}
          OFF
        </DiscountOff>
        <Typography variant="caption1-regular" lineThrough>{toLocaleDateString(value)}</Typography>
      </Box>
    );
  };

  const renderInstallment = () => {
    if (!installment) return null;

    const value = toLocaleDateString(price / installment);

    return (
      <Typography variant="footnote">
        Em até 3x
        {" "}
        <Typography variant="footnote" semiBold as="strong">
          {value}
          {" "}
        </Typography>
        <Typography uppercase>sem juros</Typography>
      </Typography>
    );
  };

  return (
    <Styles.Container>
      <Typography
        as="h1"
        variant={{
          "@initial": "footnote",
          "@laptops-min": "sub-headline",
        }}
      >
        {name}

      </Typography>
      <Box flexDirection="column" gap={0.5}>
        {renderValue()}
        <Box flexDirection="column" gap={1}>
          <Box alignItems="flex-end" gap={0.3}>
            <Typography variant="title2" semiBold as="strong">{toLocaleDateString(price)}</Typography>
            <Typography variant="caption2">à vista</Typography>
          </Box>
          {renderInstallment()}
        </Box>
      </Box>
    </Styles.Container>
  );
}
