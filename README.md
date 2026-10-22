# KanchanFlow — Manufacturing CRM marketing site

Frontend-only, 3-route marketing site (Next.js App Router, TypeScript, plain CSS with central tokens). Built as an internship assignment. All data is fictional.

## Setup
Prerequisites: Node.js 20.9+ and npm.
```
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck
npm run build && npm start
```

## Routes
`/` Home · `/features` Features · `/pricing` Pricing. Nav also uses `/#industries` and `/#faq`.

## Design rationale
"The Precision Workspace": charcoal hero/dark sections with a faint technical grid, light steel content sections, gold accents, hard offset shadows, 4px radii, mono document IDs (QTN-1042, BOM-0317).
Colours: graphite #171A1D, charcoal #101214, steel #F3F4F2, gold #E8AD32 (dark text on gold buttons), muted #59616A (on steel ≈ 5.6:1), muted-dark #A9B0B7 on graphite. Gold-on-light text uses darker #8A5E00. Tokens live in `app/globals.css` `:root`.
Fonts (self-hosted via `next/font/local`, from Fontsource, SIL OFL 1.1): Barlow Condensed 700 (display), IBM Plex Sans 400/600 (body), IBM Plex Mono 500 (metadata). Icons: lucide-react (ISC).

## Structure
`app/` routes + layout · `components/layout` Header/Footer · `components/ui` Section, FaqList, Logo · `components/home` Mockup · `components/pricing` PricingPlans · `components/demo` DemoProvider (dialog + form) and DemoButton · `lib/content.ts`, `lib/pricing.ts`, `lib/utils.ts`.

## Interactions
Mobile menu (aria-expanded, closes on link click/Escape, focus returns to button); FAQ via native `<details>`; monthly/annual toggle (`aria-pressed`); native `<dialog>` demo form (focus containment, Escape, focus restore); plan preselection from pricing buttons; validation with field errors and focus on first invalid field; honest success message.

## Accessibility
Skip link, one h1 per page, labelled landmarks, visible labels, autocomplete attributes, focus-visible styles, reduced-motion CSS, decorative icons `aria-hidden`, comparison table with caption and scoped headers inside a labelled, keyboard-focusable scroll region.

## Assumptions
Capabilities (WhatsApp, mobile app, reports) are illustrative, not verified integrations. Prices (Starter ₹2,499, Growth ₹5,999, Scale ₹12,999 per month) and the 20% annual discount are invented assignment content. Forms send and store nothing. No testimonials or customer logos are used. Social icons were omitted (no real accounts). OG tags have title/description only (no OG image); `metadataBase` is a placeholder domain — change it after deploying.

## Deployment
Push to GitHub, import the repo in Vercel (framework auto-detected), deploy, then update `metadataBase` in `app/layout.tsx`.

## Mobile Lighthouse audit
Open the deployed URL in Chrome → DevTools → Lighthouse → Mobile → Performance, Accessibility, SEO → Analyze. Screenshot the result for each route.

## Known limitations
Not browser-tested at 360/768/1024/1440 or with a screen reader; no Lighthouse run; no OG image; mockups are simplified HTML/CSS; plain global CSS rather than Tailwind/CSS Modules; dialog backdrop-click closing is mouse-only.

## With more time
Per-feature richer UI previews, Playwright and axe tests, OG images, CSS Modules split, reduced global CSS.
