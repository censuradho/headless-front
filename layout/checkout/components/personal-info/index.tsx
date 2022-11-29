import {
  Box, Button, Icon, Input, Select, Typography,
} from "components";
import * as Styles from "./styles";

export function PersonalInfo() {
  return (
    <Styles.Container>
      <Box flexDirection="column" gap={0.8}>
        <Box gap={1.2} alignItems="center">
          <Icon name="outlineUser" />
          <Typography variant="sub-headline">Informações pessoais</Typography>
        </Box>
        <Typography>Solicitamos apenas informações essenciais.</Typography>
        <Styles.Form>
          <Input label="E-mail" />
          <Box gap={1}>
            <Input label="Primeiro Nome" fullWidth />
            <Input label="Último nome" fullWidth />
          </Box>
          <Box gap={1} fullWidth>
            <Select
              label="Gênero"
              fullWidth
              data={[
                {
                  label: "Masculino",
                  value: "male",
                },
                {
                  label: "Feminino",
                  value: "female",
                },
              ]}
            />
            <Input
              label="Data de nascimento"
              fullWidth
            />
          </Box>
          <Box gap={1}>
            <Input
              label="CPF"
              fullWidth
            />
            <Input
              label="Telefone"
              fullWidth
            />
          </Box>
          <Button fullWidth>Ir para entrega</Button>
        </Styles.Form>
      </Box>
    </Styles.Container>
  );
}
