import { cn } from '@/utils/styles';
import { InputFieldProps } from './InputField.types';

const InputField = ({
  label,
  iconLeft,
  success,
  error,
  helperText,
  className,
  disabled,
  ...rest
}: InputFieldProps) => {
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
      <div className='relative'>
        {iconLeft && (
          <span
            className={cn(
              'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-500 dark:text-neutral-400',
              disabled && 'disabled-text dark:disabled-text',
              success && !error && 'text-success dark:text-success-dark',
              error && 'text-error dark:text-error-dark',
            )}
          >
            {iconLeft}
          </span>
        )}
        <input
          className={cn(
            'input-base',
            disabled && 'input-disabled',
            success && !error && 'input-success',
            error && 'input-error',
            iconLeft && 'pl-10',
            className,
          )}
          disabled={disabled}
          {...rest}
        />
      </div>
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

export default InputField;
