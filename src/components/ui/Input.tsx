import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, leftIcon, rightIcon, error, ...props }, ref) => {
    return (
      <div className="relative flex items-center">
        {leftIcon && (
          <div className="absolute left-[10px] flex items-center justify-center text-text-placeholder">
            {leftIcon}
          </div>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full bg-surface-input text-text-primary rounded-[8px] border border-border',
            'placeholder:text-text-placeholder',
            'focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary',
            'transition-colors duration-150',
            'text-[14px] leading-[1.21]',
            leftIcon ? 'pl-[38px]' : 'pl-[10px]',
            rightIcon ? 'pr-[38px]' : 'pr-[10px]',
            'py-[8px]',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
            className
          )}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-[10px] flex items-center justify-center text-text-placeholder">
            {rightIcon}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
