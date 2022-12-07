import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "context";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { PaymentMethodFormData } from "./types";
import { PaymentMethodSchemaValidation } from "./validations";

export function usePaymentMethod() {
  const form = useForm<PaymentMethodFormData>({
    resolver: yupResolver(PaymentMethodSchemaValidation),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const auth = useAuth();

  const { reset } = form;

  const onSubmit = async (payload: PaymentMethodFormData) => {
  };

  return {
    onSubmit,
    form,
    isSubmitting,
  };
}
