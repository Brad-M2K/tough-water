# Refactor Plan (Step-by-Step)

## Goal

Refactor current homepage/header architecture into cleaner components and token-driven styling with minimal risk, no unnecessary complexity, and no uncontrolled global CSS changes.

## Guardrails (Hard Rules)

- Keep behavior identical unless the step explicitly changes behavior.
- No broad global CSS overrides beyond token additions in `src/app/globals.css`.
- No new animation/state logic unless required by the current step.
- Reuse existing shadcn primitives where practical.
- Avoid adding abstractions that are used only once.
- Run lint after each completed step.
- After each step: stop, report changes + file list + what to verify visually.

## Execution Workflow

1. Implement exactly one step.
2. Run targeted lint.
3. Report back with:
   - What changed
   - Files touched
   - Quick visual checks for you
4. Wait for your approval before starting next step.

## Step Checklist

- [x] **Step 1: Add brand theme tokens**
  - Add brand tokens in `src/app/globals.css` (e.g. `--brand`, `--brand-accent`, `--brand-success`, `--brand-foreground`) and map to Tailwind theme aliases in `@theme inline`.
  - No component changes yet.
  - Acceptance: No visual change expected; tokens available for use.

- [x] **Step 2: Centralize shared marketing/nav data**
  - Create `src/lib/site-content.ts` for repeated arrays (service links, compliance links, primary nav links, hero highlights, accreditations).
  - Replace duplicated local arrays in `page`, `hero-section`, `site-header`.
  - Acceptance: Existing UI unchanged; data sourced from one place.

- [x] **Step 3: Introduce reusable WaveButton component**
  - Create `src/components/ui/wave-button.tsx` wrapping existing wave clip-path animation.
  - Replace manual wave class strings in hero/header CTA buttons.
  - Acceptance: Same visuals; CTA style managed in one component.

- [ ] **Step 4: Split header into Desktop and Mobile components**
  - Create `src/components/header/desktop-nav.tsx` and `src/components/header/mobile-nav-drawer.tsx`.
  - Keep shared state in `site-header.tsx`; pass props down.
  - Acceptance: Behavior identical; file readability improved.

- [ ] **Step 5: Normalize mobile hero typography scale**
  - In `hero-section`, establish a consistent type scale (title > subtitle > body; card title > card list > card body) using clear tokenized/text utilities.
  - Mobile-only tuning; desktop unchanged.
  - Acceptance: Better proportional rhythm on mobile.

- [ ] **Step 6: Extract repeated section shells in page**
  - Create a small reusable section wrapper and/or service card component for repeated `bg-card rounded-2xl border` blocks.
  - Apply in `page.tsx` only where duplication is obvious.
  - Acceptance: Less repeated JSX; no visual regression.

- [ ] **Step 7: Token migration pass in components**
  - Replace hardcoded colors (`#36467F`, `#4A6EA7`, etc.) with token-based utility usage across `hero-section`, `site-header`, `navigation-menu`.
  - Keep exact visual look by mapping tokens to current values first.
  - Acceptance: One-source color control.

- [ ] **Step 8: shadcn alignment pass**
  - Evaluate and apply only useful primitives:
    - `Button` (if wave wrapper composes from it cleanly)
    - `Separator` in hero/services card
    - `Card` where repeated shells fit
  - Do not force migration where it adds complexity.
  - Acceptance: Cleaner consistency with shadcn patterns.

- [ ] **Step 9: Final cleanup + verification**
  - Remove dead code/classes and invalid utilities.
  - Run lint over touched files.
  - Provide final summary with any residual tradeoffs.

## Known Issues To Keep In Mind

- Invalid/likely custom class usages should be reviewed during cleanup (e.g. `max-w-480`, `text-md`, `flex-center` if not defined).
- Breakpoint consistency must stay aligned (`lg` split for desktop nav + desktop hero).

## Notes

This plan intentionally avoids “extra noodle code”: each step is incremental, testable, and reversible.
