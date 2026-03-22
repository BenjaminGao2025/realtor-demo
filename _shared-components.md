# Shared HTML Components for Benjamin Gao Realtor Website

## HEAD BLOCK (for root-level pages)
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
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
<link href="https://api.fontshare.com/v2/css?f[]=general-sans@300,400,500,600,700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
```

## HEAD BLOCK (for communities/ subdir pages) - adjust paths
Same as above but use `../style.css` and `../main.js` paths.

## NAVIGATION
```html
<nav class="nav">
  <div class="nav__inner">
    <a href="index.html" class="nav__logo">
      <svg class="nav__logo-icon" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="32" height="32" rx="4" stroke="currentColor" stroke-width="2"/>
        <path d="M10 26V14l8-6 8 6v12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="15" y="20" width="6" height="6" stroke="currentColor" stroke-width="1.5" rx="1"/>
      </svg>
      Benjamin Gao
    </a>
    <ul class="nav__links">
      <li><a href="index.html" class="nav__link">Home</a></li>
      <li class="nav__dropdown">
        <a href="#" class="nav__link nav__dropdown-trigger">Neighborhoods <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></a>
        <div class="nav__dropdown-menu">
          <a href="communities/ubc.html" class="nav__dropdown-item">UBC</a>
          <a href="communities/point-grey.html" class="nav__dropdown-item">Point Grey</a>
          <a href="communities/dunbar.html" class="nav__dropdown-item">Dunbar</a>
        </div>
      </li>
      <li><a href="buy.html" class="nav__link">Buy</a></li>
      <li><a href="sell.html" class="nav__link">Sell</a></li>
      <li><a href="listings.html" class="nav__link">Listings</a></li>
      <li><a href="about.html" class="nav__link">About</a></li>
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
  <div class="nav__mobile">
    <a href="index.html" class="nav__mobile-link">Home</a>
    <a href="#" class="nav__mobile-link nav__mobile-dropdown-trigger">Neighborhoods</a>
    <div class="nav__mobile-sub">
      <a href="communities/ubc.html">UBC</a>
      <a href="communities/point-grey.html">Point Grey</a>
      <a href="communities/dunbar.html">Dunbar</a>
    </div>
    <a href="buy.html" class="nav__mobile-link">Buy</a>
    <a href="sell.html" class="nav__mobile-link">Sell</a>
    <a href="listings.html" class="nav__mobile-link">Listings</a>
    <a href="about.html" class="nav__mobile-link">About</a>
    <a href="contact.html" class="nav__mobile-link">Contact</a>
    <div class="nav__mobile-cta">
      <a href="https://cal.com/example" class="btn btn--gold btn--full" target="_blank">Book a Call</a>
    </div>
    <button class="theme-toggle theme-toggle-mobile" data-theme-toggle-mobile aria-label="Toggle theme"></button>
  </div>
</nav>
```

For community pages (in communities/ subdir), all href links must be prefixed: `../index.html`, `../buy.html`, `../communities/ubc.html`, etc.

## FOOTER
```html
<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <div>
        <a href="index.html" class="nav__logo" style="margin-bottom: var(--space-2);">
          <svg class="nav__logo-icon" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="32" height="32" rx="4" stroke="currentColor" stroke-width="2"/>
            <path d="M10 26V14l8-6 8 6v12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="15" y="20" width="6" height="6" stroke="currentColor" stroke-width="1.5" rx="1"/>
          </svg>
          Benjamin Gao
        </a>
        <p class="footer__brand-desc">Your trusted UBC & Vancouver Westside real estate specialist. 8 years of experience helping families find their perfect home.</p>
        <div class="footer__contact-info">
          <div>Vancouver, BC, Canada</div>
          <div><a href="tel:236-966-7384">236-966-7384</a></div>
          <div><a href="mailto:david@davidchenrealty.com">david@davidchenrealty.com</a></div>
        </div>
      </div>
      <div>
        <h4 class="footer__heading">Neighborhoods</h4>
        <ul class="footer__links">
          <li><a href="communities/ubc.html">UBC</a></li>
          <li><a href="communities/point-grey.html">Point Grey</a></li>
          <li><a href="communities/dunbar.html">Dunbar</a></li>
        </ul>
      </div>
      <div>
        <h4 class="footer__heading">Services</h4>
        <ul class="footer__links">
          <li><a href="buy.html">Buy a Home</a></li>
          <li><a href="sell.html">Sell Your Home</a></li>
          <li><a href="listings.html">Current Listings</a></li>
          <li><a href="about.html">About Benjamin</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
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
      <p class="footer__copy">&copy; 2026 Benjamin Gao, REALTOR&reg;. RE/MAX Westcoast. All rights reserved.</p>
      <div class="footer__socials">
        <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
        <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg></a>
        <a href="#" aria-label="WeChat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3C5.13 3 2 5.69 2 9c0 1.8 1 3.4 2.5 4.5L4 16l2.5-1.3c.8.3 1.6.4 2.5.4"/><path d="M15 8c-3.31 0-6 2.24-6 5s2.69 5 6 5c.8 0 1.5-.1 2.2-.4L20 19l-.5-2.3C20.7 15.7 21 14.4 21 13c0-2.76-2.69-5-6-5z"/></svg></a>
        <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg></a>
      </div>
      <p class="footer__attribution"><a href="https://www.perplexity.ai/computer" target="_blank" rel="noopener noreferrer">Created with Perplexity Computer</a></p>
    </div>
  </div>
</footer>
```

For community pages (in communities/ subdir), all href links must be prefixed: `../index.html`, `../buy.html`, `../communities/ubc.html`, etc.

## CHAT BUBBLE (on all pages)
```html
<!-- Chat Bubble -->
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
      <div class="chat-window__avatar">BG</div>
      <div>
        <div class="chat-window__name">Benjamin's AI Assistant</div>
        <div class="chat-window__status">Online</div>
      </div>
    </div>
    <button class="chat-window__close" aria-label="Close chat">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
    </button>
  </div>
  <div class="chat-window__body">
    <div class="chat-message chat-message--bot">
      <div class="chat-message__bubble">Hi! I'm Benjamin's AI assistant. Ask me anything about UBC real estate, or leave your contact info and Benjamin will reach out personally.</div>
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

## KEY DETAILS
- Agent name: Benjamin Gao
- Title: REALTOR® | UBC & Vancouver Westside Specialist
- Brokerage: RE/MAX Westcoast
- Service areas: UBC, Point Grey, Dunbar, Kitsilano
- Languages: English & 中文
- Experience: 8 years, 200+ transactions, $380M+ volume
- Email: david@davidchenrealty.com
- Phone: 236-966-7384
- Booking: https://cal.com/example
- Gold accent: #d4a853
