import { AxiosError } from "axios";
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

  const isSigned = !!user;

  const handleJWT = () => {
    if (jwt) {
      cmsApi.defaults.headers.common.Authorization = `Bearer ${jwt}`;
      return;
    }

    setUser(null);
  };

  useEffect(() => {
    cmsApi.interceptors.request.use(undefined, async (data: AxiosError) => {
      const { response } = data;

      if (response?.status === 404) {
        delete cmsApi.defaults.headers.common.Authorization;
        setJwt(null);
      }
    });
  }, []);

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
        isSigned,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
