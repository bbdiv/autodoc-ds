// src/components/Button.tsx
//teste trigger
import React from "react";
import { button } from "./Button.css.ts";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
  return (
    <button
      className={button}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
