import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import router from "next/router";

import estadosOptions from "public/estados.json";

import {
  Box,
  Button,
  ButtonIcon,
  HiddenView,
  Icon,
  Input,
  Typography,
} from "components";

import useDebounce from "hooks/useDebounce";
import { useAddress } from "hooks/services";
import { SelectForm } from "components/hook-form";

import {
  Address as IAddress,
} from "types/checkout";
import { getAddressByUserId, postAddress, putAddress } from "services/rest/cms/checkout";
import { useAuth } from "context";
import { checkoutStepsPaths } from "constants/checkout";
import { cepMask } from "constants/masks";
import * as Styles from "./styles";
import { AddressFormData, AddressProps } from "./types";
import { addressSchemaValidation } from "./validations";

export function Address(props: AddressProps) {
  const { isActive } = props;
  const auth = useAuth();

  const [defaultAddress, setDefaultAddress] = useState<IAddress | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    setValue,
    watch,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<AddressFormData>({
    resolver: yupResolver(addressSchemaValidation),

  });
  const cep = useDebounce(watch("cep"), 1000);

  const { address } = useAddress(useDebounce(cep, 1000));

  const ufOptions = useMemo(
    () => estadosOptions.map((option) => ({
      value: option.value,
      label: option.value,
    })),
    [estadosOptions],
  );

  const getAddress = () => {
    if (defaultAddress) return defaultAddress.attributes;
    return getValues();
  };

  const onSubmit = async (data: AddressFormData) => {
    try {
      if (!auth?.user) return;
      setIsLoading(true);

      if (defaultAddress) {
        await putAddress(defaultAddress.id, {
          ...data,
          user: auth.user.id,
        });
        return;
      }
      await postAddress({
        ...data,
        user: auth.user.id,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetDefaultAddress = async (userId: number) => {
    try {
      const { data: addressResponse } = await getAddressByUserId(userId);

      setDefaultAddress(addressResponse.data);
    } catch (err) {}
  };

  useEffect(() => {
    if (!address) return;
    reset(address);
  }, [address]);

  useEffect(() => {
    if (!defaultAddress) return;
    reset(defaultAddress.attributes);
  }, [defaultAddress]);

  useEffect(() => {
    if (!auth?.user) return;

    handleGetDefaultAddress(auth?.user?.id);
  }, [auth?.user]);

  const renderForm = () => {
    if (!isActive) return null;

    return (
      <Styles.Form onSubmit={handleSubmit(onSubmit)}>
        <Box flexDirection="column" gap={1}>
          <Box flexDirection="column" alignItems="flex-start">
            <Input
              label="CEP"
              fullWidth
              autoFocus
              placeholder="Digite seu CEP"
              register={register("cep")}
              mask={cepMask}
            />
            <Styles.AnchorUnderline
              target="_blank"
              href="https://buscacepinter.correios.com.br/app/endereco/index.php?t"
            >
              Não sei meu CEP
            </Styles.AnchorUnderline>
          </Box>
          <HiddenView hidden={!cep}>
            <Box flexDirection="column" gap={0.5}>
              <Typography variant="sub-headline">Endereço de entrega</Typography>
              <Input
                id="logradouro"
                label="Endereço"
                register={register("logradouro")}
                fullWidth
                errorMessage={errors?.logradouro?.message}
              />
              <Box gap={1}>
                <Input
                  id="numero"
                  label="Número"
                  register={register("numero")}
                  fullWidth
                  errorMessage={errors?.numero?.message}
                />
                <Input
                  id="complemento"
                  label="Complemento"
                  register={register("complemento")}
                  fullWidth
                  errorMessage={errors?.complemento?.message}
                />
              </Box>
              <Input
                id="bairro"
                label="Bairro"
                register={register("bairro")}
                fullWidth
                errorMessage={errors?.bairro?.message}
              />
              <Box alignItems="flex-start" gap={1}>

                <Input
                  id="localidade"
                  label="Cidade"
                  register={register("localidade")}
                  fullWidth
                  errorMessage={errors?.localidade?.message}
                />
                <SelectForm
                  id="uf"
                  name="uf"
                  fullWidth
                  watch={watch}
                  register={register}
                  setValue={setValue}
                  label="UF"
                  data={ufOptions}
                />
              </Box>
              <Box marginTop={2}>
                <Button loading={isLoading} fullWidth>Salvar</Button>
              </Box>
            </Box>
          </HiddenView>
        </Box>
      </Styles.Form>
    );
  };

  const renderInfo = () => {
    if (isActive) return null;

    const currentAddress = getAddress();

    if (currentAddress?.cep) {
      return (
        <Box flexDirection="column" gap={0.2}>
          <Typography>{`${currentAddress.logradouro} ${currentAddress.numero}`}</Typography>
          <Typography>{`${currentAddress.bairro} - ${currentAddress.localidade} - ${currentAddress.uf}`}</Typography>
          <Typography>{currentAddress.cep}</Typography>
        </Box>
      );
    }

    return (
      <Typography>
        Aguardando o preenchimento dos dados
      </Typography>
    );
  };

  const renderEditButton = () => !isActive && (
    <ButtonIcon
      icon={{
        name: "edit",
      }}
      onClick={() => router.push(checkoutStepsPaths.address)}
    />
  );

  return (
    <Styles.Container>
      <Box flexDirection="column" gap={0.8}>
        <Box justifyContent="space-between">
          <Box gap={1} alignItems="center">
            <Icon name="outlineUser" />
            <Typography variant="sub-headline">Entrega</Typography>
          </Box>
          {renderEditButton()}
        </Box>
        {renderForm()}
        {renderInfo()}
      </Box>
    </Styles.Container>
  );
}
