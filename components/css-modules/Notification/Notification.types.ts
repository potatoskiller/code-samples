import { HTMLAttributes } from 'react';

export interface NotificationProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  content: string;
  timeout?: number;
  leftComponent?: JSX.Element;
  rightComponent?: JSX.Element;
  onClose?: () => void;
}
