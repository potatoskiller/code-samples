import { cn } from '@/utils/styles';
import { RadioProps } from './Radio.types';

const Radio = ({
  label,
  checked,
  className,
  disabled,
  onChange,
  ...rest
}: RadioProps) => {
  return (
    <div className='flex items-center'>
      <input
        type='radio'
        checked={checked}
        onChange={onChange}
        className={cn(
          'focus-ring-base h-4 w-4 cursor-pointer border-neutral-300 bg-neutral-100 text-primary hover:border-primary-dark dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-600 dark:ring-offset-neutral-800 dark:checked:border-primary-dark',
          !checked && 'dark:border-neutral-600',
          disabled && 'cursor-not-allowed',
          className,
        )}
        disabled={disabled}
        aria-checked={checked}
        aria-disabled={disabled}
        {...rest}
      />
      {label && (
        <label
          htmlFor={rest.id}
          className={cn(
            'ms-2 text-sm font-medium text-text-dark dark:text-text-light',
            disabled && 'disabled-text dark:disabled-text',
          )}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Radio;
