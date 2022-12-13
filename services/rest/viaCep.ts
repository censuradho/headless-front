import axios from "axios";
import { GetCepResponse } from "types/viaCep";

export const viaCep = axios.create({
  baseURL: "https://viacep.com.br/ws",
});

export const getAddressByCep = (cep: string) =>
  viaCep.get<GetCepResponse>(`/${cep}/json`);
