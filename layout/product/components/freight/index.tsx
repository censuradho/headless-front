import { useForm } from "react-hook-form";

import { Button, Input, Typography } from "components";
import * as Styles from "./styles";

export function Freight() {
  const {
    register,
    handleSubmit,
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
        <Input
          fullWidth
          register={register("cep")}
          placeholder="00000-00"
        />
        <Button>Calcular</Button>
      </Styles.Form>
      <Styles.Link
        as="a"
        target="_blank"
        rel="noreferrer"
        href="https://buscacepinter.correios.com.br/app/endereco/index.php?t"
      >
        Não sei meu CEP

      </Styles.Link>
    </Styles.Container>
  );
}
