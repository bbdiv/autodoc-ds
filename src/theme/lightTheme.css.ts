// src/theme/theme.css.ts
import { createTheme } from "@vanilla-extract/css";
import { vars } from "./contract.css";

export const lightTheme = createTheme(vars, {
  color: {
    background: "#ffffff",
    foreground: "#1a1a1a",
    primary: "red",
    secondary: "#ff6600",
  },
  spacing: {
    none: "0",
    sm: "4px",
    md: "8px",
    lg: "16px",
  },
  font: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
  },
});
