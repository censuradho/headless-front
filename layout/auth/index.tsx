import { LoginForm } from "./components";
import * as Styles from "./styles";

export function AuthLayout() {
  return (
    <Styles.Container>
      <Styles.FormView>
        <LoginForm />
        <Styles.VerticalLine />
        <LoginForm />
      </Styles.FormView>
    </Styles.Container>
  );
}
