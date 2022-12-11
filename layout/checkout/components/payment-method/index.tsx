import {
  Box, Button, ButtonIcon, Icon, Input, Typography,
} from "components";
import { SelectForm } from "components/hook-form";
import { checkoutStepsPaths } from "constants/checkout";
import { cardFlagMask, cpfMask } from "constants/masks";
import { useCart, useCheckout } from "context";
import router from "next/router";
import { useMemo } from "react";
import {
  getCardFlag,
  getInstallmentsSelectOptions,
} from "utils";
import {
  cardFlagIcons,
  optionsExMonth,
  optionsExYears,
} from "./constants";
import * as Styles from "./styles";
import { PaymentMethodProps } from "./types";

export function PaymentMethod(props: PaymentMethodProps) {
  const { isActive } = props;
  const cart = useCart();

  const {
    paymentMethod,
    address,
    perfil,
  } = useCheckout();

  const installmentsOptions = getInstallmentsSelectOptions(cart.subTotal);

  const canSubmit = useMemo(() => {
    const { isValid: addressIsValid } = address.form.formState;
    const { isValid: perfilIsValid } = perfil.form.formState;
    return addressIsValid && perfilIsValid;
  }, [address.form, perfil.form]);

  const {
    form,
    onSubmit,
    isSubmitting,
  } = paymentMethod;

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
            label="Código de segurança"
            register={register("securityCode")}
            errorMessage={errors?.securityCode?.message}
            maxLength={3}
          />
          <Input
            id="clientDocument"
            label="CPF do titular"
            register={register("clientDocument")}
            mask={cpfMask}
            errorMessage={errors?.clientDocument?.message}
          />
          <SelectForm
            id="installments"
            name="installments"
            label="Quantidade de parcelas"
            fullWidth
            watch={watch}
            setValue={setValue}
            data={installmentsOptions}
            register={register}
            errorMessage={errors?.installments?.message}
          />
          {canSubmit && <Button loading={isSubmitting} fullWidth>Finalizar compra</Button>}
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
