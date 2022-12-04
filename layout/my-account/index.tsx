import { Box, Typography } from "components";
import { Container } from "components/common";
import { useAuth } from "context";
import { Navigation } from "./components";
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

export function MyAccountPageLayout() {
  const auth = useAuth();

  return (
    <Styles.Main>
      <Container>
        <Box flexDirection="column" gap={0.5} marginTop={2}>
          <Typography variant="sub-headline">Olá,</Typography>
          <Typography uppercase variant="title2">{auth.user?.username}</Typography>
        </Box>
        <Box marginTop={1}>
          <Navigation />
        </Box>
      </Container>
    </Styles.Main>
  );
}
