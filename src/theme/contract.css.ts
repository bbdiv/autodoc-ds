// src/theme/contract.css.ts
import { createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
  color: {
    background: null,
    foreground: null,
    primary: null,
    secondary: null,
  },
  spacing: {
    none: null,
    sm: null,
    md: null,
    lg: null,
  },
  font: {
    body: null,
    heading: null,
  },
});
