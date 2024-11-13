import { ChangeEvent, forwardRef, useEffect, useState } from 'react';
import useDebounce from '@hooks/useDebounce';
import TextField from '@ui/Inputs/TextField/TextField';
import { DebouncedTextFieldProps, TRef } from './DebouncedTextField.types';

const DebouncedTextField = forwardRef(
  (
    {
      value,
      delay,
      placeholder,
      iconLeft,
      inputSize,
      className,
      label,
      type,
      error,
      onSearch,
      ...rest
    }: DebouncedTextFieldProps,
    ref: TRef,
  ) => {
    const [currentValue, setCurrentValue] = useState(value);
    const debouncedValue = useDebounce(currentValue, delay);

    const onTextValueChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
      setCurrentValue(target.value);
    };

    useEffect(() => {
      onSearch?.(debouncedValue);
    }, [debouncedValue]);

    useEffect(() => {
      if (value !== currentValue) {
        setCurrentValue(value);
      }
    }, [value]);

    return (
      <TextField
        {...rest}
        className={className}
        error={error}
        iconLeft={iconLeft}
        inputSize={inputSize}
        label={label}
        placeholder={placeholder}
        ref={ref}
        type={type}
        value={currentValue}
        onChange={onTextValueChange}
      />
    );
  },
);

DebouncedTextField.displayName = 'DebouncedTextField';
export default DebouncedTextField;
