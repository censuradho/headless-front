import { cmsApi } from "services/rest/cms";
import {
  CreateUserWithEmailPasswordPayload,
  CreateUserWithEmailPasswordResponse,
} from "types/auth";

export async function createUserWithEmailPassword(payload: CreateUserWithEmailPasswordPayload) {
  const { data } = await cmsApi.post<CreateUserWithEmailPasswordResponse>("/auth/local/register", payload);
  return data;
}
