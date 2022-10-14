import {
  Box, Button, Input, Typography,
} from "components";
import { Dialog } from "components/common";

import { useForm } from "react-hook-form";
import { RecoveryPasswordProps } from "./types";
import * as Styles from "./styles";

export function RecoveryPassword(props: RecoveryPasswordProps) {
  const { ...otherProps } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {

  };

  return (
    <Dialog {...otherProps}>
      <Box flexDirection="column" gap={0.5}>
        <Typography semiBold variant="title2">Esqueci minha senha</Typography>
        <Typography>Informe o e-mail cadastrado no site</Typography>
      </Box>
      <Styles.Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          autoFocus
          id="email"
          leftIcon={{
            name: "mail",
          }}
          register={register("email")}
          label="E-mail"
          placeholder="informe seu e-mail"
        />
        <Button fullWidth>Verificar</Button>
      </Styles.Form>
    </Dialog>
  );
}
