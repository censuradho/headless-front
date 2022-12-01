import { useEffect, useState } from "react";
import { getAddressByCep } from "services/rest/viaCep";
import { GetCepResponse } from "types/viaCep";

export function useAddress(cep?: string, initialize?: boolean) {
  const [address, setAddress] = useState<GetCepResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const handleGetCep = async (value: string) => {
    try {
      setIsLoading(true);
      const response = await getAddressByCep(value);
      setAddress(response.data);
    } catch (err: any) {
      setError(new Error(err));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!cep || !initialize) return;

    handleGetCep(cep);
  }, [cep]);

  return {
    address,
    isLoading,
    error,
  };
}
