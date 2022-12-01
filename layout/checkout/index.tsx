import { Box, Typography } from "components";
import { checkoutStepsQuery } from "constants/checkout";
import { paths } from "constants/routes";
import { useCart } from "context";
import router from "next/router";
import { useEffect, useMemo, useState } from "react";
import { getQueryFromUrl } from "utils";
import {
  CheckoutLayout,
  PersonalInfo,
  Address,
  OrderResume,
} from "./components";

export function CheckoutPageLayout() {
  const { cart } = useCart();

  const [query, setQuery] = useState(getQueryFromUrl("q") || "");

  const hasProduct = useMemo(
    () => Object
      .entries(cart)
      .map(([, value]) => value).length > 0,
    [cart],
  );

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setQuery(getQueryFromUrl("q"));
    });

    return () => router.events.off("routeChangeComplete", () => {
      setQuery(getQueryFromUrl("q"));
    });
  }, []);

  useEffect(() => {
    if (!hasProduct) router.push(paths.cart);
  }, [hasProduct]);

  if (!hasProduct) return null;

  return (
    <CheckoutLayout>
      <Typography uppercase variant="callout" as="h1">Checkout</Typography>
      <Box
        gap={2}
        flexDirection={{
          "@laptops-max": "column",
        }}
      >
        <Box
          flex={1}
          gap={2}
          alignItems="flex-start"
          flexDirection={{
            "@laptops-max": "column",
          }}
        >
          <PersonalInfo isActive={query === checkoutStepsQuery.profile || !query} />
          <Address isActive={query === checkoutStepsQuery.address} />
        </Box>
        <OrderResume />
      </Box>
    </CheckoutLayout>
  );
}
