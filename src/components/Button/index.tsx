// src/components/Button.tsx
import React from 'react';
import { button } from './Button.css.ts';

export const Button: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <button className={button}>{children}</button>;
};
