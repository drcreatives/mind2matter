import { Input, Avatar, SearchIcon } from '@/components/ui';

// Logout Arrow icon (from Figma)
function LogoutIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 3.09502C13.543 3.03241 13.0755 3 12.6 3C7.29807 3 3 7.02944 3 12C3 16.9706 7.29807 21 12.6 21C13.0755 21 13.543 20.9676 14 20.905" stroke="#2F3545" strokeWidth="2" strokeLinecap="round"/>
      <path d="M21 12H11M21 12C21 11.2998 19.0057 9.99153 18.5 9.5M21 12C21 12.7002 19.0057 14.0085 18.5 14.5" stroke="#2F3545" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Help/Question icon (from Figma)
function HelpIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.5833 6.07C15.3529 6.9357 15.7136 8.1141 15.5452 9.3647C15.2567 11.6734 13.5732 12.491 12.0822 12.491H11.962V13.0682C11.962 13.5973 11.5291 14.0302 11 14.0302C10.4709 14.0302 10.038 13.5973 10.038 13.0682V12.2986C10.038 11.505 10.3747 10.5671 12.0822 10.5671C13.0201 10.5671 13.5011 10.0861 13.6213 9.1242C13.6694 8.8115 13.6935 7.9698 13.1163 7.3446C12.6594 6.8395 11.9139 6.575 10.9038 6.575C8.7394 6.575 8.6673 7.9939 8.6673 8.1382C8.6673 8.6673 8.2344 9.1001 7.7053 9.1001C7.1762 9.1001 6.7433 8.6673 6.7433 8.1382C6.7433 7.1762 7.4889 4.6511 10.9038 4.6511C12.8999 4.6511 14.0061 5.4207 14.5833 6.07ZM10.9279 14.8478C10.6152 14.8478 10.3026 14.9681 10.0861 15.2086C9.8697 15.425 9.7254 15.7376 9.7254 16.0503C9.7254 16.3629 9.8457 16.6755 10.0861 16.892C10.3026 17.1084 10.6152 17.2527 10.9279 17.2527C11.2405 17.2527 11.5531 17.1325 11.7696 16.892C11.986 16.6755 12.1303 16.3629 12.1303 16.0503C12.1303 15.7376 12.0101 15.425 11.7696 15.2086C11.5531 14.9921 11.2645 14.8478 10.9279 14.8478ZM22.0625 11C22.0625 17.1084 17.1084 22.0625 11 22.0625C4.8916 22.0625 -0.0625 17.1084 -0.0625 11C-0.0625 4.8916 4.8916 -0.0625 11 -0.0625C17.1084 -0.0625 22.0625 4.8916 22.0625 11ZM20.1386 11C20.1386 5.9497 16.0503 1.86141 11 1.86141C5.9497 1.86141 1.86141 5.9497 1.86141 11C1.86141 16.0503 5.9497 20.1386 11 20.1386C16.0503 20.1386 20.1386 16.0503 20.1386 11Z" fill="#2F3545"/>
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
        {/* Logout Arrow */}
        <button className="p-1 hover:bg-primary-light rounded-full transition-colors cursor-pointer">
          <LogoutIcon />
        </button>

        {/* Help/Question */}
        <button className="p-1 hover:bg-primary-light rounded-full transition-colors cursor-pointer">
          <HelpIcon />
        </button>

        {/* User Avatar */}
        <Avatar initials="TT" size="md" />
      </div>
    </header>
  );
}
