import { ReactNode } from "react";
import { light } from "theme";

export const DARK_THEME = "DARK_THEME";
export const LIGHT_THEME = "LIGHT_THEME";

export interface ThemeContextData {
  toggleTheme: () => void;
  theme: Pick<typeof light, "colors">;
  currentTheme: string;
}

export interface ThemeProviderProps {
  children: ReactNode;
}
