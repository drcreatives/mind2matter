import { Typography } from '@/components/ui';
import { SidebarLogo } from './SidebarLogo';
import { SidebarMenuItem } from './SidebarMenuItem';
import { menuItems } from '@/data/menuItems';
import {
  ReportingIcon,
  OverviewIcon,
  AssuranceIcon,
  RiskIcon,
  SmsIcon,
  DocumentsIcon,
  OperationalIcon,
  QaIcon,
  CaseReportsIcon,
} from '@/components/icons';

// Map icon names to actual icon components
const MenuIcons: Record<string, React.ReactNode> = {
  reporting: <ReportingIcon size={23} />,
  overview: <OverviewIcon size={23} />,
  assurance: <AssuranceIcon size={23} />,
  risk: <RiskIcon size={23} />,
  sms: <SmsIcon size={23} />,
  documents: <DocumentsIcon size={23} />,
  operational: <OperationalIcon size={23} />,
  qa: <QaIcon size={23} />,
  'case-reports': <CaseReportsIcon size={23} />,
};

interface SidebarProps {
  activeItem?: string;
  onItemClick?: (id: string) => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export function Sidebar({ activeItem = 'assurance', onItemClick, isCollapsed = false, onToggleCollapse }: SidebarProps) {
  return (
    <aside 
      className={`h-full bg-surface-white border-r border-border flex flex-col transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-18' : 'w-sidebar'
      }`}
    >
      {/* Logo */}
      <SidebarLogo isCollapsed={isCollapsed} onToggleCollapse={onToggleCollapse} />

      {/* Menu Section */}
      <div className={`flex-1 flex flex-col py-5 pb-8 ${isCollapsed ? 'px-2' : 'px-4'}`}>
        {/* Section Label */}
        {!isCollapsed && (
          <Typography variant="caption" color="muted" className="px-2.5 mb-3 uppercase tracking-wider">
            Search
          </Typography>
        )}

        {/* Menu Items */}
        <nav className="flex flex-col gap-0.75">
          {menuItems.map((item) => (
            <SidebarMenuItem
              key={item.id}
              icon={MenuIcons[item.icon] || MenuIcons.documents}
              label={item.label}
              isActive={activeItem === item.id}
              hasSubmenu={item.hasSubmenu}
              isCollapsed={isCollapsed}
              onClick={() => onItemClick?.(item.id)}
            />
          ))}
        </nav>
      </div>
    </aside>
  );
}
