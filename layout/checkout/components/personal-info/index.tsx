import {
  Box, Button, Icon, Input, Typography,
} from "components";
import { SelectForm } from "components/hook-form";
import { CPF_MASK, DATE_MASK, PHONE_MASK } from "constants/masks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as Styles from "./styles";
import { PersonalInfoFormData } from "./types";
import { personalInfoSchemaValidations } from "./validations";

export function PersonalInfo() {
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfoFormData>({
    resolver: yupResolver(personalInfoSchemaValidations),
  });

  const onSubmit = async (payload: PersonalInfoFormData) => {
    console.log(payload);
  };

  return (
    <Styles.Container>
      <Box flexDirection="column" gap={0.8}>
        <Box gap={1} alignItems="center">
          <Icon name="outlineUser" />
          <Typography variant="sub-headline">Informações pessoais</Typography>
        </Box>
        <Typography>Solicitamos apenas informações essenciais.</Typography>
        <Styles.Form onSubmit={handleSubmit(onSubmit)}>
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
            <SelectForm
              name="gender"
              label="Gênero"
              fullWidth
              watch={watch}
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
            <Input
              label="Data de nascimento"
              fullWidth
              value={watch("birthDate")}
              mask={DATE_MASK}
              placeholder="dd/mm/yyyy"
              register={register("birthDate")}
              errorMessage={errors?.birthDate?.message}
            />
          </Box>
          <Box gap={1}>
            <Input
              label="CPF"
              fullWidth
              register={register("clientDocument")}
              value={watch("clientDocument")}
              mask={CPF_MASK}
              placeholder="999.999.999-99"
              errorMessage={errors?.clientDocument?.message}
            />
            <Input
              label="Telefone"
              fullWidth
              mask={PHONE_MASK}
              value={watch("phone")}
              placeholder="11 99999-9999"
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
