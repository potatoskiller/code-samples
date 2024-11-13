import { ForwardedRef, InputHTMLAttributes } from 'react';
import { InputContainerProps } from '../InputContainer/InputContainer.types';

export type TextAreaProps = InputHTMLAttributes<HTMLTextAreaElement> & Partial<InputContainerProps>;
export type TRef = ForwardedRef<HTMLTextAreaElement> | null;
