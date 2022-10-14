import { JWT_KEY } from "constants/localStorage";
import { useLocalStorage } from "hooks";
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { cmsApi } from "services/rest/cms";

import { User } from "types/auth";

import { AuthContextProps, AuthProviderProps } from "./types";

const AuthContext = createContext<AuthContextProps | null>(null);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [jwt, setJwt] = useLocalStorage<string | null>(JWT_KEY, null);

  const handleJWT = () => {
    if (jwt) {
      cmsApi.defaults.headers.common.Authorization = `Bearer ${jwt}`;
      return;
    }
    delete cmsApi.defaults.headers.common.Authorization;
  };

  useEffect(() => {
    handleJWT();
  }, [jwt]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        jwt,
        setJwt,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
