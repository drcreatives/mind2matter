import { type ReactNode, useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  onSearchFocus?: () => void;
}

export function Layout({ children, searchValue, onSearchChange, onSearchFocus }: LayoutProps) {
  const [activeMenuItem, setActiveMenuItem] = useState('assurance');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-surface-page overflow-hidden">
      {/* Sidebar */}
      <Sidebar 
        activeItem={activeMenuItem} 
        onItemClick={setActiveMenuItem}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header
          searchValue={searchValue}
          onSearchChange={onSearchChange}
          onSearchFocus={onSearchFocus}
        />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
