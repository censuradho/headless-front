import { useState } from "react";
import {
  Box,
  Button,
  Input,
  Typography,
} from "components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Styles from "./styles";

import { notifyMeValidationSchema } from "./validations";

import { FormData } from "./types";

export function NotifyMe() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(notifyMeValidationSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    try {
      setIsLoading(true);
      setIsSuccess(true);
    } finally {
      setIsLoading(false);
    }
  };

  const renderForm = () => {
    if (isSuccess) return null;

    return (
      <>
        <Box flexDirection="column" gap={0.5}>
          <Typography variant="sub-headline" semiBold>Produto indisponível</Typography>
          <Typography variant="footnote" semiBold>Avise-me quando chegar!</Typography>
        </Box>
        <Styles.Form onSubmit={handleSubmit(onSubmit)}>
          <Box flexDirection="column" gap={1}>
            <Input
              label="Nome"
              id="name"
              errorMessage={errors.name?.message}
              register={register("name")}
            />
            <Input
              label="E-mail"
              id="email"
              register={register("email")}
              errorMessage={errors.email?.message}
            />
          </Box>
          <Box marginTop={1}>
            <Button
              loading={isLoading}
              fullWidth
              type="submit"
            >
              Enviar
            </Button>
          </Box>
        </Styles.Form>
      </>
    );
  };

  const renderSuccessMessage = () => {
    if (!isSuccess) return null;

    return (
      <Box flexDirection="column" gap={0.5} justifyContent="flex-start">
        <Box>
          <Button
            variant="letter"
            onClick={() => setIsSuccess(false)}
            icon={{
              name: "arrowRoundBack",
            }}
          >
            Voltar
          </Button>
        </Box>
        <Styles.SuccessTitle variant="footnote">E-mail cadastrado com sucesso</Styles.SuccessTitle>
        <Typography variant="caption2">Nós te avisaremos assim que o produto estiver disponível!</Typography>
      </Box>
    );
  };

  return (
    <Styles.Container>
      {renderForm()}
      {renderSuccessMessage()}
    </Styles.Container>
  );
}
