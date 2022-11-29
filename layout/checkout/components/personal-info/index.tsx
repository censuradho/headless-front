import {
  Box, Button, Icon, Input, Select, Typography,
} from "components";
import { useForm } from "react-hook-form";
import * as Styles from "./styles";
import { PersonalInfoFormData } from "./types";

export function PersonalInfo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfoFormData>();

  return (
    <Styles.Container>
      <Box flexDirection="column" gap={0.8}>
        <Box gap={1.2} alignItems="center">
          <Icon name="outlineUser" />
          <Typography variant="sub-headline">Informações pessoais</Typography>
        </Box>
        <Typography>Solicitamos apenas informações essenciais.</Typography>
        <Styles.Form>
          <Input
            label="E-mail"
            register={register("email")}
            errorMessage={errors?.email?.message}
          />
          <Box gap={1}>
            <Input
              label="Primeiro Nome"
              fullWidth
              register={register("firstName")}
              errorMessage={errors?.firstName?.message}
            />
            <Input
              label="Último nome"
              fullWidth
              register={register("lastName")}
              errorMessage={errors?.lastName?.message}
            />
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
              register={register("birthDate")}
              errorMessage={errors?.birthDate?.message}
            />
          </Box>
          <Box gap={1}>
            <Input
              label="CPF"
              fullWidth
              register={register("clientDocument")}
              errorMessage={errors?.clientDocument?.message}
            />
            <Input
              label="Telefone"
              fullWidth
              register={register("phone")}
              errorMessage={errors?.phone?.message}
            />
          </Box>
          <Box marginTop={2}>
            <Button fullWidth>Ir para entrega</Button>
          </Box>
        </Styles.Form>
      </Box>
    </Styles.Container>
  );
}
