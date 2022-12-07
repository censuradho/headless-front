import {
  Box, Button, ButtonIcon, Icon, Input, Typography,
} from "components";
import { SelectForm } from "components/hook-form";
import { checkoutStepsPaths } from "constants/checkout";
import { cardFlagMask } from "constants/masks";
import { usePaymentMethod } from "hooks/entries";
import router from "next/router";
import { useMemo } from "react";
import { getCardFlag } from "utils";
import { cardFlagIcons, optionsExMonth, optionsExYears } from "./constants";
import * as Styles from "./styles";
import { PaymentMethodProps } from "./types";

export function PaymentMethod(props: PaymentMethodProps) {
  const { isActive } = props;

  const {
    form,
    onSubmit,
    isSubmitting,
  } = usePaymentMethod();

  const {
    register,
    watch,
    setValue,
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
            mask={cardFlagMask}
          />
          <Input
            id="holderName"
            autoFocus
            label="Nome impresso no cartão"
            register={register("holderName")}
            errorMessage={errors?.holderName?.message}
          />
          <Box gap={1}>
            <SelectForm
              id="expMonth"
              name="expMonth"
              label="Validade mês"
              fullWidth
              watch={watch}
              setValue={setValue}
              data={optionsExMonth}
              register={register}
              errorMessage={errors?.expMonth?.message}
            />
            <SelectForm
              id="expYear"
              name="expYear"
              label="Validade ano"
              fullWidth
              watch={watch}
              setValue={setValue}
              data={optionsExYears}
              register={register}
              errorMessage={errors?.expYear?.message}
            />
          </Box>
          <Input
            id="securityCode"
            autoFocus
            label="Código de segurança"
            register={register("securityCode")}
            errorMessage={errors?.securityCode?.message}
            maxLength={3}
          />
          <Input
            id="clientDocument"
            autoFocus
            label="CPF do titular"
            register={register("clientDocument")}
            errorMessage={errors?.clientDocument?.message}
          />
          <Button loading={isSubmitting} fullWidth>Salvar</Button>

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
