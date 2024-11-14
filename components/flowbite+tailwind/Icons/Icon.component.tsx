import { cn } from '@/utils/styles';
import { IconProps } from './Icon.types';

const Icon = ({
  width = 24,
  height = 24,
  color,
  className,
  name,
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      className={cn(color && `text-${color}`, className)}
      fill='currentColor'
    >
      <use href={`/icons/sprite.svg#${name}`}></use>
    </svg>
  );
};

export default Icon;
