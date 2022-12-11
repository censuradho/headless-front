import { CheckoutProvider } from "context";
import { withAuthorization } from "hoc";
import { CheckoutPageLayout } from "layout/checkout";

function Checkout() {
  return (
    <CheckoutProvider>
      <CheckoutPageLayout />
    </CheckoutProvider>
  );
}

export default withAuthorization(Checkout);
