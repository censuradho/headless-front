import { Box, Button, Icon } from "components";
import { NavLink } from "components/common";
import { useAuth } from "context";
import { myAccountNavigation } from "layout/my-account";
import { uuid } from "utils";
import * as Styles from "./styles";

export function Navigation() {
  const auth = useAuth();

  const renderLinks = myAccountNavigation.map((item) => (
    <Styles.Item key={uuid()}>
      <NavLink href={item.path}>
        {item.label}
        <Icon name="arrowForward" />
      </NavLink>
    </Styles.Item>
  ));

  return (
    <Styles.Container>
      <Styles.List>{renderLinks}</Styles.List>
      <Box marginTop={2}>
        <Button onClick={auth.signOut} variant="letter-underline">
          Sair
        </Button>
      </Box>
    </Styles.Container>
  );
}
