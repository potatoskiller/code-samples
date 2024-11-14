import { TextareaHTMLAttributes } from 'react';

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  label?: string;
  success?: boolean;
  helperText?: string;
  error?: boolean;
}
