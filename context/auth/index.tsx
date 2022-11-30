import { AxiosError } from "axios";
import { JWT_KEY } from "constants/localStorage";
import { useLocalStorage } from "hooks";
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { cmsApi, getMe } from "services/rest/cms";

import { User } from "types/auth";

import { AuthContextProps, AuthProviderProps } from "./types";

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [jwt, setJwt] = useLocalStorage<string | null>(JWT_KEY, null);

  const isSigned = !!user;

  const handleJWT = async () => {
    try {
      if (jwt) {
        cmsApi.defaults.headers.common.Authorization = `Bearer ${jwt}`;
        const { data: me } = await getMe();

        setUser(me);
        return;
      }

      setUser(null);
      delete cmsApi.defaults.headers.common.Authorization;
    } catch (err) {}
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
