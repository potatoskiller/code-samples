import { ForwardedRef, InputHTMLAttributes } from 'react';
import { InputContainerProps } from '../InputContainer/InputContainer.types';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & Partial<InputContainerProps>;
export type TRef = ForwardedRef<HTMLInputElement> | null;
