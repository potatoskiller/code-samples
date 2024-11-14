import { InputHTMLAttributes, ReactNode } from 'react';

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  iconLeft?: ReactNode;
  success?: boolean;
  error?: boolean;
  className?: string;
  helperText?: string;
}
