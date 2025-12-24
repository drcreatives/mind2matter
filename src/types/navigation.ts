export interface MenuItem {
  id: string;
  label: string;
  icon: string;
  path?: string;
  hasSubmenu?: boolean;
}

export interface MenuSection {
  id: string;
  label: string;
  items: MenuItem[];
}
