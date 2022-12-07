import { withAuthorization } from "hoc";
import { CheckoutPageLayout } from "layout/checkout";

function Checkout() {
  return (
    <CheckoutPageLayout />
  );
}

export default withAuthorization(Checkout);
