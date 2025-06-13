// src/components/Button.css.ts
import { style } from "@vanilla-extract/css";
import { vars } from "../../theme/contract.css";

export const button = style({
  backgroundColor: vars.color.primary,
  color: vars.color.background,
  padding: vars.spacing.md,
  fontFamily: vars.font.body,
  border: "none",
  borderRadius: "4px",
});
