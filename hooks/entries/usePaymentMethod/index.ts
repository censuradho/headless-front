import { yupResolver } from "@hookform/resolvers/yup";
import { useCart } from "context";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { generateCardToken } from "services/rest/cms/checkout";
import {
  PaymentMethodFormData,
  UsePaymentMethodParams,
} from "./types";
import {
  PaymentMethodSchemaValidation,
} from "./validations";

export function usePaymentMethod(params: UsePaymentMethodParams) {
  const form = useForm<PaymentMethodFormData>({
    resolver: yupResolver(PaymentMethodSchemaValidation),
  });

  const cart = useCart();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (payload: PaymentMethodFormData) => {
    await generateCardToken({
      amount: {
        currency: "BRL",
        value: cart.subTotal,
      },
      payment_method: {
        installments: 1,
        card: {
          exp_month: payload.expMonth,
          exp_year: payload.expYear,
          number: payload.creditCardNumber,
          security_code: payload.securityCode,
          store: false,
          holder: {
            name: payload.holderName,
          },
        },
      },
    });

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
