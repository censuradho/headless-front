import { Container } from "components/common";

import { Header } from "./components";
import { CheckoutLayoutProps } from "./types";

export function CheckoutLayout(props: CheckoutLayoutProps) {
  const { children } = props;

  return (
    <>
      <Header />
      <Container>
        {children}
      </Container>
    </>
  );
}
