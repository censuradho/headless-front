import { cmsApi } from "services/rest/cms";
import {
  CreateUserWithEmailPasswordPayload,
  CreateUserWithEmailPasswordResponse,
  EmailConfirmationPayload,
  ForgotPasswordPayload,
  LoginPayload,
  LoginResponse,
  ResetPasswordPayload,
  User,
} from "types/auth";

export async function emailConfirmation(payload: EmailConfirmationPayload) {
  const response = await cmsApi.post("/auth/send-email-confirmation", payload);
  return response;
}

export async function createUserWithEmailPassword(
  payload: CreateUserWithEmailPasswordPayload
) {
  const response = await cmsApi.post<CreateUserWithEmailPasswordResponse>(
    "/auth/local/register",
    payload
  );
  const { email } = payload;

  await emailConfirmation({ email });

  return response;
}

export async function login(payload: LoginPayload) {
  const response = await cmsApi.post<LoginResponse>("/auth/local", payload);
  return response;
}

export async function forgotPassword(payload: ForgotPasswordPayload) {
  const response = await cmsApi.post("/auth/forgot-password", payload);

  return response;
}

export async function resetPassword(payload: ResetPasswordPayload) {
  const response = await cmsApi.post("/auth/forgot-password", payload);
  return response;
}

export async function getMe() {
  return cmsApi.get<User>("/users/me");
}
