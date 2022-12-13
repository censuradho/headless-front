import { Box, Discount, Typography } from "components";
import { toLocaleDateString } from "lib/toLocaleDateString";
import { getPriceProduct, getRelatedPercentage } from "utils";
import * as Styles from "./styles";

import { ProductInfoProps } from "./types";

export function ProductInfo(props: ProductInfoProps) {
  const { installment, price, name } = props;

  const discount = 0;
  const priceWithDiscount = discount ? getPriceProduct(price, discount) : price;

  const relativePercentage = discount
    ? getRelatedPercentage(price, discount)
    : price;

  const renderValue = () => {
    if (!discount) return null;

    return (
      <Box alignItems="center" gap={1}>
        <Discount>{`${relativePercentage}% OFF`}</Discount>
        <Typography variant="caption1" lineThrough>
          {toLocaleDateString(price)}
        </Typography>
      </Box>
    );
  };

  const renderInstallment = () => {
    if (!installment) return null;

    const value = toLocaleDateString(price / installment);

    return (
      <Typography variant="footnote">
        Em até 3x{" "}
        <Typography variant="footnote" semiBold as="strong">
          {value}{" "}
        </Typography>
        <Typography uppercase>sem juros</Typography>
      </Typography>
    );
  };

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
        {name}
      </Typography>
      <Box flexDirection="column" gap={0.5}>
        {renderValue()}
        <Box flexDirection="column" gap={1}>
          <Box alignItems="flex-end" gap={0.3}>
            <Typography variant="title2" semiBold as="strong">
              {toLocaleDateString(priceWithDiscount)}
            </Typography>
            <Typography variant="caption2">à vista</Typography>
          </Box>
          {renderInstallment()}
        </Box>
      </Box>
    </Styles.Container>
  );
}
