import { Box, Input } from "components";
import * as Styles from "./styles";

export function NotifyMe() {
  return (
    <Styles.Container>
      <Box flexDirection="column" gap={1}>
        <Input
          label="Nome"
          id="name"
          hasError
        />
        <Input
          label="E-mail"
          id="email"
        />
      </Box>
    </Styles.Container>
  );
}
