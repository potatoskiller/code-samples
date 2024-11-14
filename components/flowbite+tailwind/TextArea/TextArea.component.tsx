import { cn } from '@/utils/styles';
import { TextAreaProps } from './TextArea.types';

const TextArea = ({
  className,
  label,
  disabled,
  success,
  helperText,
  error,
  ...rest
}: TextAreaProps) => {
  return (
    <div className='w-full'>
      {label && (
        <label
          className={cn(
            'input-label-base',
            disabled && 'input-label-disabled',
            success && !error && 'input-label-success',
            error && 'input-label-error',
          )}
        >
          {label}
        </label>
      )}
      <textarea
        className={cn(
          'input-base',
          disabled && 'input-disabled',
          success && !error && 'input-success',
          error && 'input-error',
          className,
        )}
        {...rest}
      />
      {helperText && (
        <p
          className={cn(
            'input-helper-base',
            success && 'input-helper-success',
            error && 'input-helper-error',
            disabled && 'input-helper-disabled',
          )}
        >
          {helperText}
        </p>
      )}
    </div>
  );
};

export default TextArea;
