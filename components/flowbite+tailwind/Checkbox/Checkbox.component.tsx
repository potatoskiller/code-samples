import { cn } from '@/utils/styles';
import { CheckboxProps } from './Checkbox.types';

const Checkbox = ({
  label,
  checked,
  className,
  disabled,
  onChange,
  ...rest
}: CheckboxProps) => {
  return (
    <div className='flex items-center'>
      <input
        type='checkbox'
        checked={checked}
        onChange={onChange}
        className={cn(
          'focus-ring-base h-4 w-4 cursor-pointer rounded-sm border-neutral-300 bg-neutral-100 text-primary dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-600 dark:ring-offset-neutral-800',
          disabled && 'cursor-not-allowed',
          className,
        )}
        disabled={disabled}
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

export default Checkbox;
