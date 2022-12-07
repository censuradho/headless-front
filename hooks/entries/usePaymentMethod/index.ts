import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth, useCart } from "context";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { getCardFlag } from "utils";
import { PaymentMethodFormData } from "./types";
import { PaymentMethodSchemaValidation } from "./validations";

export function usePaymentMethod() {
  const form = useForm<PaymentMethodFormData>({
    resolver: yupResolver(PaymentMethodSchemaValidation),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { reset } = form;

  const onSubmit = async (payload: PaymentMethodFormData) => {
    const card = getCardFlag(payload.creditCardNumber);

    try {
      setIsSubmitting(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    onSubmit,
    form,
    isSubmitting,
  };
}
