import {
  Box, ButtonIcon, Icon, Input, Typography,
} from "components";
import { checkoutStepsPaths } from "constants/checkout";
import router from "next/router";
import * as Styles from "./styles";
import { PaymentMethodProps } from "./types";

export function PaymentMethod(props: PaymentMethodProps) {
  const { isActive } = props;

  const renderForm = () => {
    if (!isActive) return null;

    return (
      <Styles.Form>
        <Input
          id="email"
          autoFocus
          label="Número do cartão"
          // register={register("email")}
          // disabled={!!defaultInfo}
          // errorMessage={errors?.email?.message}
        />
      </Styles.Form>
    );
  };

  const renderEditButton = () => !isActive && (
    <ButtonIcon
      icon={{
        name: "edit",
      }}
      onClick={() => router.push(checkoutStepsPaths.payment)}
    />
  );

  return (
    <Styles.Container>
      <Box flexDirection="column" gap={0.8}>
        <Box justifyContent="space-between">
          <Box gap={1} alignItems="center">
            <Icon name="creditCard" />
            <Typography variant="sub-headline">Pagamento</Typography>
          </Box>
          {renderEditButton()}
        </Box>
        {renderForm()}
      </Box>
    </Styles.Container>
  );
}
