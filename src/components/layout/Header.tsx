import { Input, Avatar, SearchIcon, BellIcon } from '@/components/ui';

// Settings/Question icon
function SettingsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="11" r="8" stroke="#2F3545" strokeWidth="1.5" />
      <path d="M11 7v1M11 14v1" stroke="#2F3545" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="11" cy="11" r="2" stroke="#2F3545" strokeWidth="1.5" />
    </svg>
  );
}

interface HeaderProps {
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  onSearchFocus?: () => void;
}

export function Header({ searchValue = '', onSearchChange, onSearchFocus }: HeaderProps) {
  return (
    <header className="flex items-center gap-2.25 px-6 py-4.5 bg-surface-white border-b border-border">
      {/* Search Bar */}
      <div className="w-50.75">
        <Input
          leftIcon={<SearchIcon />}
          placeholder="Search Here"
          value={searchValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSearchChange?.(e.target.value)}
          onFocus={onSearchFocus}
          className="bg-surface-input"
        />
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Right Icons */}
      <div className="flex items-center gap-5">
        {/* Notification Bell */}
        <button className="p-1 hover:bg-primary-light rounded-full transition-colors cursor-pointer">
          <BellIcon />
        </button>

        {/* Settings/Question */}
        <button className="p-1 hover:bg-primary-light rounded-full transition-colors cursor-pointer">
          <SettingsIcon />
        </button>

        {/* User Avatar */}
        <Avatar initials="TT" size="md" />
      </div>
    </header>
  );
}
