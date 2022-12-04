import {
  Box, Button, Icon, Typography,
} from "components";
import Link from "next/link";
import { uuid } from "utils";
import * as Styles from "./styles";

const navigationPaths = {
  perfil: "/my-account/perfil",
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
  const renderLinks = myAccountNavigation.map((item) => (
    <Styles.Item key={uuid()}>
      <Link href={item.path}>
        <Typography as="a">
          {item.label}
          <Icon name="arrowForward" />
        </Typography>
      </Link>
    </Styles.Item>
  ));
  return (
    <Styles.Container>
      <Styles.List>{renderLinks}</Styles.List>
      <Box marginTop={2}>
        <Button variant="letter-underline">Sair</Button>
      </Box>
    </Styles.Container>
  );
}
