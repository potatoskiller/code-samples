import { ReactNode } from 'react';
import type { ButtonProps } from 'react-aria-components';

export type ButtonPropsTypes = ButtonProps & {
  children: string | number;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  color?: 'primary' | 'secondary' | 'destructive';
  variant?: 'text' | 'link' | 'contained' | 'outlined';
  disabled?: boolean;
  loading?: boolean;
  iconLeading?: ReactNode;
  iconTrailing?: ReactNode;
};
