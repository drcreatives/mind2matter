import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  initials?: string;
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeStyles = {
  sm: 'w-[32px] h-[32px] text-[14px]',
  md: 'w-[42px] h-[42px] text-[23px]',
  lg: 'w-[56px] h-[56px] text-[28px]',
};

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, initials, src, alt, size = 'md', ...props }, ref) => {
    if (src) {
      return (
        <div
          ref={ref}
          className={cn(
            'rounded-full overflow-hidden flex-shrink-0',
            sizeStyles[size],
            className
          )}
          {...props}
        >
          <img
            src={src}
            alt={alt || 'Avatar'}
            className="w-full h-full object-cover"
          />
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(
          'bg-surface-avatar rounded-full flex items-center justify-center flex-shrink-0',
          'font-bold text-text-primary',
          sizeStyles[size],
          className
        )}
        style={{ fontFamily: "'Typo Round Bold Demo', sans-serif" }}
        {...props}
      >
        {initials}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';
