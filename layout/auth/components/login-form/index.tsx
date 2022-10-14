import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import {
  Button, Input, InputPassword, Typography,
} from "components";

import { LoginFormData } from "layout/auth/types";

import { login } from "services/rest/cms/auth";
import { useAuth } from "context";
import { useState } from "react";
import { Dialog } from "components/common";
import * as Styles from "./styles";

import { loginValidationSchema } from "./validations";
import { RecoveryPassword } from "./components";

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginValidationSchema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isRecoveryPasswordModalOpen, setIsRecoveryPasswordModalOpen] = useState(false);

  const auth = useAuth();

  const onSubmit = async (payload: LoginFormData) => {
    try {
      setIsLoading(true);

      const { data } = await login({
        identifier: payload.email,
        password: payload.password,
      });

      auth?.setJwt(data.jwt);
      auth?.setUser(data.user);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <RecoveryPassword
        open={isRecoveryPasswordModalOpen}
        onOpenChange={setIsRecoveryPasswordModalOpen}
      />
      <Styles.Container>
        <Typography variant="title2">Já sou cliente</Typography>
        <Styles.Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            fullWidth
            label="Email"
            leftIcon={{
              name: "mail",
            }}
            register={register("email")}
            errorMessage={errors?.email?.message}
          />
          <InputPassword
            fullWidth
            label="Senha"
            register={register("password")}
            errorMessage={errors?.password?.message}
          />
          <Button
            onClick={() => setIsRecoveryPasswordModalOpen(true)}
            type="button"
            variant="letter-underline"
          >
            Esqueci minha senha
          </Button>
          <Button
            fullWidth
            loading={isLoading}
          >
            Acessar conta
          </Button>
        </Styles.Form>
      </Styles.Container>
    </>

  );
}
