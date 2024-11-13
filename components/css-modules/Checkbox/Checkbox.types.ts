import { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react';

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: ReactNode;
  error?: string | boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
