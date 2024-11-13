import { ReactNode } from 'react';

export interface DropdownProps {
  children?: ReactNode | ReactNode[];
  trigger?: ReactNode;
  placement?: 'start' | 'bottom' | 'top' | 'end';
  offset?: number;
  crossOffset?: number;
  isOpen?: boolean;
  onVisibilityChange?: (isOpen: boolean) => void;
}
