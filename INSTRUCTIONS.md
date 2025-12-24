# SERA Search Screen — Instructions

## Project Overview

This project implements a single search screen from the SERA Figma design as a technical test task. The implementation follows a modular, component-based architecture using React, TypeScript, and Tailwind CSS.

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.x | UI library |
| TypeScript | 5.x | Type safety |
| Vite | 5.x | Build tool & dev server |
| Tailwind CSS | 3.x | Utility-first styling |
| Framer Motion | 11.x | Animations & micro-interactions |
| Lucide React | Latest | Fallback icons (if needed) |

---

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or pnpm package manager
- Git

### Installation

```bash
# Navigate to project directory
cd mind2matter

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

```
mind2matter/
├── public/
│   └── assets/
│       └── icons/           # SVG icons exported from Figma
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI primitives
│   │   ├── layout/          # Layout components (Sidebar, Header, etc.)
│   │   ├── search/          # Search-specific components
│   │   └── navigation/      # Navigation components
│   ├── hooks/               # Custom React hooks
│   ├── data/                # Mock data files
│   ├── types/               # TypeScript type definitions
│   ├── lib/                 # Utility functions
│   ├── styles/              # Global styles
│   ├── pages/               # Page components
│   ├── App.tsx              # Root component
│   └── main.tsx             # Entry point
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── package.json             # Dependencies & scripts
```

---

## Design Tokens (from Figma)

### Colors

```css
/* Primary */
--color-primary: #0069E1;
--color-primary-light: #E5F0FC;

/* Text */
--color-text-primary: #2F3545;
--color-text-secondary: #070707;
--color-text-muted: #91959F;
--color-text-placeholder: #848995;

/* Backgrounds */
--color-bg-page: #FAFAFB;
--color-bg-white: #FFFFFF;
--color-bg-input: #F7F8FA;
--color-bg-avatar: #E3E4E9;

/* Borders */
--color-border: #E6E7EC;
--color-border-light: #EEF0F2;
```

### Typography

| Style | Font | Weight | Size |
|-------|------|--------|------|
| Logo | Cal Sans | 600 | 39px |
| Heading Large | Inter | 600 | 18px |
| Heading Medium | Inter | 600 | 17px |
| Body | Inter | 400 | 15px |
| Body Small | Inter | 400 | 14px |
| Label | Inter | 500 | 14px |
| Menu | Inter | 500 | 13px |
| Caption | Inter | 500 | 12px |

### Spacing

| Element | Padding/Gap |
|---------|-------------|
| Sidebar width | 227px |
| Menu item | 8px 10px |
| Section | 23px |
| Header | 18px 24px |
| Card item | 25px 20px |
| Border radius (cards) | 10px |
| Border radius (inputs) | 8px |

---

## Component Guidelines

### Naming Conventions
- **Components**: PascalCase (e.g., `SearchBar.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useDebounce.ts`)
- **Types**: PascalCase with descriptive names (e.g., `SearchResult`)
- **Files**: Match component name exactly

### Component Structure

```tsx
// Example component structure
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ComponentProps {
  // Props definition
}

export function Component({ prop1, prop2 }: ComponentProps) {
  // Hooks first
  // Event handlers
  // Render
  return (
    <motion.div>
      {/* JSX */}
    </motion.div>
  );
}
```

### Styling Rules
1. Use Tailwind utility classes as primary styling method
2. Use `cn()` utility for conditional class merging
3. Follow mobile-first responsive design
4. Match Figma spacing/colors exactly using design tokens

---

## Responsive Breakpoints

| Breakpoint | Width | Sidebar Behavior |
|------------|-------|------------------|
| Mobile | < 768px | Hidden, hamburger menu |
| Tablet | 768px - 1024px | Collapsed (icons only) |
| Desktop | > 1024px | Fully expanded (227px) |

---

## Animation Guidelines

### Framer Motion Patterns

```tsx
// Dropdown animation
const dropdownVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: 'spring', damping: 25, stiffness: 300 }
  },
  exit: { opacity: 0, y: -8, scale: 0.98 }
};

// Stagger children
const containerVariants = {
  visible: {
    transition: { staggerChildren: 0.03 }
  }
};

// List item
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};
```

---

## Deployment

### Vercel Deployment

```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Deploy
vercel

# Or use the Vercel MCP tool
```

### Environment Variables
None required for this test implementation (using mock data).

---

## Testing Checklist

- [ ] Search bar renders with placeholder text
- [ ] Typing shows dropdown with suggestions
- [ ] Clicking outside closes dropdown
- [ ] Search results display with correct styling
- [ ] Pagination works (visual only for mock data)
- [ ] Sidebar navigation items render correctly
- [ ] Responsive layout works on mobile/tablet/desktop
- [ ] Animations are smooth and performant
- [ ] All text matches Figma design
- [ ] Colors match design tokens exactly

---

## Figma Reference

- **Main Screen**: `node-id=767-111356`
- **Search Dropdown**: `node-id=767-111480`
- **File Key**: `IpQ9iQ6fim6z0QFh23KWHw`

---

## Contact

For questions about the implementation, refer to the Figma design or the `IMPLEMENTATION.md` file for detailed progress tracking.
