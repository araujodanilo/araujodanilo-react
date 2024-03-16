import { ReactNode, createContext, useContext, useEffect, useReducer } from "react";
import { SwitchThemeActionType, ThemeState, changeThemeReducer } from "./change-theme-reducer";

type ThemeContextProps = {
  theme: "dark" | "light" | "system";
  changeTheme: () => void;
};

const defaultValues: ThemeContextProps = {
  theme: "system",
  changeTheme: () => {},
};

const ThemeContext = createContext<ThemeContextProps>(defaultValues);

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: ThemeState;
  storageKey?: string;
};

export function ThemeProvider({ children, defaultTheme, storageKey = "theme" }: ThemeProviderProps) {
  const localStorageTheme = localStorage.getItem("theme") as ThemeState | null;

  const [theme, dispatch] = useReducer(changeThemeReducer, localStorageTheme || defaultTheme || defaultValues.theme);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const changeTheme = () => {
    dispatch({ type: SwitchThemeActionType.CHANGE });
    // const newTheme = theme === "system" ? "dark" : theme === "dark" ? "light" : "system";
    const newTheme = theme === "system" ? "dark" : theme === "dark" ? "light" : "dark";
    localStorage.setItem(storageKey, newTheme);
  };

  return <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
