import { ForwardedRef } from 'react';
import { InputProps } from '../TextField/TextField.types';

export interface DebouncedTextFieldProps extends InputProps {
  delay: number;
  value: string;
  onSearch?: (searchTerm: string) => void;
}

export type TRef = ForwardedRef<HTMLInputElement> | null;
