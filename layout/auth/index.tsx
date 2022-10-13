import {
  LoginForm,
  RegisterForm,
} from "./components";

import * as Styles from "./styles";

export function AuthLayout() {
  return (
    <Styles.Container>
      <Styles.FormView>
        <LoginForm />
        <Styles.VerticalLine />
        <RegisterForm />
      </Styles.FormView>
    </Styles.Container>
  );
}
