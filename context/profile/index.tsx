import { createContext, useContext } from "react";
import { ProfileProviderProps } from "./types";

const ProfileContext = createContext(null);

export function ProfileProvider({ children }: ProfileProviderProps) {
  return (
    <ProfileContext.Provider
      value={null}
    >
      {children}

    </ProfileContext.Provider>
  );
}

export const useProfileContext = () => useContext(ProfileContext);
