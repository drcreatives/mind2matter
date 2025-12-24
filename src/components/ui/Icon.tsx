import { forwardRef, type SVGAttributes } from 'react';
import { cn } from '@/lib/utils';

interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size = 24, color = 'currentColor', children, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn('flex-shrink-0', className)}
        {...props}
      >
        {children}
      </svg>
    );
  }
);

Icon.displayName = 'Icon';

// Common icons used in the app
export const SearchIcon = ({ size = 21, className }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 21 21"
    fill="none"
    className={className}
  >
    <circle cx="9.5" cy="9.5" r="7.75" stroke="#848995" strokeWidth="1.3125" />
    <path d="M15.31 15.31L19.25 19.25" stroke="#848995" strokeWidth="1.3125" strokeLinecap="round" />
  </svg>
);

export const BellIcon = ({ size = 24, className }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
      stroke="#2F3545"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.73 21a2 2 0 0 1-3.46 0"
      stroke="#2F3545"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronRightIcon = ({ size = 8, className }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 8 8"
    fill="none"
    className={className}
  >
    <path
      d="M3 2L5 4L3 6"
      stroke="#2F3545"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronLeftIcon = ({ size = 8, className }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 8 8"
    fill="none"
    className={className}
  >
    <path
      d="M5 2L3 4L5 6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronsLeftIcon = ({ size = 8, className }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 8 8"
    fill="none"
    className={className}
  >
    <path d="M4 2L2 4L4 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 2L4 4L6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ChevronsRightIcon = ({ size = 8, className }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 8 8"
    fill="none"
    className={className}
  >
    <path d="M2 2L4 4L2 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 2L6 4L4 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ThumbsUpIcon = ({ size = 15, className }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 15 15"
    fill="none"
    className={className}
  >
    <path
      d="M4.5 6.5V13.5H2.5C1.94772 13.5 1.5 13.0523 1.5 12.5V7.5C1.5 6.94772 1.94772 6.5 2.5 6.5H4.5ZM4.5 6.5L6.5 6.5C7.05228 6.5 7.5 6.05228 7.5 5.5V2.5C7.5 1.94772 7.94772 1.5 8.5 1.5C9.05228 1.5 9.5 1.94772 9.5 2.5V6.5H12.5C13.0523 6.5 13.5 6.94772 13.5 7.5V8L12.5 12.5C12.3674 13.0826 11.8474 13.5 11.25 13.5H4.5"
      stroke="#545C64"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MenuIcon = ({ size = 24, className }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M3 12h18M3 6h18M3 18h18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CloseIcon = ({ size = 24, className }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M18 6L6 18M6 6l12 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
