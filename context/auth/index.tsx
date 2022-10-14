import { createContext, useState } from "react";
import { AuthProviderProps } from "./types";

const AuthContext = createContext(null);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={null}>
      {children}
    </AuthContext.Provider>
  );
}
