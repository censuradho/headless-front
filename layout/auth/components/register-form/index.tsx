import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import {
  Box, Button, Input, InputPassword, Typography,
} from "components";

import { createUserWithEmailPassword } from "services/rest/cms/auth";
import { useState } from "react";
import * as Styles from "./styles";
import { registerSchemaValidation } from "./validations";
import { RegisterFormData } from "./types";

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchemaValidation),
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setIsLoading(true);

      const { email, password, username } = data;

      await createUserWithEmailPassword({
        email,
        password,
        username,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Styles.Container>
      <Typography variant="title2">Criar conta</Typography>
      <Styles.Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          fullWidth
          label="E-mail"
          type="email"
          errorMessage={errors.email?.message}
          register={register("email")}
        />
        <Box gap={1}>
          <Input
            fullWidth
            label="Nome"
            register={register("username")}
            errorMessage={errors.username?.message}
          />
          <Input
            fullWidth
            label="Sobrenome"
            errorMessage={errors.lastName?.message}
            register={register("lastName")}
          />
        </Box>
        <InputPassword
          fullWidth
          label="Senha"
          errorMessage={errors.password?.message}
          register={register("password")}
        />
        <InputPassword
          fullWidth
          label="Confirmar senha"
          register={register("rePassword")}
          errorMessage={errors.rePassword?.message}
        />
        <Button
          fullWidth
          type="submit"
          loading={isLoading}
        >
          Prosseguir
        </Button>
      </Styles.Form>
    </Styles.Container>
  );
}
