import { Box, Icon, Typography } from "components";
import { Container } from "components/common";
import * as Styles from "./styles";

export function Header() {
  return (
    <Styles.Header>
      <Container>
        <Box flex={1} justifyContent="space-between">
          <h1>logo</h1>
          <Box gap={0.5} alignItems="center">
            <Icon name="lock" />
            <Typography uppercase as="strong">
              Compra <Typography semiBold>100% segura</Typography>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Styles.Header>
  );
}
