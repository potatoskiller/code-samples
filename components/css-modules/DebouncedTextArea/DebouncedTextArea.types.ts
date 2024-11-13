import { ReactNode } from 'react';
import { TextAreaProps } from '../TextArea/TextArea.types';

export interface DebouncedTextAreaProps extends TextAreaProps {
  delay: number;
  value: string;
  icon?: ReactNode;
  onSearch?: (searchTerm: string) => void;
}
