import { ReactNode } from 'react';

export interface ClipboardAreaProps {
  className?: string;
  children: ReactNode;
  successMessage?: string;
  errorMessage?: string;
}
