import { Typography } from "components";
import { CheckoutLayout, PersonalInfo } from "./components";

export function CheckoutPageLayout() {
  return (
    <CheckoutLayout>
      <Typography uppercase variant="callout" as="h1">Checkout</Typography>

      <PersonalInfo />
    </CheckoutLayout>
  );
}
