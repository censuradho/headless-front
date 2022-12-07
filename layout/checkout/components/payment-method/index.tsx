import {
  Box, ButtonIcon, Icon, Input, Typography,
} from "components";
import { checkoutStepsPaths } from "constants/checkout";
import { usePaymentMethod } from "hooks/entries";
import router from "next/router";
import { useMemo } from "react";
import { getCardFlag } from "utils";
import { cardFlagIcons } from "./constants";
import * as Styles from "./styles";
import { PaymentMethodProps } from "./types";

export function PaymentMethod(props: PaymentMethodProps) {
  const { isActive } = props;

  const { form, onSubmit } = usePaymentMethod();

  const {
    register,
    watch,
    formState: {
      errors,
    },
    handleSubmit,
  } = form;

  const cardNumber = watch("creditCardNumber");

  const CardFlag = useMemo(() => {
    const cardFlag = cardNumber ? getCardFlag(cardNumber) : "";
    return cardFlagIcons?.[cardFlag];
  }, [cardNumber]);

  const
    renderForm = () => {
      if (!isActive) return null;

      return (
        <Styles.Form onSubmit={handleSubmit(onSubmit)}>
          {CardFlag && <CardFlag />}
          <Input
            id="email"
            autoFocus
            label="Número do cartão"
            register={register("creditCardNumber")}
            errorMessage={errors?.creditCardNumber?.message}
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
