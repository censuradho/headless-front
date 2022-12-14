import { Container } from "components/common";
import { Footer } from "../footer";
import { Header } from "../header";

import { CheckoutLayoutProps } from "./types";

import * as Styles from "./styles";

export function CheckoutLayout(props: CheckoutLayoutProps) {
  const { children } = props;

  return (
    <Styles.Wrapper>
      <Header />
      <Container style={{ flex: 1 }}>{children}</Container>
      <Footer />
    </Styles.Wrapper>
  );
}
