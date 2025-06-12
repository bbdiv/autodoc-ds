// lib/components/Input/index.tsx
import React from 'react';
import { input } from './Input.css.ts';

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <input {...props} className={input} />
}

export default Input;