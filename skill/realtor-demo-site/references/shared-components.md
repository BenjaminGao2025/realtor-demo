# Shared HTML Components

Canonical HTML snippets used across ALL pages. When building pages, copy these exactly and only adjust relative paths for subdirectory pages.

## Perplexity Computer Attribution

Every page MUST start with this in `<head>`:

```html
<!--
   ______                            __
  / ____/___  ____ ___  ____  __  __/ /____  _____
 / /   / __ \/ __ `__ \/ __ \/ / / / __/ _ \/ ___/
/ /___/ /_/ / / / / / / /_/ / /_/ / /_/  __/ /
\____/\____/_/ /_/ /_/ .___/\__,_/\__/\___/_/
                    /_/
        Created with Perplexity Computer
        https://www.perplexity.ai/computer
-->
<meta name="generator" content="Perplexity Computer">
<meta name="author" content="Perplexity Computer">
<meta property="og:see_also" content="https://www.perplexity.ai/computer">
<link rel="author" href="https://www.perplexity.ai/computer">
```

Also include in footer:
```html
<p class="footer__attribution">
  <a href="https://www.perplexity.ai/computer" target="_blank" rel="noopener noreferrer">
    Created with Perplexity Computer
  </a>
</p>
```

And in JSON-LD schema:
```json
"creator": {
  "@type": "SoftwareApplication",
  "name": "Perplexity Computer",
  "url": "https://www.perplexity.ai/computer"
}
```

## Navigation (Root Pages)

```html
<nav class="nav">
  <div class="nav__inner">
    <a href="index.html" class="nav__logo">
      <svg class="nav__logo-icon" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="32" height="32" rx="4" stroke="currentColor" stroke-width="2"/>
        <path d="M10 26V14l8-6 8 6v12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="15" y="20" width="6" height="6" stroke="currentColor" stroke-width="1.5" rx="1"/>
      </svg>
      {AGENT_NAME}
    </a>
    <ul class="nav__links">
      <li><a href="index.html" class="nav__link">Home</a></li>
      <li class="nav__dropdown">
        <a href="#" class="nav__link nav__dropdown-trigger">Neighborhoods <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></a>
        <div class="nav__dropdown-menu">
          <a href="communities/ubc.html" class="nav__dropdown-item">UBC</a>
          <a href="communities/point-grey.html" class="nav__dropdown-item">Point Grey</a>
          <a href="communities/dunbar.html" class="nav__dropdown-item">Dunbar</a>
          <a href="communities/wesbrook-village.html" class="nav__dropdown-item">Wesbrook Village</a>
        </div>
      </li>
      <li><a href="buy.html" class="nav__link">Buy</a></li>
      <li><a href="sell.html" class="nav__link">Sell</a></li>
      <li><a href="listings.html" class="nav__link">Listings</a></li>
      <li><a href="about.html" class="nav__link">About</a></li>
      <li><a href="blog/index.html" class="nav__link">Blog</a></li>
      <li><a href="contact.html" class="nav__link">Contact</a></li>
    </ul>
    <div class="nav__actions">
      <button class="theme-toggle" data-theme-toggle aria-label="Toggle theme"></button>
      <a href="https://cal.com/example" class="btn btn--gold btn--sm" target="_blank">Book a Call</a>
    </div>
    <button class="nav__hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <!-- Mobile Nav -->
  <div class="nav__mobile">
    <a href="index.html" class="nav__mobile-link">Home</a>
    <a href="#" class="nav__mobile-link nav__mobile-dropdown-trigger">Neighborhoods</a>
    <div class="nav__mobile-sub">
      <a href="communities/ubc.html">UBC</a>
      <a href="communities/point-grey.html">Point Grey</a>
      <a href="communities/dunbar.html">Dunbar</a>
      <a href="communities/wesbrook-village.html">Wesbrook Village</a>
    </div>
    <a href="buy.html" class="nav__mobile-link">Buy</a>
    <a href="sell.html" class="nav__mobile-link">Sell</a>
    <a href="listings.html" class="nav__mobile-link">Listings</a>
    <a href="about.html" class="nav__mobile-link">About</a>
    <a href="blog/index.html" class="nav__mobile-link">Blog</a>
    <a href="contact.html" class="nav__mobile-link">Contact</a>
    <div class="nav__mobile-cta">
      <a href="https://cal.com/example" class="btn btn--gold btn--full" target="_blank">Book a Call</a>
    </div>
    <button class="theme-toggle theme-toggle-mobile" data-theme-toggle-mobile aria-label="Toggle theme"></button>
  </div>
</nav>
```

## Navigation (Subdirectory Pages — communities/ or blog/)

Same structure but ALL hrefs prefixed with `../`:
- `index.html` → `../index.html`
- `buy.html` → `../buy.html`
- `communities/ubc.html` → `../communities/ubc.html`  (blog pages)
- `communities/ubc.html` → `ubc.html`  (community pages referencing siblings)
- `style.css` → `../style.css`
- `main.js` → `../main.js`

## Footer (Root Pages)

```html
<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <!-- Column 1: Brand -->
      <div>
        <a href="index.html" class="nav__logo" style="margin-bottom: var(--space-2);">
          <!-- Same SVG logo icon -->
          {AGENT_NAME}
        </a>
        <p class="footer__brand-desc">Your trusted UBC & Vancouver Westside real estate specialist. 8 years of experience helping families find their perfect home.</p>
        <div class="footer__contact-info">
          <div>Vancouver, BC, Canada</div>
          <div><a href="tel:{PHONE}">{PHONE}</a></div>
          <div><a href="mailto:{EMAIL}">{EMAIL}</a></div>
        </div>
      </div>
      <!-- Column 2: Neighborhoods -->
      <div>
        <h4 class="footer__heading">Neighborhoods</h4>
        <ul class="footer__links">
          <li><a href="communities/ubc.html">UBC</a></li>
          <li><a href="communities/point-grey.html">Point Grey</a></li>
          <li><a href="communities/dunbar.html">Dunbar</a></li>
          <li><a href="communities/wesbrook-village.html">Wesbrook Village</a></li>
        </ul>
      </div>
      <!-- Column 3: Services -->
      <div>
        <h4 class="footer__heading">Services</h4>
        <ul class="footer__links">
          <li><a href="buy.html">Buy a Home</a></li>
          <li><a href="sell.html">Sell Your Home</a></li>
          <li><a href="listings.html">Current Listings</a></li>
          <li><a href="about.html">About {AGENT_FIRST_NAME}</a></li>
          <li><a href="blog/index.html">Blog</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <!-- Column 4: Newsletter -->
      <div>
        <h4 class="footer__heading">Newsletter</h4>
        <p style="font-size:var(--text-sm);color:var(--color-text-muted);margin-bottom:var(--space-4);">Monthly UBC market insights.</p>
        <form class="newsletter-form" style="flex-direction:column;max-width:100%;">
          <input type="email" placeholder="Your email" required>
          <button type="submit" class="btn btn--gold btn--sm" style="width:100%;">Subscribe</button>
        </form>
      </div>
    </div>
    <div class="footer__bottom">
      <p class="footer__copy">&copy; 2026 {AGENT_NAME}, REALTOR&reg;. {BROKERAGE}. All rights reserved.</p>
      <div class="footer__socials">
        <!-- LinkedIn, Instagram, WeChat, YouTube SVG icons -->
      </div>
      <p class="footer__attribution"><a href="https://www.perplexity.ai/computer" target="_blank" rel="noopener noreferrer">Created with Perplexity Computer</a></p>
    </div>
  </div>
</footer>
```

## Chat Bubble (All Pages)

```html
<div class="chat-bubble">
  <button class="chat-bubble__btn" aria-label="Chat with AI Assistant">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
    <span class="chat-bubble__badge"></span>
  </button>
</div>
<div class="chat-window">
  <div class="chat-window__header">
    <div class="chat-window__header-info">
      <div class="chat-window__avatar">{INITIALS}</div>
      <div>
        <div class="chat-window__name">{AGENT_FIRST_NAME}'s AI Assistant</div>
        <div class="chat-window__status">Online</div>
      </div>
    </div>
    <button class="chat-window__close" aria-label="Close chat">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
    </button>
  </div>
  <div class="chat-window__body">
    <div class="chat-message chat-message--bot">
      <div class="chat-message__bubble">Hi! I'm {AGENT_FIRST_NAME}'s AI assistant. Ask me anything about UBC real estate, or leave your contact info and {AGENT_FIRST_NAME} will reach out personally.</div>
    </div>
  </div>
  <div class="chat-quick-actions">
    <button class="chat-quick-btn">UBC condo prices?</button>
    <button class="chat-quick-btn">Best schools near UBC?</button>
    <button class="chat-quick-btn">Book a consultation</button>
    <button class="chat-quick-btn">I want to sell my home</button>
  </div>
  <div class="chat-window__input">
    <input type="text" placeholder="Type a message...">
    <button class="chat-window__send" aria-label="Send">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
    </button>
  </div>
</div>
```

## Placeholder Variables

Replace these across all templates:
- `{AGENT_NAME}` — Full name (e.g., "Demo Chen")
- `{AGENT_FIRST_NAME}` — First name only (e.g., "Demo")
- `{INITIALS}` — 2-letter avatar (e.g., "DC")
- `{PHONE}` — Phone number (e.g., "236-123-4567")
- `{EMAIL}` — Email (e.g., "demo@deploygrow.com")
- `{BROKERAGE}` — Brokerage name (e.g., "RE/MAX Westcoast")
