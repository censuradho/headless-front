import { Box, Input } from "components";
import { useForm } from "react-hook-form";
import * as Styles from "./styles";

export function NotifyMe() {
  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm();

  return (
    <Styles.Container>
      <Box flexDirection="column" gap={1}>
        <Input
          label="Nome"
          id="name"
          errorMessage="Campo"
        />
        <Input
          label="E-mail"
          id="email"
        />
      </Box>
    </Styles.Container>
  );
}
