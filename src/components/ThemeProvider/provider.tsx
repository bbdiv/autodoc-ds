import React, { useCallback, useMemo, useState } from "react";
import { ThemeContext, ThemeContextType } from "./context";
import { lightTheme } from "src/theme/lightTheme.css";
import { darkTheme } from "src/theme/darkTheme.css";

type Theme = "lightTheme" | "darkTheme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("lightTheme");

  const toggle = useCallback(() => {
    setTheme((prev) => (prev === "lightTheme" ? "darkTheme" : "lightTheme"));
  }, []);

  const contextValue = useMemo(() => ({ theme, setTheme, toggle }), [theme, toggle]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <div className={theme === "lightTheme" ? lightTheme : darkTheme}>{children}</div>
    </ThemeContext.Provider>
  );
};
