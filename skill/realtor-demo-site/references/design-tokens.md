# Design Tokens Reference

Complete CSS custom properties for the realtor demo design system. Based on deploygrow.com's dark luxury aesthetic.

## Color Palette

### Dark Theme (Default)

```css
:root, [data-theme="dark"] {
  --color-bg:             #0d0d12;    /* Page background */
  --color-surface:        #131318;    /* Card backgrounds */
  --color-surface-2:      #1a1a22;    /* Elevated surfaces */
  --color-surface-offset: #16161e;    /* Alternate sections */
  --color-border:         #2a2a35;    /* Borders */
  --color-border-subtle:  #1f1f2a;    /* Subtle dividers */
  --color-divider:        #222230;    /* Section dividers */
  --color-text:           #f0ede6;    /* Primary text */
  --color-text-muted:     #9a978e;    /* Secondary text */
  --color-text-faint:     #5a584f;    /* Tertiary text */
  --color-text-inverse:   #0d0d12;    /* Text on gold buttons */
  --color-gold:           #d4a853;    /* Primary accent */
  --color-gold-hover:     #e0bc6e;    /* Gold hover state */
  --color-gold-active:    #c49540;    /* Gold active/pressed */
  --color-gold-glow:      rgba(212, 168, 83, 0.15);  /* Glow effect */
  --color-gold-text:      #0d0d12;    /* Text on gold bg */
}
```

### Light Theme

```css
[data-theme="light"] {
  --color-bg:             #f7f5f0;
  --color-surface:        #ffffff;
  --color-surface-2:      #f0ede6;
  --color-surface-offset: #e8e5de;
  --color-border:         #d4d1ca;
  --color-border-subtle:  #e0ddd6;
  --color-divider:        #d4d1ca;
  --color-text:           #1a1a22;
  --color-text-muted:     #5a584f;
  --color-text-faint:     #9a978e;
  --color-text-inverse:   #ffffff;
  --color-gold:           #b8922e;
  --color-gold-hover:     #a07e25;
  --color-gold-active:    #8d6e1d;
  --color-gold-glow:      rgba(184, 146, 46, 0.12);
  --color-gold-text:      #ffffff;
}
```

## Typography

### Font Stack

```css
--font-display: 'Instrument Serif', Georgia, serif;    /* Headings, hero text */
--font-body: 'General Sans', 'Helvetica Neue', Arial, sans-serif;  /* Body text */
```

### Google Fonts Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
<link href="https://api.fontshare.com/v2/css?f[]=general-sans@300,400,500,600,700&display=swap" rel="stylesheet">
```

### Type Scale (Fluid / clamp-based)

```css
--text-xs:   clamp(0.75rem,  0.7rem  + 0.25vw, 0.875rem);   /* Fine print */
--text-sm:   clamp(0.875rem, 0.8rem  + 0.35vw, 1rem);        /* Captions */
--text-base: clamp(1rem,     0.95rem + 0.25vw, 1.125rem);    /* Body text */
--text-lg:   clamp(1.125rem, 1rem    + 0.75vw, 1.5rem);      /* Lead text */
--text-xl:   clamp(1.5rem,   1.2rem  + 1.25vw, 2.25rem);     /* Section titles */
--text-2xl:  clamp(2rem,     1.2rem  + 2.5vw,  3.5rem);      /* Major headings */
--text-3xl:  clamp(2.5rem,   1rem    + 4vw,    5rem);         /* Hero title */
```

## Spacing Scale (4px base)

```css
--space-1:  0.25rem;   /* 4px  */
--space-2:  0.5rem;    /* 8px  */
--space-3:  0.75rem;   /* 12px */
--space-4:  1rem;      /* 16px */
--space-5:  1.25rem;   /* 20px */
--space-6:  1.5rem;    /* 24px */
--space-8:  2rem;      /* 32px */
--space-10: 2.5rem;    /* 40px */
--space-12: 3rem;      /* 48px */
--space-16: 4rem;      /* 64px */
--space-20: 5rem;      /* 80px */
--space-24: 6rem;      /* 96px */
--space-32: 8rem;      /* 128px */
```

## Border Radius

```css
--radius-sm:   0.375rem;  /* 6px - small buttons, tags */
--radius-md:   0.5rem;    /* 8px - cards, inputs */
--radius-lg:   0.75rem;   /* 12px - larger cards */
--radius-xl:   1rem;       /* 16px - modals, panels */
--radius-full: 9999px;    /* Pill shapes, avatars */
```

## Transitions & Easing

```css
--transition-interactive: 180ms cubic-bezier(0.16, 1, 0.3, 1);
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
```

## Shadows

```css
--shadow-sm: 0 1px 2px rgba(0,0,0,0.3);    /* Subtle depth */
--shadow-md: 0 4px 12px rgba(0,0,0,0.4);   /* Cards */
--shadow-lg: 0 12px 32px rgba(0,0,0,0.5);  /* Modals, dropdowns */
```

## Content Widths

```css
--content-narrow:  640px;   /* Blog article text */
--content-default: 960px;   /* Standard sections */
--content-wide:    1200px;  /* Full-width sections */
```

## Button Patterns

### Gold (Primary CTA)
```css
.btn--gold {
  background: var(--color-gold);
  color: var(--color-gold-text);
  /* Hover: --color-gold-hover, translateY(-1px), box-shadow with gold-glow */
}
```

### Outline (Secondary)
```css
.btn--outline {
  background: transparent;
  border: 1.5px solid var(--color-border);
  color: var(--color-text);
  /* Hover: border-color gold, color gold */
}
```

## Hero Section Pattern

```css
.hero {
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
}

.hero::before {
  /* CRITICAL: Strong overlay for text readability */
  background: linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.78));
}

.hero__title {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  /* CRITICAL: Hardcoded white, NOT var(--color-text) */
  color: #ffffff;
  text-shadow: 0 2px 12px rgba(0,0,0,0.5);
}

.hero__subtitle {
  color: rgba(255,255,255,0.9);  /* Bright, not muted */
}
```

## Responsive Breakpoints

```css
@media (max-width: 1024px) { /* Tablet */ }
@media (max-width: 768px)  { /* Mobile — nav collapses, grids stack */ }
@media (max-width: 480px)  { /* Small mobile */ }
```
