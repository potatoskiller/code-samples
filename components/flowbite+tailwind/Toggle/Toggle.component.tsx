import { cn } from '@/utils/styles';
import { ToggleProps } from './Toogle.types';

const Toggle = ({
  className,
  isActive,
  name,
  disabled,
  onToggle,
}: ToggleProps) => {
  const handleToggle = () => {
    if (disabled) return;
    onToggle(!isActive);
  };

  return (
    <div className={cn('flex items-center', className)}>
      <button
        type='button'
        onClick={handleToggle}
        name={name}
        disabled={disabled}
        className={cn(
          'focus-ring-base relative inline-flex h-4 w-8 items-center rounded-full transition-colors',
          isActive
            ? 'bg-primary dark:bg-primary'
            : 'bg-neutral-300 dark:bg-neutral-700',
          disabled && 'cursor-not-allowed opacity-50',
        )}
      >
        <span
          className={cn(
            'inline-block h-3 w-3 transform rounded-full bg-neutral-100 transition-transform',
            isActive ? 'translate-x-4' : 'translate-x-1',
            disabled
              ? 'disabled-area dark:disabled-area-dark'
              : 'bg-neutral-100',
          )}
        />
      </button>
    </div>
  );
};

export default Toggle;
