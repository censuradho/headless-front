import { Box, Icon, Typography } from "components";
import * as Styles from "./styles";

export function OrderResume() {
  return (
    <Styles.Container>
      <Box flexDirection="column" gap={0.8}>
        <Box justifyContent="space-between">
          <Box gap={1} alignItems="center">
            <Icon name="shoppingBag" />
            <Typography variant="sub-headline">Resumo da compra</Typography>
          </Box>
        </Box>
      </Box>
    </Styles.Container>
  );
}
