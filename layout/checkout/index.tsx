import { Box, Typography } from "components";
import {
  CheckoutLayout,
  PersonalInfo,
  Address,
} from "./components";

export function CheckoutPageLayout() {
  return (
    <CheckoutLayout>
      <Typography uppercase variant="callout" as="h1">Checkout</Typography>

      <Box flex={1} gap={2} alignItems="flex-start">
        <PersonalInfo />
        <Address />
      </Box>
    </CheckoutLayout>
  );
}
