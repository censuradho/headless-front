import { Header } from "components";

import {
  LoginForm,
  RegisterForm,
} from "./components";

import * as Styles from "./styles";

export function AuthLayout() {
  return (
    <>
      <Header />
      <Styles.Container>
        <Styles.FormView>
          <LoginForm />
          <Styles.VerticalLine />
          <RegisterForm />
        </Styles.FormView>
      </Styles.Container>
    </>
  );
}
