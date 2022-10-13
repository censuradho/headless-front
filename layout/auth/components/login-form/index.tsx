import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import {
  Button, Input, InputPassword, Typography,
} from "components";

import { LoginFormData } from "layout/auth/types";

import * as Styles from "./styles";

import { loginValidationSchema } from "./validations";

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginValidationSchema),
  });

  const onSubmit = () => {};

  return (
    <Styles.Container>
      <Typography variant="title2">Já sou cliente</Typography>
      <Styles.Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          fullWidth
          label="Email"
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
          variant="letter-underline"
          as="a"
          href="/"
        >
          Esqueci minha senha
        </Button>
        <Button fullWidth>
          Acessar conta
        </Button>
      </Styles.Form>
    </Styles.Container>
  );
}
