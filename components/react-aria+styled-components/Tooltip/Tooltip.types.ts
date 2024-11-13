import { ReactNode } from 'react';
import { Placement } from '@react-types/overlays';

export type TooltipPropsTypes = {
  className?: string;
  children: ReactNode;
  content: ReactNode;
  placement?: Placement;
  defaultOpen?: boolean;
  isOpen?: boolean;
  withArrow?: boolean;
  openDelay?: number;
  closeDelay?: number;
  onOpenChange?: (value: boolean) => void;
};
