import { HTMLAttributes, ReactNode } from 'react';

type Colors =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'success'
  | 'gray-blue'
  | 'blue-light'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink'
  | 'orange';

export type BadgePropsTypes = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  color?: Colors;
  size?: 'sm' | 'md' | 'lg';
};
