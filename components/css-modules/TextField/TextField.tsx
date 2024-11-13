import { forwardRef } from 'react';
import { InputProps, TRef } from './TextField.types';
import InputContainer from '../InputContainer/InputContainer';

const TextField = forwardRef(
  (
    {
      inputSize,
      error,
      hint,
      success,
      label,
      iconLeft,
      iconRight,
      className,
      labelIcon,
      infoLabel,
      type = 'text',
      onIconRightClick,
      onIconLeftClick,
      ...rest
    }: InputProps,
    ref: TRef,
  ) => {
    return (
      <InputContainer
        {...{
          inputSize,
          error,
          hint,
          success,
          label,
          iconLeft,
          iconRight,
          labelIcon,
          infoLabel,
          onIconRightClick,
          onIconLeftClick,
        }}
        className={className}
      >
        <input
          ref={ref}
          type={type}
          {...rest}
        />
      </InputContainer>
    );
  },
);

TextField.displayName = 'TextField';
export default TextField;
