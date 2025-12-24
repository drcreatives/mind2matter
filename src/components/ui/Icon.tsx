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
        className={cn('shrink-0', className)}
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
      d="M3.5 7.495C3.342 7.495 3.187 7.448 3.056 7.36C2.924 7.272 2.821 7.147 2.761 7.001C2.7 6.855 2.685 6.694 2.715 6.539C2.746 6.384 2.822 6.241 2.934 6.13L5.569 3.495L2.934 0.861C2.789 0.71 2.708 0.508 2.71 0.298C2.712 0.088 2.796 -0.112 2.944 -0.261C3.092 -0.409 3.293 -0.493 3.503 -0.495C3.713 -0.497 3.915 -0.416 4.066 -0.271L7.266 2.929C7.416 3.08 7.5 3.283 7.5 3.495C7.5 3.707 7.416 3.911 7.266 4.061L4.066 7.261C3.991 7.335 3.903 7.394 3.806 7.434C3.709 7.475 3.605 7.495 3.5 7.495Z"
      fill="currentColor"
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
      d="M4.5 7.495C4.658 7.495 4.813 7.448 4.944 7.36C5.076 7.272 5.178 7.147 5.239 7.001C5.3 6.855 5.315 6.694 5.284 6.539C5.254 6.384 5.177 6.241 5.066 6.13L2.431 3.495L5.066 0.861C5.211 0.71 5.292 0.508 5.29 0.298C5.288 0.088 5.204 -0.112 5.056 -0.261C4.907 -0.409 4.707 -0.493 4.497 -0.495C4.287 -0.497 4.085 -0.416 3.934 -0.271L0.734 2.929C0.584 3.08 0.5 3.283 0.5 3.495C0.5 3.707 0.584 3.911 0.734 4.061L3.934 7.261C4.009 7.335 4.097 7.394 4.194 7.434C4.291 7.475 4.395 7.495 4.5 7.495Z"
      fill="currentColor"
      fillOpacity="0.25"
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
    <path
      d="M7.2 8C7.358 8 7.513 7.953 7.644 7.865C7.776 7.777 7.878 7.652 7.939 7.506C8 7.36 8.015 7.199 7.985 7.044C7.954 6.889 7.877 6.746 7.766 6.634L5.131 4L7.766 1.366C7.911 1.215 7.992 1.013 7.99 0.803C7.988 0.593 7.904 0.393 7.756 0.244C7.608 0.096 7.407 0.012 7.197 0.01C6.987 0.008 6.785 0.089 6.634 0.234L3.434 3.434C3.284 3.584 3.2 3.788 3.2 4C3.2 4.212 3.284 4.416 3.434 4.566L6.634 7.766C6.709 7.84 6.797 7.899 6.894 7.939C6.991 7.979 7.095 8 7.2 8ZM0.8 8C1.012 8 1.216 7.916 1.366 7.766C1.516 7.616 1.6 7.412 1.6 7.2V0.8C1.6 0.588 1.516 0.384 1.366 0.234C1.216 0.084 1.012 0 0.8 0C0.588 0 0.384 0.084 0.234 0.234C0.084 0.384 0 0.588 0 0.8V7.2C0 7.412 0.084 7.616 0.234 7.766C0.384 7.916 0.588 8 0.8 8Z"
      fill="currentColor"
      fillOpacity="0.25"
    />
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
    <path
      d="M0.8 8C0.642 8 0.487 7.953 0.356 7.865C0.224 7.777 0.121 7.652 0.061 7.506C0 7.36 -0.015 7.199 0.015 7.044C0.046 6.889 0.122 6.746 0.234 6.634L2.869 4L0.234 1.366C0.089 1.215 0.008 1.013 0.01 0.803C0.012 0.593 0.096 0.393 0.244 0.244C0.392 0.096 0.593 0.012 0.803 0.01C1.013 0.008 1.215 0.089 1.366 0.234L4.566 3.434C4.716 3.584 4.8 3.788 4.8 4C4.8 4.212 4.716 4.416 4.566 4.566L1.366 7.766C1.291 7.84 1.203 7.899 1.106 7.939C1.009 7.979 0.905 8 0.8 8ZM7.2 8C6.988 8 6.784 7.916 6.634 7.766C6.484 7.616 6.4 7.412 6.4 7.2V0.8C6.4 0.588 6.484 0.384 6.634 0.234C6.784 0.084 6.988 0 7.2 0C7.412 0 7.616 0.084 7.766 0.234C7.916 0.384 8 0.588 8 0.8V7.2C8 7.412 7.916 7.616 7.766 7.766C7.616 7.916 7.412 8 7.2 8Z"
      fill="currentColor"
    />
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
