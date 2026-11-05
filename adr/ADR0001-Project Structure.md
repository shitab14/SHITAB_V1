# ADR 0001: Feature-First & Layered Project Structure

- **Status**: Accepted
- **Date**: 2025-03-09
- **Author**: Shitab Mir

## Context

When developing modern web applications with React, TypeScript, and Vite, software architecture decisions impact maintainability, developer velocity, build speeds, and team scaling. Unstructured or purely layer-driven structures (e.g., placing all components in `components/`, all hooks in `hooks/`) often suffer from:
1. High cognitive load when navigating related feature logic scattered across disparate folders.
2. Tight coupling across unrelated domains.
3. High friction when scaling across multiple developers or teams.

We needed a clean, domain-driven, modular structure that combines the best of **Feature-First Architecture** with a clear **Layered Infrastructure Strategy**.

## Decision

We adopt a **Feature-First & Layered Architecture** for the project structure under `src/`.

### Directory Overview & Responsibilities

```
src/
├── app/                  # Application initialization & global providers/routes/styles
│   ├── providers/        # React Context, React Query, Theme Providers
│   ├── routes/           # Core routing & page layout wiring
│   └── styles/           # Tailwind / CSS global entry points
│
├── assets/               # Static public assets, images, icons, SVGs
│
├── components/           # Shared, domain-agnostic UI primitives
│   ├── ui/               # Atomic design components (Button, Input, Card, Modal)
│   ├── feedback/         # Spinners, Toast notifications, Alert banners
│   └── layout/           # App Header, Sidebar, Footer, Layout wrappers
│
├── config/               # Environment variables & runtime constants
│   ├── env.ts            # Validated environment variables (import.meta.env)
│   └── constants.ts      # App-wide fixed constants
│
├── features/             # Business domain feature modules (Feature-First)
│   ├── feature_1/        # Encapsulated module
│   │   ├── api/          # Domain-specific API calls & endpoint definitions
│   │   ├── components/   # Domain-specific UI components
│   │   ├── hooks/        # Domain-specific React hooks
│   │   ├── types/        # Domain-specific TypeScript interfaces/types
│   │   ├── utils/        # Domain-specific formatting & logic helpers
│   │   └── index.ts      # Barrel file exposing feature's public API
│   ├── feature_2/        # Additional domain feature
│   └── feature_3/        # Additional domain feature
│
├── hooks/                # Shared, domain-agnostic custom React hooks (useLocalStorage, useDebounce)
│
├── lib/                  # Third-party library initializations & singletons
│   ├── axios.ts          # Configured Axios HTTP client instance
│   ├── react-query.ts    # React Query client instance & default options
│   └── supabase.ts       # Supabase client singleton
│
├── services/             # General infrastructure & communication services (e.g. api.service)
│
├── store/                # Global state stores (Zustand)
│
├── types/                # Generic, application-wide TypeScript interfaces & type definitions
│
└── utils/                # Shared utility functions (classnames `cn`, date/currency formatters)
```

### Key Architectural Guidelines

1. **Feature Encapsulation**:
   - Each domain feature resides in `src/features/<feature_name>/`.
   - Internal implementations stay private to the feature folder.
   - Only expose public components, hooks, or utilities via the feature's barrel `index.ts`.
   - Cross-feature dependencies should be minimized; if two features share significant logic, extract that logic to `components/`, `hooks/`, `services/`, or `utils/`.

2. **Shared Components vs. Feature Components**:
   - Generic UI elements without business domain knowledge belong in `src/components/ui/`.
   - Feature-specific UI elements with domain logic or domain state belong in `src/features/<feature_name>/components/`.

3. **State Management**:
   - Prefer local state (`useState`, `useReducer`) or feature-scoped state where possible.
   - Use React Query (`src/lib/react-query.ts`) for server state management.
   - Use Zustand (`src/store/useAppStore.ts`) for cross-cutting global client state (e.g. user session, theme, global settings).

4. **External Services & Libraries**:
   - All external client libraries (Axios, Supabase, React Query) are initialized in `src/lib/`.
   - Do not directly call raw third-party SDK methods inside UI components; interact through typed services in `src/services/` or feature API helpers in `src/features/<feature>/api/`.

## Build & Deployment Workflow

### Local Development
- Scripts in `scripts/run.sh` launch Vite's instant dev server on `http://localhost:5173`.

### Vercel Deployment Workflow
1. **Automatic Detection**: Vercel natively detects Vite projects.
2. **Build Command**: `npm run build` (runs TypeScript build check `tsc -b` followed by `vite build`).
3. **Output Directory**: `dist`.
4. **Environment Variables**: Configure variables in Vercel dashboard matching keys in `src/config/env.ts` (e.g. `VITE_API_BASE_URL`, `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`).
5. **Vercel Script**: `scripts/build_vercel.sh` provides a reproducible production build pipeline for CI/CD or Vercel build overrides.

## Consequences

### Positive
- High cohesion and low coupling across features.
- Easy to find code associated with any business domain.
- Fast onboarding for developers.
- Clean tree-shaking and isolation.

### Negative
- Requires discipline to enforce module boundaries and prevent bypass of feature barrel `index.ts` files.
