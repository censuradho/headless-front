import { Box, Typography } from "components";
import { Container } from "components/common";
import { useAuth } from "context";
import { useRouter } from "next/router";
import { Address, Navigation, PersonalInfo } from "./components";
import * as Styles from "./styles";

export const myAccountNavigationPaths = {
  perfil: "/my-account/perfil",
  address: "/my-account/address",
};

export const myAccountNavigation = [
  {
    label: "Dados pessoais",
    path: myAccountNavigationPaths.perfil,
  },
  {
    label: "Endereço",
    path: myAccountNavigationPaths.address,
  },

];

export function MyAccountPageLayout() {
  const auth = useAuth();
  const { asPath } = useRouter();

  const mappedContent = {
    [myAccountNavigationPaths.perfil]: <PersonalInfo />,
    [myAccountNavigationPaths.address]: <Address />,
  };

  return (
    <Styles.Main>
      <Container>
        <Box flexDirection="column" gap={0.5} marginTop={2}>
          <Typography variant="sub-headline">Olá,</Typography>
          <Typography uppercase variant="title2">{auth.user?.username}</Typography>
        </Box>
        <Box marginTop={1} gap={3}>
          <Navigation />
          {mappedContent[asPath as keyof typeof mappedContent]}
        </Box>
      </Container>
    </Styles.Main>
  );
}
