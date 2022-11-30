import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  Box,
  Button,
  Icon,
  Input,
  Typography,
} from "components";

import * as Styles from "./styles";
import { AddressFormData } from "./types";

export function Address() {
  const [isEditing, setIsEditing] = useState(true);

  const {
    register,
    getValues,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressFormData>();

  const cep = watch("cep");

  const renderForm = () => {
    if (!isEditing) return null;

    return (
      <Styles.Form>
        <Box flexDirection="column" alignItems="flex-start">
          <Input
            label="CEP"
            fullWidth
            placeholder="Digite seu CEP"
            register={register("cep")}
          />
          <Styles.AnchorUnderline
            target="_blank"
            href="https://buscacepinter.correios.com.br/app/endereco/index.php?t"
          >
            Não sei meu CEP
          </Styles.AnchorUnderline>
        </Box>
      </Styles.Form>
    );
  };
  return (
    <Styles.Container>
      <Box flexDirection="column" gap={0.8}>
        <Box justifyContent="space-between">
          <Box gap={1} alignItems="center">
            <Icon name="outlineUser" />
            <Typography variant="sub-headline">Entrega</Typography>
          </Box>
          {/* {renderEditButton()} */}
        </Box>
        {renderForm()}
        {/* {renderInfo()} */}
      </Box>
    </Styles.Container>
  );
}
