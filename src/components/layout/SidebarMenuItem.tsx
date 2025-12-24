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
        'w-full flex items-center gap-[10px] py-[8px] rounded-[10px]',
        isCollapsed ? 'justify-center px-[8px]' : 'px-[10px]',
        'text-[13px] leading-[1.21] font-medium text-text-primary',
        'transition-colors duration-150 cursor-pointer',
        'hover:bg-primary-light',
        isActive && 'bg-primary-light text-primary'
      )}
    >
      <span className="flex-shrink-0 w-[23px] h-[23px] flex items-center justify-center">
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
