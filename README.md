# Modern Landing Page

A modern landing page starter built with React, TypeScript, Tailwind CSS, and Shadcn/UI.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **Shadcn/UI** - Re-usable component library
- **pnpm** - Fast, disk space efficient package manager

## Getting Started

### Install Dependencies

```bash
pnpm install
```

### Development Server

```bash
pnpm dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

## Adding Shadcn/UI Components

You can add components using the shadcn CLI:

```bash
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add card
pnpm dlx shadcn@latest add input
```

Components will be added to `src/components/ui/`

## Project Structure

```
├── src/
│   ├── components/      # React components
│   │   └── ui/         # Shadcn UI components
│   ├── lib/            # Utilities
│   │   └── utils.ts    # cn() utility for class merging
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles with Tailwind
├── components.json      # Shadcn/UI configuration
├── tailwind.config.ts   # Tailwind configuration
└── vite.config.ts      # Vite configuration
```

## Path Aliases

The project uses `@/` as an alias for the `src/` directory:

```typescript
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
```
