# ADR 0002: Shitab AI Interactive Avatar & Expression System

- **Status**: Accepted
- **Date**: 2025-03-09
- **Author**: Shitab Mir

## Context

Following the establishment of our Feature-First Architecture ([ADR 0001](file:///Users/shitabmir/development/frontend/react/SHITAB_V1/adr/ADR0001-Project%20Structure.md)), the boilerplate module `feature_1` was replaced by `shitab_ai`—a flagship interactive AI avatar experience.

The feature replaces legacy boilerplate with a streamlined page centered on the title **"S.H.I.T.A.B."**, a responsive interactive avatar rendering PNG sprite sources on transparent backgrounds, and a bottom horizontal edit text comment box with a Send button. Unnecessary top bars, speech bubbles, and dead boilerplate files were purged to maintain an ultra-lean, performant codebase.

### Facial Impressions Supported
1. **Happiness**: Smiling with lips pulled up, cheeks raised, and crinkles at outer eye corners ("crow's feet").
2. **Sadness**: Inner corners of eyebrows pulled up and together, drooping eyelids, mouth corners turned down.
3. **Fear**: Eyebrows raised and pulled together, upper eyelids open wide, mouth stretched horizontally.
4. **Surprise**: Eyebrows raised high and arched, eyes opened wide, jaw dropped open.
5. **Anger**: Eyebrows pulled down in v-shape, eyes glaring, lips tightly pressed or square open.
6. **Disgust**: Nose wrinkled, upper lip pulled up, cheeks raised.
7. **Contempt**: One corner of mouth tightened and raised slightly (single-sided expression).
8. **Embarrassment**: Eyes looking down/away, head turned, small restrained smile.
9. **Pride**: Head tilted back slightly, direct eye contact, subtle confident smile.
10. **Confusion**: Eyebrows furrowed, eyes squinted, slight pursing or tilting of lips.

## Decision

### 1. Simplified Page Hierarchy
The user interface is structured strictly into three vertical sections inside [`Layout.tsx`](file:///Users/shitabmir/development/frontend/react/SHITAB_V1/src/components/layout/Layout.tsx):
1. **Top Heading**: Prominent "S.H.I.T.A.B." text header.
2. **Avatar Section**: Centralized avatar container rendering PNG sprite sources (`/sprites/sprite_${expression}.png`) with transparent backgrounds.
3. **Comment Box with Send Button**: Horizontally center-aligned input field (`flex-1 bg-transparent px-4 py-2.5`) with a Send button attached on its right.
4. **Footer**: Preserved at the bottom of the viewport.

### 2. Top Bar & Boilerplate Purge
- Removed the top navigation header bar (`Header.tsx`) to eliminate visual clutter.
- Purged unreferenced legacy features (`feature_2`, `feature_3`).
- Removed unused infrastructure files, stores, hooks, and services (`Spinner.tsx`, `useLocalStorage.ts`, `api.service.ts`, `useAppStore.ts`, `formatters.ts`, `axios.ts`, `supabase.ts`).
- Removed unused master grid asset `expressions_spritesheet_grid.png`.

### 3. PNG Sprite Rendering Architecture
- [`ShitabAiAvatar.tsx`](file:///Users/shitabmir/development/frontend/react/SHITAB_V1/src/features/shitab_ai/components/ShitabAiAvatar.tsx): Designed to consume transparent PNG sprite files directly (`/sprites/sprite_${expression}.png`), providing a modular asset contract that allows future artwork updates without code modifications.

### 4. Sentiment Analysis Engine
- Lightweight rule-based classifier (`analyzeCommentSentiment` in [`shitabAiUtils.ts`](file:///Users/shitabmir/development/frontend/react/SHITAB_V1/src/features/shitab_ai/utils/shitabAiUtils.ts)) mapping incoming user comments to the 10 expression states.

## Consequences

### Positive
- Ultra-clean, distraction-free page layout featuring "S.H.I.T.A.B." header, central avatar, and bottom comment box.
- Zero dead code or unreferenced boilerplate assets left in `src/` or `public/`.
- Pluggable PNG sprite pipeline for simple asset replacement.
- Sub-second build times (`npm run build`).

### Negative
- Direct PNG asset reliance requires ensuring newly added PNG sprites match expected naming conventions (`sprite_<expression>.png`).
