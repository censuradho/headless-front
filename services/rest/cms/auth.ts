import { cmsApi } from "services/rest/cms";
import { CreateUserWithEmailPasswordPayload } from "types/auth";
/**
 * Creates a new user in the database with a default role as 'client'.
*/
export async function createUserWithEmailPassword(payload: CreateUserWithEmailPasswordPayload) {
  const response = await cmsApi.post("/auth/local/client", payload);
  console.log(response);
}
