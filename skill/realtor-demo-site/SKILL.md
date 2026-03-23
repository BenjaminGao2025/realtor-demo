---
name: realtor-demo-site
description: >-
  Build a complete, production-ready realtor demo website for DeployGrow's service showcase.
  Pure HTML + CSS + JS (no frameworks), deployable on Cloudflare Pages.
  Dark theme with gold accent, deploygrow.com-inspired design system (Instrument Serif + General Sans).
  Generates 9+ pages: homepage, about, buy, sell, listings, contact, 3-4 community pages, blog section with SEO articles.
  Includes AI chatbot placeholder, structured data (JSON-LD), OG tags, breadcrumbs, mobile-responsive layout, light/dark theme toggle.
  Use when asked to create a realtor demo website, real estate agent website, DeployGrow demo site, or Vancouver realtor site.
  Keywords: realtor, real estate, demo website, DeployGrow, Vancouver, UBC, HTML CSS JS, dark theme, gold accent, SEO, blog.
metadata:
  author: DeployGrow
  version: '1.0'
  origin: Perplexity Computer session — March 2026
---

# Realtor Demo Site Builder

Build a high-end, dark-themed realtor demo website to showcase DeployGrow's web design capabilities. The site uses pure HTML + CSS + JS with no frameworks, suitable for static hosting on Cloudflare Pages.

## When to Use This Skill

- User asks to create a realtor / real estate agent demo website
- User asks to build a DeployGrow showcase or demo site
- User mentions creating a Vancouver realtor website
- User wants a dark theme, gold accent real estate site
- User needs a multi-page static HTML site with blog and community pages

## Important Constraints

- **All information must be fictional** — no real personal data ("所有信息必须是虚构的，不能使用真实个人信息")
- **Perplexity Computer attribution** required in every page (HTML comment + meta tags)
- **Mobile-first responsive** — must work perfectly on all screen sizes
- **SEO-complete** — JSON-LD schema, OG tags, breadcrumbs on every page
- **No frameworks** — pure HTML, CSS, JS only (no React, no Tailwind, no build step)

## Architecture Overview

```
realtor-demo/
├── index.html              # Homepage (hero, stats, featured listings, testimonials, CTA)
├── about.html              # Agent bio, credentials, timeline, team
├── buy.html                # Buyer services, process steps, mortgage calculator
├── sell.html               # Seller services, selling process, CMA offer
├── listings.html           # Property grid with filters
├── contact.html            # Contact form, FAQ accordion, map placeholder
├── communities/
│   ├── ubc.html            # UBC area guide
│   ├── point-grey.html     # Point Grey area guide
│   ├── dunbar.html         # Dunbar area guide
│   └── wesbrook-village.html  # Wesbrook Village area guide
├── blog/
│   ├── index.html          # Blog listing page with article cards
│   ├── article-1.html      # SEO blog article
│   ├── article-2.html      # SEO blog article
│   └── ...                 # 3-5 more articles
├── style.css               # Single CSS file (~1900+ lines, full design system)
├── main.js                 # Single JS file (~295 lines, all interactivity)
└── _shared-components.md   # Reference doc for nav/footer/chat templates
```

## Build Workflow

### Phase 1: Design Analysis

1. **Browse deploygrow.com** to extract the design language:
   - Dark background tones (#0d0d12, #131318, #1a1a22)
   - Gold accent (#d4a853) with hover/active/glow variants
   - Font pairing: Instrument Serif (display) + General Sans (body)
   - Nav structure, footer layout, section patterns
2. Save the analysis to a file for reference by subagents

### Phase 2: Design System (style.css)

Build the complete CSS file first — it is the foundation for all pages. Read `references/design-tokens.md` for the full token list.

Key sections in order:
1. Reset & base styles
2. Design tokens (`:root` / `[data-theme="dark"]`)
3. Light theme overrides (`[data-theme="light"]`)
4. Typography system (clamp-based fluid type scale)
5. Layout utilities (container, grid, spacing)
6. Navigation (desktop + mobile + scroll-aware + dropdown)
7. Hero section (full-viewport, gradient overlay, centered text)
8. Cards, buttons, forms
9. Section patterns (stats, process steps, testimonials, CTA)
10. Community page components
11. Blog page components
12. Footer (4-column grid)
13. Chat bubble + chat window
14. Utility classes
15. Responsive breakpoints (@media queries)

**Critical hero fix**: The hero title MUST use explicit `color: #ffffff` with `text-shadow: 0 2px 12px rgba(0,0,0,0.5)`, NOT `var(--color-text)`. The subtitle should use `rgba(255,255,255,0.9)`. The overlay gradient must be strong enough: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.78))`.

### Phase 3: JavaScript (main.js)

Single IIFE with these modules:
1. **Theme toggle** — dark/light with sun/moon SVG icons, syncs desktop + mobile buttons
2. **Scroll-aware nav** — adds `nav--scrolled` class at 80px, hides at 200px on scroll down
3. **Mobile hamburger** — toggles `nav--open`, handles sub-dropdowns
4. **Desktop dropdown** — hover/click for neighborhoods dropdown
5. **Scroll reveal** — IntersectionObserver for `.reveal` elements
6. **FAQ accordion** — click toggles for `.faq__item` elements
7. **Chat bubble** — open/close chat window, quick action buttons
8. **Newsletter form** — preventDefault with success message
9. **Contact form** — preventDefault with success message

### Phase 4: Pages (Parallel Subagent Strategy)

**CRITICAL**: Use parallel subagents to build pages simultaneously. Each subagent gets:
- The design tokens reference
- The shared components template (nav, footer, chat)
- Page-specific content brief

#### Subagent spawning pattern:

```
Subagent 1: index.html (homepage)
Subagent 2: about.html
Subagent 3: buy.html + sell.html (similar structure)
Subagent 4: listings.html + contact.html
Subagent 5-8: Community pages (one each)
```

Each page MUST include:
- Perplexity Computer attribution (HTML comment + meta tags) — see `references/shared-components.md`
- Complete `<head>` with SEO meta, OG tags, JSON-LD schema
- BreadcrumbList JSON-LD
- Navigation (desktop + mobile, with Neighborhoods dropdown + Blog link)
- Footer (4-column: brand, neighborhoods, services, newsletter)
- Chat bubble
- `<script src="main.js"></script>` before `</body>`

#### Path conventions:
- **Root pages** (`index.html`, `about.html`, etc.): `style.css`, `main.js`, `communities/ubc.html`
- **Subdirectory pages** (`communities/*.html`, `blog/*.html`): `../style.css`, `../main.js`, `../communities/ubc.html`, `../index.html`

### Phase 5: Blog Section

Blog articles should target SEO keywords relevant to the service area. Each article needs:
- **2000+ words** of substantive content
- **FAQPage** JSON-LD schema (3-5 questions)
- **Article** JSON-LD schema
- **BreadcrumbList** JSON-LD
- Key Takeaway boxes (highlighted callouts)
- Related Articles section at the bottom
- Table of contents with anchor links

Recommended topics for Vancouver UBC realtor:
1. UBC condo buying guide
2. Point Grey vs Dunbar comparison
3. School catchment zone guide
4. First-time home buyer guide
5. New immigrant's guide (bilingual EN/ZH)

### Phase 6: Global Updates (Nav/Footer Consistency)

After all pages are built, run a Python script to ensure nav/footer consistency across ALL pages. This catches any subagent that used slightly different nav markup.

```python
# Pattern: read each HTML file, find nav/footer, replace with canonical version
# Must handle root vs subdirectory path differences
```

### Phase 7: Verification

Run these checks before deployment:

1. **grep for placeholder data** — no "Benjamin", no real phone numbers, no real emails
2. **grep for broken paths** — verify `../style.css` in subdirectories, `style.css` in root
3. **grep for nav consistency** — all pages have Wesbrook Village, Blog link, correct dropdown items
4. **Playwright visual QA** — screenshot hero, blog page, community page, mobile nav
5. **Check hero contrast** — verify white text is visible on dark overlay

### Phase 8: Deployment

1. **Git**: Initialize repo, commit all files, push to GitHub
2. **Deploy**: Use `deploy_website` to publish on Perplexity Computer hosting

## Design Decisions & Lessons Learned

### Hero Text Contrast (Critical Bug)
Using `var(--color-text)` for hero title text is INVISIBLE when the dark theme background variable and the image overlay create ambiguity. Always use hardcoded `#ffffff` for text over image overlays.

### Subagent Coordination
- Provide a **nav template file** and **footer template file** to each subagent
- After parallel builds, run a **unification script** to normalize nav/footer across all files
- Each subagent should save its output to a specific file path — never let subagents write to the same file

### File Size Management
- `style.css` will be ~1900+ lines — this is expected for a comprehensive design system
- Each blog article is ~600-770 lines due to full SEO markup and 2000+ word content
- Total project is ~19 files, ~500KB of HTML/CSS/JS

### SEO Best Practices
- Every page gets its own `<title>`, `<meta description>`, OG tags
- JSON-LD: `RealEstateAgent` on homepage, `Article` on blog posts, `FAQPage` where applicable
- `BreadcrumbList` on every page for Google rich results
- `<link rel="canonical">` on all pages
- Bilingual content (EN/ZH) for immigrant-focused articles

### Mobile Responsiveness
- Navigation collapses to hamburger menu below 768px
- Hero text scales down with `clamp()` fluid typography
- Cards go from multi-column grid to single column on mobile
- Footer grid stacks vertically on small screens
- Chat bubble stays fixed bottom-right on all sizes

## Customization Guide

To adapt this template for a different agent/city:

1. **Global find/replace** these values:
   - Agent name (e.g., "Demo Chen" → "Jane Smith")
   - Phone number (e.g., "236-123-4567")
   - Email (e.g., "demo@deploygrow.com")
   - Avatar initials (e.g., "DC" → "JS")
   - Brokerage name (e.g., "RE/MAX Westcoast")
   - Service areas (e.g., "UBC, Point Grey, Dunbar")

2. **Replace community pages** with the target city's neighborhoods

3. **Update blog articles** to target local SEO keywords

4. **Swap hero image** — use a city-appropriate Unsplash photo

5. **Update JSON-LD** schema data on all pages

## References

- `references/design-tokens.md` — Complete CSS custom property reference
- `references/shared-components.md` — Nav, footer, chat bubble HTML templates
- `references/page-checklist.md` — Per-page content requirements and SEO checklist
