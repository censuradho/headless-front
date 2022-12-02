import router from "next/router";

import {
  Box, Button, ButtonIcon, Icon, Input, Typography,
} from "components";
import { SelectForm } from "components/hook-form";
import {
  cpfMask, CPF_MASK, dateMask, DATE_MASK, phoneMask, PHONE_MASK,
} from "constants/masks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useEffect, useState } from "react";
import { checkoutStepsPaths } from "constants/checkout";
import { Perfil } from "types/checkout";
import { getPerfil, postPerfil, putPerfil } from "services/rest/cms/checkout";
import { useAuth } from "context";
import * as Styles from "./styles";
import { PersonalInfoFormData, PersonalInfoProps } from "./types";
import { personalInfoSchemaValidations } from "./validations";

export function PersonalInfo(props: PersonalInfoProps) {
  const { isActive } = props;
  const auth = useAuth();

  const {
    register,
    getValues,
    setValue,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PersonalInfoFormData>({
    resolver: yupResolver(personalInfoSchemaValidations),
  });

  const [defaultInfo, setDefaultInfo] = useState<Perfil | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (payload: PersonalInfoFormData) => {
    try {
      setIsLoading(true);
      if (!auth?.user) return;

      if (defaultInfo) {
        await putPerfil(defaultInfo.id, {
          ...payload,
        });
        router.push(checkoutStepsPaths.address);
        return;
      }
      await postPerfil({
        ...payload,
      });

      router.push(checkoutStepsPaths.address);
    } finally {
      setIsLoading(false);
    }
  };

  const getDefaultPerfil = async () => {
    try {
      const { data: personalInfo } = await getPerfil();

      setDefaultInfo(personalInfo.data);
    } catch (err) {}
  };

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
          <Button loading={isLoading} fullWidth>Ir para entrega</Button>
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

  useEffect(() => {
    if (!defaultInfo) return;
    reset({
      ...defaultInfo.attributes,
      email: auth?.user?.email,
    });
  }, [defaultInfo]);

  useEffect(() => {
    if (!auth?.user) return;
    getDefaultPerfil();
  }, [auth?.user]);

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
