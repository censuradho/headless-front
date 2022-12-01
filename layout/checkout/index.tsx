import { Box, Typography } from "components";
import { checkoutStepsQuery } from "constants/checkout";
import router from "next/router";
import { useEffect, useState } from "react";
import { getQueryFromUrl } from "utils";
import {
  CheckoutLayout,
  PersonalInfo,
  Address,
  OrderResume,
} from "./components";

export function CheckoutPageLayout() {
  const [query, setQuery] = useState(getQueryFromUrl("q") || "");

  useEffect(() => {
    router.events.on("routeChangeComplete", (url, options) => {
      setQuery(getQueryFromUrl("q"));
    });
  }, []);

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
