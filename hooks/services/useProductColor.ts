import { useEffect, useState } from "react";
import { getProductColor } from "services/rest/cms/product-color";
import { ProductColor } from "types/product-colors";

export function useProductColor(id: number) {
  const [data, setData] = useState<ProductColor[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const handleGet = async () => {
    try {
      setIsLoading(true);
      const response = await getProductColor(id);
      setData(response.data.data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    handleGet();
  }, [id]);

  return {
    data,
    isLoading,
    error,
  };
}
