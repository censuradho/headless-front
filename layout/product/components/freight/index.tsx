import { useForm } from "react-hook-form";

import { Button, Input, Typography } from "components";
import * as Styles from "./styles";

export function Freight() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {

  };

  return (
    <Styles.Container>
      <Typography
        as="h1"
        capitalize
        variant={{
          "@initial": "footnote",
          "@laptops-min": "sub-headline",
        }}
      >
        Calcular frete
      </Typography>
      <Styles.Form onSubmit={handleSubmit(onSubmit)}>
        <Input fullWidth register={register("cep")} placeholder="00000-00" />
        <Button>Calcular</Button>
      </Styles.Form>
    </Styles.Container>
  );
}
