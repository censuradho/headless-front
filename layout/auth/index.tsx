import { Button, Header, HiddenView } from "components";
import { Dialog } from "components/common";
import { useBooleanToggle } from "hooks";
import { isBrowser } from "utils";

import {
  LoginForm,
  RegisterForm,
} from "./components";

import * as Styles from "./styles";

export function AuthLayout() {
  const [isRegister, toggleIsRegister] = useBooleanToggle(false);

  const renderToggleModeButton = () => {
    const label = isRegister ? "Login" : "Cadastre-se";

    return (
      <>
        <HiddenView breakpoint="table-min">
          <Styles.HorizontalLine />
        </HiddenView>
        <HiddenView breakpoint="table-min">
          <Button onClick={toggleIsRegister} fullWidth>{label}</Button>
        </HiddenView>
      </>
    );
  };

  const renderLoginFormMobile = () => {
    if (isRegister) return null;

    return (
      <HiddenView breakpoint="table-min">
        <LoginForm />
      </HiddenView>
    );
  };

  const renderRegisterFormMobile = () => {
    if (!isRegister) return null;

    return (
      <HiddenView breakpoint="table-min">
        <RegisterForm />
      </HiddenView>
    );
  };

  return (
    <>
      <Header />
      <Dialog />
      <Styles.Container>
        <Styles.FormView>
          {renderLoginFormMobile()}
          <HiddenView fullWidth breakpoint="table-max">
            <LoginForm />
          </HiddenView>
          <Styles.VerticalLine />
          <HiddenView fullWidth breakpoint="table-max">
            <RegisterForm />
          </HiddenView>
          {renderRegisterFormMobile()}
          {renderToggleModeButton()}
        </Styles.FormView>
      </Styles.Container>
    </>
  );
}
