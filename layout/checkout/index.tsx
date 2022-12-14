import router from "next/router";
import { useEffect, useMemo, useState } from "react";

import { Box, Button, Typography } from "components";
import { checkoutStepsQuery } from "constants/checkout";
import { paths } from "constants/routes";
import { useCart } from "context";
import { getQueryFromUrl } from "utils";
import {
  CheckoutLayout,
  PersonalInfo,
  Address,
  OrderResume,
  PaymentMethod,
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
      <Box justifyContent="space-between" alignItems="center">
        <Typography uppercase variant="callout" as="h1">Checkout</Typography>
        <Button
          variant="letter"
          icon={{
            name: "arrowRoundBack",
          }}
          as="a"
          href={paths.home}
        >
          Continuar comprando

        </Button>
      </Box>
      <Box
        gap={2}
        flexDirection={{
          "@laptops-max": "column-reverse",
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
          <Box flex={1} fullWidth flexDirection="column" alignItems="flex-start" gap={2}>
            <Address isActive={query === checkoutStepsQuery.address} />
            <PaymentMethod
              isActive={query === checkoutStepsQuery.payment}
            />
          </Box>
        </Box>
        <OrderResume />
      </Box>
    </CheckoutLayout>
  );
}
