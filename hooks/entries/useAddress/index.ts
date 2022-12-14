import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { GetCepResponse } from "types/viaCep";
import { getAddressByCep } from "services/rest/viaCep";
import useDebounce from "hooks/useDebounce";
import { Address as IAddress } from "types/checkout";
import {
  postAddress,
  putAddress,
  getAddress as getAddressApi,
} from "services/rest/cms/checkout";
import { useAuth } from "context";
import { AddressFormData } from "./types";
import { addressSchemaValidation } from "./validations";

export function useAddress() {
  const auth = useAuth();

  const [address, setAddress] = useState<GetCepResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [defaultAddress, setDefaultAddress] = useState<IAddress | null>(null);

  const form = useForm<AddressFormData>({
    resolver: yupResolver(addressSchemaValidation),
  });

  const { watch, getValues, reset } = form;

  const cep = useDebounce(watch("cep"), 1000);

  const handleGetCep = async (value: string) => {
    try {
      setIsLoading(true);
      const response = await getAddressByCep(value);
      setAddress(response.data);
    } catch (err: any) {
    } finally {
      setIsLoading(false);
    }
  };

  const getAddress = () => {
    if (defaultAddress) return defaultAddress.attributes;
    return getValues();
  };

  const onSubmit = async (data: AddressFormData) => {
    try {
      if (!auth?.user) return;
      setIsLoading(true);

      if (defaultAddress) {
        await putAddress(defaultAddress.id, {
          ...data,
          user: auth.user.id,
        });
        return;
      }
      await postAddress({
        ...data,
        user: auth.user.id,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetDefaultAddress = async () => {
    try {
      const { data: addressResponse } = await getAddressApi();

      setDefaultAddress(addressResponse.data);
    } catch (err) {}
  };

  useEffect(() => {
    if (!cep || !form.formState.touchedFields?.cep) return;

    handleGetCep(cep);
  }, [cep]);

  useEffect(() => {
    if (!address) return;
    reset(address);
  }, [address]);

  useEffect(() => {
    if (!defaultAddress) return;
    reset(defaultAddress.attributes);
  }, [defaultAddress]);

  useEffect(() => {
    if (!auth?.user) return;
    handleGetDefaultAddress();
  }, [auth?.user]);

  return {
    form,
    getAddress,
    onSubmit,
    isLoading,
  };
}
