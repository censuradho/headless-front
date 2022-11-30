import { JWT_KEY } from "constants/localStorage";
import { useLocalStorage } from "hooks";
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { cmsApi } from "services/rest/cms";

import router from "next/router";

import { User } from "types/auth";

import { paths } from "constants/routes";
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
    delete cmsApi.defaults.headers.common.Authorization;
  };

  useEffect(() => {
    cmsApi.interceptors.response.use((response) => {
      if (response?.status === 404) setJwt(null);
      return response;
    }, (error) => Promise.reject(error));
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

export function ProtectRoute({ children }: any) {
  const auth = useAuth();
  if (!auth?.isSigned && window.location.pathname !== "/login") {
    router.push(paths.auth);
    return null;
  }
  return children;
}
