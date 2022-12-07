import {
  Box, Button, Typography, Input,
} from "components";
import { SelectForm } from "components/hook-form";
import { usePerfil } from "hooks/entries";
import * as Styles from "./styles";

export function PersonalInfo() {
  const {
    form,
    onSubmit,
    isSubmitting,
  } = usePerfil();

  const {
    setValue,
    handleSubmit,
    register,
    watch,
    formState: {
      errors,
    },
  } = form;

  return (
    <Styles.Container>
      <Box marginBottom={1.5}>
        <Typography variant="sub-headline" as="h1">Dados pessoais</Typography>
      </Box>
      <Styles.Form onSubmit={handleSubmit(onSubmit)}>
        <Box justifyContent="space-between" gap={2}>
          <Input
            id="firstName"
            label="Nome"
            register={register("firstName")}
          />
          <Input
            id="lastName"
            label="Sobrenome"
            register={register("lastName")}
          />
        </Box>
        <Input
          id="email"
          label="Email"
          disabled
          register={register("email")}
          fullWidth
        />
        <Box justifyContent="space-between" gap={2} fullWidth>
          <Input
            id="clientDocument"
            label="CPF"
            register={register("clientDocument")}
            fullWidth
          />
          <SelectForm
            id="gender"
            name="gender"
            label="Gênero"
            watch={watch}
            fullWidth
            setValue={setValue}
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
            register={register}
            errorMessage={errors?.gender?.message}
          />
        </Box>
        <Box justifyContent="space-between" gap={2}>
          <Input
            id="birthDate"
            label="Data de nascimento"
            register={register("birthDate")}
          />
          <Input
            id="phone"
            label="Telefone"
            register={register("phone")}
          />
        </Box>
        <Button fullWidth loading={isSubmitting}>Salvar alterações</Button>
      </Styles.Form>
    </Styles.Container>
  );
}
