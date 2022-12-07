import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";

import { getPerfil, postPerfil, putPerfil } from "services/rest/cms/checkout";
import { Perfil } from "types/checkout";
import { useAuth } from "context";
import { PersonalInfoFormData } from "./types";
import { personalInfoSchemaValidations } from "./validations";

export function usePerfil() {
  const form = useForm<PersonalInfoFormData>({
    resolver: yupResolver(personalInfoSchemaValidations),
  });

  const { reset } = form;

  const auth = useAuth();

  const [defaultInfo, setDefaultInfo] = useState<Perfil | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFetchingData, setIsFetchingData] = useState(false);

  const getDefaultPerfil = async () => {
    try {
      setIsFetchingData(true);
      const { data: personalInfo } = await getPerfil();

      setDefaultInfo(personalInfo.data);
    } finally {
      setIsFetchingData(false);
    }
  };

  const onSubmit = async (payload: PersonalInfoFormData) => {
    try {
      setIsSubmitting(true);

      if (!auth?.user) return;

      if (defaultInfo) {
        await putPerfil(defaultInfo.id, {
          ...payload,
        });
        return;
      }
      await postPerfil({
        ...payload,
      });
    } catch (err) {
      throw new Error(err as any);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (!defaultInfo) return;
    reset({
      ...defaultInfo.attributes,
      email: auth?.user?.email,
    });
  }, [defaultInfo]);

  useEffect(() => {
    if (!auth?.user) return;
    getDefaultPerfil();
  }, [auth?.user]);

  return {
    form,
    isSubmitting,
    onSubmit,
    isFetchingData,
    defaultInfo,
  };
}
