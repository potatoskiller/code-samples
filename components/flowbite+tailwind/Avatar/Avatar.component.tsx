import React from 'react';
import Image from 'next/image';
import { AvatarProps } from './Avatar.type';
import Icon from '../Icons/Icon.component';
import { cn } from '@/utils/styles';

const Avatar = ({
  src,
  alt = 'User',
  initials,
  className,
  ...rest
}: AvatarProps) => {
  return (
    <div className={className} {...rest}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={40}
          height={40}
          className='rounded-full object-cover text-center text-neutral-500'
        />
      ) : (
        <div
          className={cn(
            'relative h-10 w-10 overflow-hidden rounded-full bg-background dark:bg-background-light',
            initials && 'inline-flex items-center justify-center',
          )}
        >
          {initials ? (
            <span className='font-medium text-neutral-500'>{initials}</span>
          ) : (
            <Icon
              name='user'
              className='absolute -left-1 h-12 w-12 text-neutral-500'
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Avatar;
