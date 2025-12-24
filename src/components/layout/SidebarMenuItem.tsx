import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ChevronIcon } from '@/components/icons';

interface SidebarMenuItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  hasSubmenu?: boolean;
  isCollapsed?: boolean;
  onClick?: () => void;
}

export function SidebarMenuItem({
  icon,
  label,
  isActive = false,
  hasSubmenu = false,
  isCollapsed = false,
  onClick,
}: SidebarMenuItemProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      title={isCollapsed ? label : undefined}
      className={cn(
        'w-full flex items-center gap-2.5 py-2 rounded-card',
        isCollapsed ? 'justify-center px-2' : 'px-2.5',
        'text-[13px] leading-[1.21] font-medium text-text-primary',
        'transition-colors duration-150 cursor-pointer',
        'hover:bg-primary-light',
        isActive && 'bg-primary-light text-primary'
      )}
    >
      <span className="shrink-0 w-5.75 h-5.75 flex items-center justify-center">
        {icon}
      </span>
      {!isCollapsed && (
        <>
          <span className="flex-1 text-left">{label}</span>
          {hasSubmenu && (
            <ChevronIcon size={10} />
          )}
        </>
      )}
    </motion.button>
  );
}
