import { createTheme } from "@vanilla-extract/css";
import { vars } from "./contract.css";

export const darkTheme = createTheme(vars, {
  color: {
    background: "#121212",
    foreground: "#f1f1f1",
    primary: "yellow",
    secondary: "#ffa94d",
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
