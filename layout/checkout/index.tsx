import { Box, Typography } from "components";
import { checkoutStepsQuery } from "constants/checkout";
import router from "next/router";
import { useEffect, useState } from "react";
import { getQueryFromUrl } from "utils";
import {
  CheckoutLayout,
  PersonalInfo,
  Address,
} from "./components";

export function CheckoutPageLayout() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    router.events.on("routeChangeComplete", (url, options) => {
      setQuery(getQueryFromUrl("q"));
    });
  }, []);

  return (
    <CheckoutLayout>
      <Typography uppercase variant="callout" as="h1">Checkout</Typography>

      <Box flex={1} gap={2} alignItems="flex-start">
        <PersonalInfo isActive={query === checkoutStepsQuery.profile || !query} />
        <Address isActive={query === checkoutStepsQuery.address} />
      </Box>
    </CheckoutLayout>
  );
}
