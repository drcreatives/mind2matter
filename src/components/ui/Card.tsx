import { forwardRef } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps extends Omit<HTMLMotionProps<'div'>, 'ref'> {
  hoverable?: boolean;
  selected?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverable = false, selected = false, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hoverable ? { scale: 1.002 } : undefined}
        transition={{ duration: 0.15 }}
        className={cn(
          'bg-surface-white rounded-[10px] border-b border-border',
          hoverable && 'cursor-pointer hover:bg-primary-light transition-colors duration-150',
          selected && 'bg-primary-light',
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';
