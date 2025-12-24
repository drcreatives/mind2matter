# SERA Search Screen — Implementation Tracker

## Progress Overview

| Phase | Status | Components |
|-------|--------|------------|
| 1. Project Setup | ✅ Complete | Vite, Tailwind v4, Framer Motion |
| 2. Design Tokens | ✅ Complete | CSS @theme variables |
| 3. UI Primitives | ✅ Complete | Button, Input, Card, Avatar, Icon, Typography |
| 4. Layout Components | ✅ Complete | Layout, Sidebar, Header, Footer |
| 5. Search Components | ⬜ Not Started | SearchBar, Dropdown, Results |
| 6. Mock Data | ✅ Complete | Types, sample data |
| 7. Animations | ⬜ Not Started | Framer Motion integration |
| 8. Responsive | ⬜ Not Started | Mobile, tablet breakpoints |
| 9. Polish | ⬜ Not Started | Hover states, accessibility |
| 10. Deployment | ⬜ Not Started | Vercel deployment |

**Legend**: ⬜ Not Started | 🔄 In Progress | ✅ Complete

---

## Phase 1: Project Setup

### Tasks
- [x] Initialize Vite + React + TypeScript project
- [x] Install Tailwind CSS v4 and configure with @tailwindcss/postcss
- [x] Install Framer Motion
- [x] Install additional dependencies (clsx, tailwind-merge, lucide-react)
- [x] Set up folder structure (components/ui, layout, search, navigation, hooks, data, types, lib, pages)
- [x] Configure path aliases (@/)
- [x] Add Google Fonts (Inter) - Cal Sans uses local fallback

### Commands
```bash
npm create vite@latest . -- --template react-ts
npm install -D tailwindcss @tailwindcss/postcss
npm install framer-motion clsx tailwind-merge lucide-react
```

---

## Phase 2: Design Tokens Configuration

### CSS @theme (Tailwind v4)
- [x] Add custom colors from Figma (primary, text variants, surface, border)
- [x] Add custom fonts (Inter via Google Fonts, Cal Sans local)
- [x] Add custom spacing (sidebar, sidebar-collapsed)
- [x] Add custom border radius (card: 10px, input: 8px)
- [x] Add shadow (dropdown)

### Colors to Add
```js
colors: {
  primary: {
    DEFAULT: '#0069E1',
    light: '#E5F0FC',
  },
  text: {
    primary: '#2F3545',
    secondary: '#070707',
    muted: '#91959F',
    placeholder: '#848995',
    light: 'rgba(7, 7, 7, 0.4)',
    date: 'rgba(7, 7, 7, 0.6)',
    pagination: '#474C5A',
    like: '#545C64',
  },
  surface: {
    page: '#FAFAFB',
    white: '#FFFFFF',
    input: '#F7F8FA',
    avatar: '#E3E4E9',
  },
  border: {
    DEFAULT: '#E6E7EC',
    light: '#EEF0F2',
  },
}
```

---

## Phase 3: UI Primitives

### Components to Build

| Component | File | Status | Notes |
|-----------|------|--------|-------|
| Button | `ui/Button.tsx` | ✅ | Variants: primary, secondary, ghost, pagination, pagination-active |
| Input | `ui/Input.tsx` | ✅ | Search variant with left/right icon support |
| Card | `ui/Card.tsx` | ✅ | Base container, hoverable with Framer Motion |
| Avatar | `ui/Avatar.tsx` | ✅ | Circular, initials or image, 3 sizes |
| Icon | `ui/Icon.tsx` | ✅ | SVG components: Search, Bell, Chevrons, ThumbsUp, Menu, Close |
| Typography | `ui/Typography.tsx` | ✅ | All text variants: logo, heading-lg/md, body, label, menu, caption |
| index.ts | `ui/index.ts` | ✅ | Barrel export |

### Button Variants
```tsx
// Primary (active pagination)
bg-primary text-white rounded-lg

// Ghost (sidebar menu)
hover:bg-primary-light text-text-primary

// Pagination
border border-border-light rounded-lg hover:bg-surface-input
```

---

## Phase 4: Layout Components

### Components to Build

| Component | File | Status | Notes |
|-----------|------|--------|-------|
| Layout | `layout/Layout.tsx` | ⬜ | Main wrapper with sidebar + content |
| Sidebar | `layout/Sidebar.tsx` | ⬜ | 227px fixed, responsive collapse |
| SidebarLogo | `layout/SidebarLogo.tsx` | ⬜ | "sera" logo with icon |
| SidebarMenuItem | `layout/SidebarMenuItem.tsx` | ⬜ | Icon + label + chevron |
| Header | `layout/Header.tsx` | ⬜ | Search + icons + avatar |
| Footer | `layout/Footer.tsx` | ⬜ | Copyright text centered |
| index.ts | `layout/index.ts` | ⬜ | Barrel export |

### Sidebar Menu Items (from Figma)
1. Reporting (with chevron)
2. Overview
3. Assurance
4. Risk Management
5. SMS Promotion
6. Documents
7. Operational
8. QA
9. Case Reports

---

## Phase 5: Search Components

### Components to Build

| Component | File | Status | Notes |
|-----------|------|--------|-------|
| SearchBar | `search/SearchBar.tsx` | ⬜ | Input with search icon |
| SearchDropdown | `search/SearchDropdown.tsx` | ⬜ | Animated suggestions list |
| SearchDropdownItem | `search/SearchDropdownItem.tsx` | ⬜ | Title + breadcrumb |
| SearchResults | `search/SearchResults.tsx` | ⬜ | "Showing X results" + list |
| SearchResultCard | `search/SearchResultCard.tsx` | ⬜ | Full article row |
| ArticleTitle | `search/ArticleTitle.tsx` | ⬜ | Title + like count |
| ArticleMeta | `search/ArticleMeta.tsx` | ⬜ | Breadcrumb + author + date |
| Pagination | `search/Pagination.tsx` | ⬜ | Full pagination bar |
| index.ts | `search/index.ts` | ⬜ | Barrel export |

### SearchResultCard Structure
```
┌─────────────────────────────────────────────────────────────┐
│ What to look for in an Investigation            👍 1       │
│ SERA Help > SERA User Guides > Safety...   ASM Feb 25...   │
│ Personnel, Property and activities are: reported and...    │
└─────────────────────────────────────────────────────────────┘
```

### Pagination Structure
```
[<<] [<] [1/9] [>] [>>]  [1] [2] [3] [4] [5] [...] [9]  |  Rows per page [20]
```

---

## Phase 6: Mock Data

### Files to Create

| File | Status | Content |
|------|--------|---------|
| `types/search.ts` | ⬜ | SearchResult, SearchSuggestion interfaces |
| `types/navigation.ts` | ⬜ | MenuItem interface |
| `data/menuItems.ts` | ⬜ | Sidebar navigation data |
| `data/searchResults.ts` | ⬜ | 8 sample search results |
| `data/searchSuggestions.ts` | ⬜ | 5 dropdown suggestions |

### Type Definitions
```typescript
interface SearchResult {
  id: string;
  title: string;
  description: string;
  breadcrumb: string;
  author: string;
  date: string;
  likes: number;
}

interface SearchSuggestion {
  id: string;
  title: string;
  breadcrumb: string;
}

interface MenuItem {
  id: string;
  label: string;
  icon: string;
  hasSubmenu?: boolean;
}
```

---

## Phase 7: Animations

### Animations to Implement

| Element | Animation | Status |
|---------|-----------|--------|
| Search Dropdown | Fade + slide up + scale | ⬜ |
| Dropdown Items | Stagger children (30ms) | ⬜ |
| Result Cards | Stagger on mount | ⬜ |
| Card Hover | Subtle scale + bg color | ⬜ |
| Sidebar Mobile | Slide from left | ⬜ |
| Page Mount | Fade in | ⬜ |
| Pagination Tap | Scale feedback | ⬜ |

---

## Phase 8: Responsive Design

### Breakpoint Implementation

| Breakpoint | Sidebar | Header | Content | Status |
|------------|---------|--------|---------|--------|
| Mobile (<768px) | Drawer | Hamburger + search | Full width | ⬜ |
| Tablet (768-1024px) | Icons only (60px) | Full | Adjusted padding | ⬜ |
| Desktop (>1024px) | Full (227px) | Full | As designed | ⬜ |

### Mobile Navigation
- [ ] Add hamburger menu icon to header
- [ ] Create MobileNav drawer component
- [ ] Add overlay when drawer is open
- [ ] Close on outside click or navigation

---

## Phase 9: Polish & Accessibility

### Hover/Focus States
- [ ] Sidebar menu items: `bg-primary-light` on hover
- [ ] Search result cards: `bg-primary-light` on hover
- [ ] Pagination buttons: border color change on hover
- [ ] Links: underline on hover

### Accessibility
- [ ] Add aria-labels to search input
- [ ] Add role="search" to search form
- [ ] Keyboard navigation for dropdown (↑↓ Enter Esc)
- [ ] Focus trap in mobile nav drawer
- [ ] Skip to content link
- [ ] Semantic HTML structure

### Edge Cases
- [ ] Empty search results state
- [ ] Long text truncation
- [ ] Loading states (skeleton)

---

## Phase 10: Deployment

### Pre-Deployment Checklist
- [ ] Run production build (`npm run build`)
- [ ] Test build locally (`npm run preview`)
- [ ] Verify all assets load correctly
- [ ] Check console for errors
- [ ] Test responsive on real devices
- [ ] Verify Figma design match

### Vercel Deployment
- [ ] Create vercel.json (if needed)
- [ ] Deploy via Vercel CLI or MCP
- [ ] Verify deployment URL works
- [ ] Share URL for review

---

## Icons Checklist

### Icons to Export from Figma

| Icon | Node ID | Exported | Implemented |
|------|---------|----------|-------------|
| Search | `767:111363` | ⬜ | ⬜ |
| Bell/Notification | `767:111368` | ⬜ | ⬜ |
| User/Settings | `767:111371` | ⬜ | ⬜ |
| Like/Thumbs Up | `767:111387` | ⬜ | ⬜ |
| Chevron Right | Various | ⬜ | ⬜ |
| Chevron Left | Pagination | ⬜ | ⬜ |
| Double Chevron Left | Pagination | ⬜ | ⬜ |
| Double Chevron Right | Pagination | ⬜ | ⬜ |
| Logo Icon | `I767:111358;110:14117` | ⬜ | ⬜ |
| Reporting Icon | Menu | ⬜ | ⬜ |
| Overview Icon | Menu | ⬜ | ⬜ |
| Assurance Icon | Menu | ⬜ | ⬜ |
| Risk Management Icon | Menu | ⬜ | ⬜ |
| SMS Promotion Icon | Menu | ⬜ | ⬜ |
| Documents Icon | Menu | ⬜ | ⬜ |
| Operational Icon | Menu | ⬜ | ⬜ |
| QA Icon | Menu | ⬜ | ⬜ |
| Case Reports Icon | Menu | ⬜ | ⬜ |

---

## Known Issues / Notes

_Track any issues or important notes here during implementation._

1. 

---

## Changelog

| Date | Phase | Changes |
|------|-------|---------|
| 2024-12-24 | Planning | Created INSTRUCTIONS.md and IMPLEMENTATION.md |

---

## Final Review Checklist

Before submission:
- [ ] Matches Figma design pixel-perfect
- [ ] All animations smooth (60fps)
- [ ] Responsive on all breakpoints
- [ ] No console errors
- [ ] Accessibility basics covered
- [ ] Clean, organized code
- [ ] Components properly modularized
- [ ] TypeScript types complete
- [ ] Deployed and accessible via public URL
