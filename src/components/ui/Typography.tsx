import { forwardRef, type HTMLAttributes, type ElementType } from 'react';
import { cn } from '@/lib/utils';

type TypographyVariant =
  | 'logo'
  | 'heading-lg'
  | 'heading-md'
  | 'body'
  | 'body-sm'
  | 'label'
  | 'menu'
  | 'caption';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: ElementType;
  color?: 'primary' | 'secondary' | 'muted' | 'placeholder' | 'light' | 'date' | 'like' | 'inherit';
}

const variantStyles: Record<TypographyVariant, string> = {
  logo: 'text-[39px] leading-[1.2] font-semibold',
  'heading-lg': 'text-[18px] leading-[1.21] font-semibold tracking-[-0.01em]',
  'heading-md': 'text-[17px] leading-[1.21] font-semibold',
  body: 'text-[15px] leading-[1.21] font-normal',
  'body-sm': 'text-[14px] leading-[1.21] font-normal',
  label: 'text-[14px] leading-[1.21] font-medium',
  menu: 'text-[13px] leading-[1.21] font-medium',
  caption: 'text-[12px] leading-[1.21] font-medium',
};

const colorStyles: Record<string, string> = {
  primary: 'text-text-primary',
  secondary: 'text-text-secondary',
  muted: 'text-text-muted',
  placeholder: 'text-text-placeholder',
  light: 'text-text-light',
  date: 'text-text-date',
  like: 'text-text-like',
  inherit: 'text-inherit',
};

const defaultTags: Record<TypographyVariant, ElementType> = {
  logo: 'h1',
  'heading-lg': 'h2',
  'heading-md': 'h3',
  body: 'p',
  'body-sm': 'p',
  label: 'span',
  menu: 'span',
  caption: 'span',
};

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = 'body', as, color = 'primary', children, ...props }, ref) => {
    const Component = as || defaultTags[variant];

    return (
      <Component
        ref={ref}
        className={cn(
          variantStyles[variant],
          colorStyles[color],
          variant === 'logo' && 'font-logo',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = 'Typography';
