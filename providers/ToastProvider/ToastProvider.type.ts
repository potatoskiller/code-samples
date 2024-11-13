import { ReactNode } from 'react';
import { ToastType } from '@commonTypes/types';

export interface ToastProviderProps {
  children: ReactNode;
}

export interface ToastParams extends Omit<ToastType, 'id'> {}
