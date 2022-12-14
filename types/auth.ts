export interface Role {
  id: number;
  description: string;
  name: string;
  type: string;
  updatedAt: string;
  createdAt: string;
}

export interface User {
  blocked?: boolean;
  confirmed?: boolean;
  createdAt: string;
  email: string;
  id: number;
  provider: string;
  updatedAt: string;
  username: string;
  role: Role;
}
export interface CreateUserWithEmailPasswordPayload {
  email: string;
  password: string;
  username: string;
}
export interface CreateUserWithEmailPasswordResponse {
  jwt: string;
  user: User;
}

export interface LoginPayload {
  identifier: string;
  password: string;
}

export type LoginResponse = CreateUserWithEmailPasswordResponse;

export interface ForgotPasswordPayload {
  email: string;
}
export interface ResetPasswordPayload {
  code: string;
  password: string;
  passwordConfirmation: string;
}

export interface EmailConfirmationPayload {
  email: string;
}
