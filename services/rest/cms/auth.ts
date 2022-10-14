import { cmsApi } from "services/rest/cms";
import {
  CreateUserWithEmailPasswordPayload,
  CreateUserWithEmailPasswordResponse,
  LoginPayload,
  LoginResponse,
} from "types/auth";

export async function createUserWithEmailPassword(payload: CreateUserWithEmailPasswordPayload) {
  const response = await cmsApi.post<CreateUserWithEmailPasswordResponse>("/auth/local/register", payload);
  return response;
}

export async function login(payload: LoginPayload) {
  const response = await cmsApi.post<LoginResponse>("/auth/local", payload);
  return response;
}
