import {
  Box, Button, Icon, Typography,
} from "components";
import { NavLink } from "components/common";
import { useAuth } from "context";
import Link from "next/link";
import { uuid } from "utils";
import * as Styles from "./styles";

const navigationPaths = {
  perfil: "/my-account",
  address: "/my-account/address",
};

const myAccountNavigation = [
  {
    label: "Dados pessoais",
    path: navigationPaths.perfil,
  },
  {
    label: "Endereço",
    path: navigationPaths.address,
  },

];

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
        <Button
          onClick={auth.signOut}
          variant="letter-underline"
        >
          Sair
        </Button>
      </Box>
    </Styles.Container>
  );
}
