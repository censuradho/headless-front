export interface Role {
  id: number
  description: string
  name: string
  type: string
  updatedAt: string
  createdAt: string
}
export interface User {
  blocked?: boolean
  confirmed?: boolean
  createdAt: string
  email: string
  id: number
  provider: string
  updatedAt: string
  username: string
  role: Role
}
export interface CreateUserWithEmailPasswordPayload {
  email: string
  password: string
  username: string
}
export interface CreateUserWithEmailPasswordResponse {
  jwt: string
  user: User
}
