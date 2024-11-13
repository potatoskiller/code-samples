import { forwardRef } from 'react';
import { TextAreaProps, TRef } from './TextArea.types';
import InputContainer from '../InputContainer/InputContainer';

const TextArea = forwardRef(
  (
    {
      id,
      inputSize,
      error,
      success,
      label,
      iconLeft,
      iconRight,
      className,
      labelIcon,
      infoLabel,
      ...rest
    }: TextAreaProps,
    ref: TRef,
  ) => {
    return (
      <InputContainer
        {...{
          inputSize,
          error,
          success,
          label,
          labelIcon,
          iconLeft,
          iconRight,
          infoLabel,
          className,
        }}
      >
        <textarea 
          id={id}
          ref={ref}
          {...rest}
        />
      </InputContainer>
    );
  },
);

TextArea.displayName = 'TextArea';
export default TextArea;
