import {
  Box, Button, Input, Typography,
} from "components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Styles from "./styles";

import { notifyMeValidationSchema } from "./validations";

import { FormData } from "./types";

export function NotifyMe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(notifyMeValidationSchema),
  });

  const onSubmit = () => {

  };

  return (
    <Styles.Container>
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
            errorMessage={errors.name?.message}
          />
        </Box>
        <Box marginTop={1}>
          <Button fullWidth>Enviar</Button>
        </Box>
      </Styles.Form>
    </Styles.Container>
  );
}
