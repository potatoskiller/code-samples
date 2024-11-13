import { HTMLAttributes, ReactNode } from 'react';
import { InputContainerSize } from '@commonTypes/types';

export interface InputContainerProps {
  id?: string;
  error?: string | boolean;
  hint?: string;
  success?: boolean;
  label?: ReactNode;
  labelIcon?: ReactNode;
  inputSize?: InputContainerSize;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  infoLabel?: string;
  onIconRightClick?: () => void;
  onIconLeftClick?: () => void;
}

export interface InputContainerComponentProps extends InputContainerProps, HTMLAttributes<HTMLDivElement> {}
