import { ChangeEvent, useEffect, useState } from 'react';
import useDebounce from '@hooks/useDebounce';
import { DebouncedTextAreaProps } from './DebouncedTextArea.types';
import TextArea from '../TextArea/TextArea';

const DebouncedTextArea = ({
  value,
  delay,
  placeholder,
  icon,
  inputSize,
  onSearch,
  className,
}: DebouncedTextAreaProps) => {
  const [currentValue, setCurrentValue] = useState(value);
  const debouncedValue = useDebounce(currentValue, delay);

  const onTextValueChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
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
    <TextArea
      className={className}
      defaultValue={currentValue}
      iconLeft={icon}
      inputSize={inputSize}
      placeholder={placeholder}
      onChange={onTextValueChange}
    />
  );
};

DebouncedTextArea.displayName = 'DebouncedTextArea';
export default DebouncedTextArea;
