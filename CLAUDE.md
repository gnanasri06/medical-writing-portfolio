# CLAUDE.md — medical-writing-portfolio

## What this project is
A production-ready single-page portfolio for **Gnanasri**, a Certified Medical Writer.
Deployed to GitHub Pages at `https://gnanasri06.github.io/medical-writing-portfolio/`.

## Tech stack
- Next.js 14.2.5 (App Router) + TypeScript + Tailwind CSS v3.4
- `output: 'export'` — static HTML export for GitHub Pages
- `basePath: '/medical-writing-portfolio'`
- `assetPrefix` is **production-only** (`process.env.NODE_ENV === 'production'`). In dev mode it must be `''` (empty string) — if it is set to the basePath prefix in dev, the CSS URL in HTML gets the prefix but the dev server serves `_next/` routes without it, causing a 404 and all styles to disappear.
- Tailwind config: `tailwind.config.ts` (TypeScript — supported in v3.3+)
- Font: Montserrat via `next/font/google` (weights 300/400/500/700), CSS variable `--font-montserrat`
- `src/lib/data.ts` exports `BP = '/medical-writing-portfolio'` — prefix all `public/` asset paths with this constant

## Design system (Meta-inspired)
| Token | Value |
|---|---|
| canvas | `#FFFFFF` |
| surface-soft | `#F5F7FA` |
| hairline-soft | `#E9EBED` |
| ink-deep | `#0A1317` |
| ink | `#1C2B33` |
| charcoal | `#3A4750` |
| slate | `#5B6770` |
| steel | `#8A949C` |
| primary/cobalt | `#0064E0` |
| primary-deep | `#0143B5` |
| success | `#31A24C` |

Pill buttons → `rounded-full`. Feature cards → `rounded-2xl`. Photo cards → `rounded-[32px]`.

## Content rule — DO NOT INVENT COPY
All text must come from `Full_Context.md` or `Portfolio_Content_Gnanasri.md.md` only.
Do not add statistics, credentials, or copy that is not in those source files.

## Key files
| File | Purpose |
|---|---|
| `next.config.js` | basePath, assetPrefix (prod-only), static export |
| `tailwind.config.ts` | Custom design tokens |
| `src/lib/data.ts` | `BP` constant, 12 projects, 3 testimonials, 8 FAQs |
| `src/app/layout.tsx` | Root layout, Montserrat font, SEO metadata |
| `src/app/globals.css` | Tailwind directives + base styles + accordion CSS |
| `src/components/Nav.tsx` | Sticky nav, scroll-based active section, hamburger drawer |
| `src/components/HeroSection.tsx` | Hero — NO stats bar, NO floating badge |
| `src/components/ProjectsSection.tsx` | 12 cards — click opens PDF in new tab |
| `public/projects/*.pdf` | 12 PDF samples (committed) |
| `.github/workflows/deploy.yml` | GitHub Actions: build → upload → deploy-pages |

## 12 project PDF slugs
`tirzepatide-obesity-msl-deck`, `cap-ars-clinical-compendium`, `iron-deficiency-heart-failure-case-report`, `lipid-times-newsletter`, `oral-minoxidil-product-monograph`, `statin-comparison-lbl`, `endometriosis-video-script`, `sun-care-awareness-booklet`, `tka-protocol-synopsis`, `glaucoma-bioequivalence-icf`, `research-compliance-blog`, `compliance-platform-landing-page`

## Branching
Active feature branch: `feature/MWP-0001` (cut from `main`).
`main` is the deploy branch — GitHub Actions triggers on push to `main`.

## Running locally
```
npm run dev        # dev server at http://localhost:3000/medical-writing-portfolio/
npm run build      # static export → out/
```

## GitHub / deployment
- Repo: `gnanasri06/medical-writing-portfolio`
- Pages enabled via GitHub Actions workflow (`build_type=workflow`)
- Push to `main` triggers auto-deploy
- Auth: GitHub CLI (`gh`) v2.94.0, authenticated via device OAuth

## What NOT to do
- Do not set `assetPrefix` unconditionally — it breaks dev CSS loading (see above)
- Do not add a stats bar to the hero (user removed: 4+ Years / 12 Projects / 9 Areas / 7+ Brands)
- Do not add a "Certified Medical Writer" floating badge to the hero
- Do not add a dot to the Nav wordmark "Gnanasri"
- Do not invent copy not present in the source content files
