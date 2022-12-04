import { Box, Button, Typography } from "components";
import { Info } from "./components";
import * as Styles from "./styles";

export function PersonalInfo() {
  return (
    <Styles.Container>
      <Box marginBottom={1.5}>
        <Typography variant="sub-headline" as="h1">Dados pessoais</Typography>
      </Box>
      <Styles.Form>
        <Box justifyContent="space-between" gap={2}>
          <Info
            id="firstName"
            label="Nome"
            value="Gustavo"
          />
          <Info
            id="lastName"
            label="Sobrenome"
            value="Leite Oliveira"
          />
        </Box>
        <Info
          id="email"
          label="Email"
          value="teste@teste.com"
        />

        <Box justifyContent="space-between" gap={2}>
          <Info
            id="birthDate"
            label="Data de nascimento"
            value="dd/mm/yyyy"
          />
          <Info
            id="phone"
            label="Telefone"
            value="(99) 9 9999-9999"
          />
        </Box>
        <Button>Salvar alterações</Button>
      </Styles.Form>
    </Styles.Container>
  );
}
