import { InputHTMLAttributes } from 'react';
import { InputContainerSize } from '@commonTypes/types';

export interface PhoneFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  inputSize?: InputContainerSize;
  error?: string | boolean;
  label?: string;
  required?: boolean;
  subLabel?: string;
  placeholder?: string;
  onPhoneValueChange?: (values: string) => void;
}
