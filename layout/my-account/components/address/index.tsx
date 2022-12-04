import {
  Box, Button, HiddenView, Input, Typography,
} from "components";
import { SelectForm } from "components/hook-form";
import { cepMask } from "constants/masks";
import { useAddress } from "hooks/entries";

import estadosOptions from "public/estados.json";
import { useMemo, useState } from "react";
import * as Styles from "./styles";

export function Address() {
  const {
    form,
    getAddress,
    isLoading,
    onSubmit,
  } = useAddress();

  const address = getAddress();

  const [isEditing, setIsEditing] = useState(!!address);

  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: {
      errors,
    },
  } = form;

  const ufOptions = useMemo(
    () => estadosOptions.map((option) => ({
      value: option.value,
      label: option.value,
    })),
    [estadosOptions],
  );

  const cep = watch("cep");

  const renderForm = () => {
    if (!isEditing) return null;

    return (
      <Styles.Form onSubmit={handleSubmit(onSubmit)}>
        <Box fullWidth flexDirection="column" alignItems="flex-start">
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
      </Styles.Form>
    );
  };

  const renderEmptyAddressMessage = () => {
    if (isEditing) return null;

    return (
      <Box
        fullWidth
        flexDirection="column"
        gap={2}
        marginTop={1}
        alignItems="flex-start"
      >
        <Typography>
          Você não tem nenhum endereço cadastrado!
        </Typography>
        <Button onClick={() => setIsEditing(true)}>Adicionar endereço</Button>
      </Box>
    );
  };

  return (
    <Styles.Container>
      <Box marginBottom={1.5}>
        <Typography variant="sub-headline" as="h1">Dados pessoais</Typography>
      </Box>
      {renderForm()}
      {renderEmptyAddressMessage()}
    </Styles.Container>
  );
}
