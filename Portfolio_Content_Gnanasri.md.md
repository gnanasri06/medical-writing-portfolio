=== GOAL ===
A modern, single-page (one-scroll) professional portfolio for a medical writer, built with
Next.js, styled to match the Meta design system in meta-deign.md, fully responsive/mobile-first,
deployed via GitHub Pages.

=== TECH STACK ===
- Next.js (latest, App Router) + TypeScript + Tailwind CSS.
- Static export for GitHub Pages. In next.config.js set:
  output: 'export', images: { unoptimized: true }, trailingSlash: true,
  basePath: '/medical-writing-portfolio', assetPrefix: '/medical-writing-portfolio/'.
- Create public/.nojekyll.
- IMPORTANT: because basePath is set, prefix every /public asset reference (photo, PDFs,
  favicon) with the basePath. Export a constant `const BP = '/medical-writing-portfolio'` and
  use `${BP}/profile.jpg`, `${BP}/projects/<slug>.pdf`, etc. Next handles /_next/ assets
  automatically via assetPrefix, but manual <img>/<a href> public paths must include BP.

=== DESIGN SYSTEM (from meta-deign.md — translate the tokens to these concrete values) ===
Optimistic VF is proprietary; use Google Font "Montserrat" (weights 300,400,500,700) as the
display + body face, with system-ui fallback. Apply slightly negative letter-spacing
(-0.16px) on body text.

Colors:
  canvas/page bg ........ #FFFFFF
  surface-soft .......... #F5F7FA   (thumbnail/card alt bg, search pill rest)
  hairline .............. #DADDE1   (1px input border)
  hairline-soft ......... #E9EBED   (card + section dividers)
  ink-deep .............. #0A1317   (headlines, dark promo sections, black pill CTA)
  ink ................... #1C2B33   (body text)
  charcoal .............. #3A4750   (tertiary text)
  slate ................. #5B6770   (section-header copy)
  steel ................. #8A949C   (captions, footer links)
  primary (cobalt) ...... #0064E0   (the ONE conversion accent — see button rules)
  primary-deep .......... #0143B5   (pressed/active, active link)
  primary-soft .......... rgba(0,100,224,0.12)  (info callout tints)
  success ............... #31A24C
  warning ............... #FFD33D

Typography scale (px / weight / line-height):
  hero-display 64/500/1.16   display-lg 48/500/1.17   heading-lg 36/500/1.28
  heading-md 28/300/1.21 (editorial subheads, LIGHT weight — signature rhythm)
  heading-sm 24/500/1.25     subtitle-lg 18/700/1.44   body-md 16/400/1.50
  body-sm 14/400/1.43        button 14/700              caption 12/400

Shape language:
  - Pill buttons ALWAYS: border-radius 100px (rounded-full). Never square a button.
  - Photographic / showcase cards: 32px radius (rounded-[32px]).
  - Standard feature + accordion + icon tiles: 16px radius. Accessory/quote tiles: 24px.
  - Color/avatar swatches: full circle.

Elevation: predominantly FLAT. Cards use a 1px hairline-soft border, NO heavy shadows.
Only a sticky element (e.g. mobile contact bar) may use a subtle shadow
rgba(20,22,26,0.3) 0 1px 4px 0.

Buttons (dual-CTA signature):
  - button-primary: black pill — bg ink-deep, white text, padding 14px 30px, rounded-full.
    Use for marketing CTAs ("View My Work").
  - button-secondary: ghost pill — transparent bg, ink-deep text, 2px solid ink-deep border,
    padding 12px 28px, rounded-full. Pair next to primary in the hero.
  - button-cobalt: cobalt pill — bg primary (#0064E0), white text, rounded-full. Reserve this
    for the SINGLE most important conversion CTA only: the final Contact "Let's Collaborate"
    button. Keep cobalt scarce so it carries weight.

Component styling to mirror from meta-deign.md:
  - Sticky white top nav, ~64px tall, bottom 1px hairline-soft border, name/wordmark left,
    nav links center/right. On scroll, highlight the active section link.
  - card-icon-feature for the 5 Services (line icon top, heading subtitle-lg, body body-sm,
    16px radius, hairline-soft border).
  - testimonial-customer-card for testimonials (40px avatar circle, byline body-sm-bold,
    quote body-md, 16px radius, hairline-soft border).
  - A dark promo-strip style section (bg ink-deep, white text, 32px radius) for the
    "What Sets Me Apart" or final CTA band, for visual rhythm.
  - Subtle motion only: 150–250ms ease-out on interactive transitions, 300ms ease-in-out on
    accordion expand/collapse.

=== SITE STRUCTURE (single page, smooth-scroll anchors) ===
Sticky top nav links (exactly these): Home | About Me | Services | Projects | Testimonials | Contact
Sections in order:
1. Home / Hero — name "Gnanasri | Medical Writer & Medical Communication Specialist",
   the headline, subheadline, credibility line, and a dual-CTA pair (button-primary "View My
   Work" + button-secondary "Let's Collaborate"). Include a clearly-marked circular PHOTO slot
   using ${BP}/profile.jpg (round, ~200px, hairline ring) so I can drop my headshot in later.
2. About Me — Professional Summary, Core Competencies, Therapeutic Expertise (as pill chips),
   My Journey.
3. Services — the 5 service cards (card-icon-feature) with the "You get" benefit line each.
4. Projects — all 12 as a responsive card grid (3-up desktop). Each card: Title, Category /
   Audience / Document Type as small pill chips, the one-line Caption; click expands a modal
   (or accordion) showing Overview, Problem It Solves, Skills Demonstrated, Value to Client,
   plus a cobalt-text "View PDF" link to ${BP}/projects/<slug>.pdf (create the public/projects
   folder; I'll add the real PDFs).
5. Testimonials — the 3 sample testimonials as testimonial-customer-cards, with a small
   "sample" note.
6. Contact — email gnanasri06@gmail.com (mailto), LinkedIn/Upwork/Fiverr placeholder links,
   the closing CTA line, and the final button-cobalt "Let's Collaborate".
Footer: SEO line + copyright on white, top hairline-soft border.

=== SEO ===
<title> "Gnanasri | Medical Writer & Medical Communication Specialist". Meta description with
keywords: medical writer, pharma content writer, medical communication specialist, clinical
writing, healthcare content. Add og: tags.

=== RESPONSIVE / MOBILE (mandatory — follow meta-deign.md breakpoints) ===
Mobile-first. Breakpoints and behavior:
  - < 480px: single column everywhere; hero-display 64px drops to ~24px; section padding
    compresses; projects + services grids go 1-up.
  - 480–767px: feature/service tiles render 2-up.
  - 768–1023px: 2-up feature grids; full nav returns.
  - >= 1024px: 3-up projects, full nav, max-width ~1200px container with 32–48px gutters.
  - Top nav below 768px collapses to logo + hamburger; nav links open in a clean full-width
    drawer; tapping a link smooth-scrolls and closes the drawer.
  - Hero stacks (photo above text) on mobile.
  - Touch targets >= 44px (buttons render 44px effective height on mobile).
  - Project modals are full-screen sheets on mobile with an easy close button.
  - Test layouts at 360px, 390px, 768px, and 1280px widths and ensure no horizontal scroll.

=== GITHUB ACTIONS DEPLOY ===
Create .github/workflows/deploy.yml that triggers on push to main, runs on ubuntu-latest with
permissions contents: read, pages: write, id-token: write and concurrency group "pages":
checkout → setup-node 20 → npm ci → npm run build → actions/configure-pages@v5 →
actions/upload-pages-artifact@v3 (path ./out) → actions/deploy-pages@v4.

=== BUILD, VERIFY, COMMIT (DO NOT create the remote or push) ===
- Install deps, run `npm run build`, confirm /out exports with no errors; fix any export
  issues (no server-only code, images unoptimized, asset paths prefixed with BP).
- Add a .gitignore (node_modules, .next, out, etc.). git init, stage all, commit
  "Initial portfolio site". STOP there — I will add the remote and push myself.

When done, give me: (1) confirmation the build/export succeeded, (2) where to drop my photo
(public/profile.jpg) and the 12 PDFs (public/projects/<slug>.pdf with the slug list you used),
(3) the exact push commands, and (4) the live URL
(https://gnanasri06.github.io/medical-writing-portfolio/) and reminder to set Pages source to
"GitHub Actions" in repo Settings.