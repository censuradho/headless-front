import router from "next/router";

import {
  Box, Button, ButtonIcon, Icon, Input, Typography,
} from "components";
import { SelectForm } from "components/hook-form";
import {
  cpfMask, dateMask, phoneMask,
} from "constants/masks";

import { checkoutStepsPaths } from "constants/checkout";
import { usePerfil } from "hooks/entries";
import * as Styles from "./styles";
import { PersonalInfoProps } from "./types";

export function PersonalInfo(props: PersonalInfoProps) {
  const { isActive } = props;

  const {
    form,
    onSubmit,
    isSubmitting,
    defaultInfo,
  } = usePerfil();

  const {
    getValues,
    setValue,
    handleSubmit,
    register,
    watch,
    formState: {
      errors,
    },
  } = form;

  const renderInfo = () => {
    if (isActive) return null;
    const values = getValues();

    return (
      <Box flexDirection="column" gap={0.2}>
        <Typography>{values.email}</Typography>
        <Typography>{`${values.firstName} ${values.lastName}`}</Typography>
        <Typography>{values.phone}</Typography>
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
          disabled={!!defaultInfo}
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
            mask={dateMask}
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
            mask={cpfMask}
            placeholder="999.999.999-99"
            errorMessage={errors?.clientDocument?.message}
          />
          <Input
            id="phone"
            label="Telefone"
            fullWidth
            mask={phoneMask}
            value={watch("phone")}
            placeholder="11 99999-9999"
            register={register("phone")}
            errorMessage={errors?.phone?.message}
          />
        </Box>
        <Box marginTop={2}>
          <Button loading={isSubmitting} fullWidth>Ir para entrega</Button>
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
