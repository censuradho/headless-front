import {
  Box, Button, Input, InputPassword, Typography,
} from "components";
import { Dialog } from "components/common";

import { useForm } from "react-hook-form";
import { forgotPassword, resetPassword } from "services/rest/cms/auth";
import { useState } from "react";
import { useRouter } from "next/router";
import { paths } from "constants/routes";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  CodeFormData, ForgottenFormData, RecoveryPasswordProps, ResetFormData,
} from "./types";

import * as Styles from "./styles";
import * as validations from "./validations";

const steps = {
  reset: "reset",
  forgotten: "forgotten",
  code: "code",
};

export function RecoveryPassword(props: RecoveryPasswordProps) {
  const { onOpenChange, ...otherProps } = props;

  const {
    register: registerForgotten,
    handleSubmit,
    formState: { errors: errorsForgotten },
    getValues: getForgottenData,
  } = useForm<ForgottenFormData>({
    resolver: yupResolver(validations.forgottenValidationSchema),
  });

  const {
    register: registerCode,
    handleSubmit: handleSubmitCode,
    formState: { errors: errorsCode },
    getValues: getCodeData,
  } = useForm<CodeFormData>({
    resolver: yupResolver(validations.codeValidationSchema),
  });

  const {
    register: registerReset,
    handleSubmit: handleSubmitReset,
    formState: { errors: errorsReset },
  } = useForm<ResetFormData>({
    resolver: yupResolver(validations.resetValidationSchema),
  });

  const router = useRouter();

  const currentStep = router?.query?.s as string | undefined;

  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForgotten = async (payload: ForgottenFormData) => {
    try {
      setIsLoading(true);
      await forgotPassword(payload);
      router.push(`?s=${steps?.code}`);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmitCode = async () => {
    try {
      setIsLoading(true);

      router.push(`?s=${steps?.reset}`);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmitReset = async (payload: ResetFormData) => {
    try {
      setIsLoading(true);

      await resetPassword({
        ...payload,
        code: getCodeData().code,
      });
      router.push(`?s=${steps?.reset}`);
    } finally {
      setIsLoading(false);
    }
  };

  const renderForgotten = () => (

    <>
      <Box flexDirection="column" gap={0.5}>
        <Typography semiBold variant="title2">Esqueci minha senha</Typography>
        <Typography>Informe o e-mail cadastrado no site</Typography>
      </Box>
      <Styles.Form onSubmit={handleSubmit(onSubmitForgotten)}>
        <Input
          autoFocus
          id="email"
          leftIcon={{
            name: "mail",
          }}
          register={registerForgotten("email")}
          label="E-mail"
          placeholder="Informe seu e-mail"
          errorMessage={errorsForgotten?.email?.message}
        />
        <Button loading={isLoading} fullWidth>Verificar</Button>
      </Styles.Form>
    </>
  );

  const renderCode = () => {
    const renderResendCode = () => {
      if (!getForgottenData()?.email) return null;

      return (
        <Button
          variant="letter-underline"
          onClick={() => onSubmitForgotten(getForgottenData())}
        >
          Reenviar código
        </Button>
      );
    };

    return (
      <>
        <Box flexDirection="column" gap={0.5}>
          <Typography semiBold variant="title2">Esqueci minha senha</Typography>
          <Typography>
            As instruções de recuperação de senha foram enviadas para o e-mail informado
          </Typography>
          <Typography>
            Digite o código recebido no campo abaixo
          </Typography>
        </Box>
        <Styles.Form onSubmit={handleSubmitCode(onSubmitCode)}>
          <Input
            autoFocus
            id="code"
            register={registerCode("code")}
            label="Informe o código de acesso"
            errorMessage={errorsCode?.code?.message}
          />
          <Box flexDirection="column" gap={0.5} alignItems="flex-start">
            <Button loading={isLoading} fullWidth>Criar nova senha</Button>
            {renderResendCode()}
          </Box>
        </Styles.Form>
      </>
    );
  };

  const renderReset = () => (
    <>
      <Box flexDirection="column" gap={0.5}>
        <Typography semiBold variant="title2">Esqueci minha senha</Typography>
        <Typography>
          Insira sua nova senha
        </Typography>
      </Box>
      <Styles.Form onSubmit={handleSubmitReset(onSubmitReset)}>
        <InputPassword
          autoFocus
          id="password"
          register={registerReset("password")}
          label="Senha"
          errorMessage={errorsReset?.password?.message}
        />
        <InputPassword
          id="passwordConfirmation"
          register={registerReset("passwordConfirmation")}
          label="Confirmar senha"
          errorMessage={errorsReset?.passwordConfirmation?.message}
        />
        <Box flexDirection="column" gap={0.5} alignItems="flex-start">
          <Button loading={isLoading} fullWidth>Confirmar</Button>
        </Box>
      </Styles.Form>
    </>
  );

  const handleCloseModal = (state: boolean) => {
    router.push(paths.auth);
    onOpenChange?.(state);
  };

  const renderForm = (step = steps?.forgotten) => {
    const forms = {
      [steps?.forgotten]: renderForgotten,
      [steps?.code]: renderCode,
      [steps.reset]: renderReset,
    };

    return forms[step]();
  };

  return (
    <Dialog onOpenChange={handleCloseModal} {...otherProps}>
      {renderForm(currentStep)}
    </Dialog>
  );
}
