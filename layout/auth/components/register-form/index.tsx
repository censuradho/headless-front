import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import {
  Box, Button, Input, InputPassword, Typography,
} from "components";

import { createUserWithEmailPassword } from "services/rest/cms/auth";
import { useState } from "react";
import { useAuth } from "context";
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
    defaultValues: {
      email: "teste@teste.com",
      lastName: "saasd",
      password: "123456",
      rePassword: "123456",
      username: "teste",
    },
  });

  const auth = useAuth();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setIsLoading(true);

      const { email, password, username } = data;

      const response = await createUserWithEmailPassword({
        email,
        password,
        username,
      });

      auth?.setJwt(response?.data?.jwt);
      auth?.setUser(response?.data?.user);
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
          id="email"
        />
        <Box gap={1}>
          <Input
            fullWidth
            label="Nome"
            id="username"
            register={register("username")}
            errorMessage={errors.username?.message}
          />
          <Input
            fullWidth
            label="Sobrenome"
            id="lastName"
            errorMessage={errors.lastName?.message}
            register={register("lastName")}
          />
        </Box>
        <InputPassword
          fullWidth
          id="password"
          label="Senha"
          errorMessage={errors.password?.message}
          register={register("password")}
        />
        <InputPassword
          fullWidth
          label="Confirmar senha"
          id="rePassword"
          register={register("rePassword")}
          errorMessage={errors.rePassword?.message}
        />
        <Button
          fullWidth
          type="submit"
          loading={isLoading}
        >
          Cadastre-se
        </Button>
      </Styles.Form>
    </Styles.Container>
  );
}
