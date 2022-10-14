import { Button } from "components";

import { useAuth } from "context";

import * as Styles from "./styles";

export function MyAccountButton() {
  const auth = useAuth();

  const label = auth?.user ? `Olá, \n ${auth.user?.username}` : "Minha conta";

  return (
    <Button
      variant="letter"
      icon={{ name: "outlineUser" }}
    >
      <Styles.Label>
        {label}
      </Styles.Label>
    </Button>
  );
}
