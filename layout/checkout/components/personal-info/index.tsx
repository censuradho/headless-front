import router from "next/router";
import queryString from "querystring";

import {
  Box, Button, ButtonIcon, Icon, Input, Typography,
} from "components";
import { SelectForm } from "components/hook-form";
import { CPF_MASK, DATE_MASK, PHONE_MASK } from "constants/masks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useMemo, useState } from "react";
import { checkoutStepsPaths, checkoutStepsQuery } from "constants/checkout";
import { paths } from "constants/routes";
import * as Styles from "./styles";
import { PersonalInfoFormData, PersonalInfoProps } from "./types";
import { personalInfoSchemaValidations } from "./validations";

const mock = {
  email: "gustavoleiteoliveira800@gmail.com",
  firstName: "Gustavo",
  lastName: "Leite",
  birthDate: "12/02/1500",
  gender: "male",
  clientDocument: "999.999.999-99",
  phone: "(99) 99999-9999",
};
export function PersonalInfo(props: PersonalInfoProps) {
  const { isActive } = props;

  const {
    register,
    getValues,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfoFormData>({
    resolver: yupResolver(personalInfoSchemaValidations),
    defaultValues: mock,
  });

  const onSubmit = async (payload: PersonalInfoFormData) => {
    router.push(checkoutStepsPaths.address);
  };

  const renderInfo = () => {
    if (isActive) return null;
    const values = getValues();

    return (
      <Box flexDirection="column" gap={0.2}>
        <Typography color="placeholders">{values.email}</Typography>
        <Typography color="placeholders">{`${values.firstName} ${values.lastName}`}</Typography>
        <Typography color="placeholders">{values.phone}</Typography>
      </Box>
    );
  };

  const renderForm = () => {
    if (!isActive) return null;

    return (
      <Styles.Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="email"
          autoFocus
          label="E-mail"
          register={register("email")}
          errorMessage={errors?.email?.message}
        />
        <Box gap={1}>
          <Input
            id="firstName"
            label="Primeiro Nome"
            fullWidth
            register={register("firstName")}
            errorMessage={errors?.firstName?.message}
          />
          <Input
            id="lastName"
            label="Último nome"
            fullWidth
            register={register("lastName")}
            errorMessage={errors?.lastName?.message}
          />
        </Box>
        <Box gap={1} fullWidth>
          <SelectForm
            id="gender"
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
            id="birthDate"
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
            id="clientDocument"
            label="CPF"
            fullWidth
            register={register("clientDocument")}
            value={watch("clientDocument")}
            mask={CPF_MASK}
            placeholder="999.999.999-99"
            errorMessage={errors?.clientDocument?.message}
          />
          <Input
            id="phone"
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
    );
  };

  const renderEditButton = () => !isActive && (
    <ButtonIcon
      icon={{
        name: "edit",
      }}
      onClick={() => router.push(checkoutStepsPaths.profile)}
    />
  );

  return (
    <Styles.Container>
      <Box flexDirection="column" gap={0.8}>
        <Box justifyContent="space-between">
          <Box gap={1} alignItems="center">
            <Icon name="outlineUser" />
            <Typography variant="sub-headline">Informações pessoais</Typography>
          </Box>
          {renderEditButton()}
        </Box>
        <Typography>Solicitamos apenas informações essenciais.</Typography>
        {renderForm()}
        {renderInfo()}
      </Box>
    </Styles.Container>
  );
}
