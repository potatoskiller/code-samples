import { HTMLAttributes, ReactNode } from 'react';
import { LoadingTypes } from '@commonTypes/types';

export interface InfiniteScrollProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode | ReactNode[];
  direction?: 'start' | 'end';
  dataLength: number;
  emptyMessage?: string;
  lastElementId: string | number;
  firstElementId: string | number;
  loading: LoadingTypes;
  loadingMessage?: string;
  loadMore: () => void;
}

export type ScrollBehaviorTypes = 'auto' | 'smooth';
