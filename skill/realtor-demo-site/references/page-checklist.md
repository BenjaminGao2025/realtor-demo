# Page-by-Page Content Checklist

Use this checklist to verify every page has complete content and SEO markup.

## Universal Requirements (EVERY page)

- [ ] Perplexity Computer HTML comment in `<head>`
- [ ] `<meta name="generator" content="Perplexity Computer">`
- [ ] `<meta name="author" content="Perplexity Computer">`
- [ ] `<meta property="og:see_also" content="https://www.perplexity.ai/computer">`
- [ ] `<link rel="author" href="https://www.perplexity.ai/computer">`
- [ ] Unique `<title>` tag (format: "Page Title | Agent Name | REALTOR®")
- [ ] `<meta name="description">` (150-160 chars, unique per page)
- [ ] OG tags: og:title, og:description, og:type, og:image, og:locale
- [ ] BreadcrumbList JSON-LD schema
- [ ] Font preconnects + imports (Google Fonts + Fontshare)
- [ ] `<link rel="stylesheet" href="style.css">` (or `../style.css`)
- [ ] Navigation with ALL links (Home, Neighborhoods dropdown, Buy, Sell, Listings, About, Blog, Contact)
- [ ] Mobile navigation with same links
- [ ] Footer with 4 columns (Brand, Neighborhoods, Services, Newsletter)
- [ ] Footer attribution link to Perplexity Computer
- [ ] Chat bubble + chat window
- [ ] `<script src="main.js"></script>` (or `../main.js`)
- [ ] Mobile responsive (test at 768px and 480px)

## index.html (Homepage)

Content sections:
- [ ] Hero: Full-viewport background image, tagline, subtitle, 2 CTAs (Book Consultation + View Neighborhoods)
- [ ] Stats bar: 3-4 key numbers (years experience, transactions, volume, client satisfaction)
- [ ] Featured Listings: 3 property cards with image, price, specs
- [ ] Neighborhoods overview: 3-4 area cards with image + brief description
- [ ] Why Choose section: 3-4 value propositions with icons
- [ ] Testimonials: 3 client testimonial cards with names and roles
- [ ] CTA section: Final call-to-action with booking link

SEO:
- [ ] RealEstateAgent JSON-LD schema
- [ ] BreadcrumbList JSON-LD (Home only)
- [ ] Hero image Unsplash URL in og:image

## about.html

Content sections:
- [ ] Hero/header with page title
- [ ] Agent bio (2-3 paragraphs, professional background)
- [ ] Key credentials / designations
- [ ] Timeline / career milestones
- [ ] Languages spoken
- [ ] Professional headshot placeholder
- [ ] CTA to contact page

SEO:
- [ ] Person or RealEstateAgent JSON-LD
- [ ] BreadcrumbList: Home > About

## buy.html

Content sections:
- [ ] Page hero with buyer-focused messaging
- [ ] Buyer service overview
- [ ] Step-by-step buying process (5-7 steps)
- [ ] Mortgage calculator or info section
- [ ] First-time buyer highlights
- [ ] CTA to schedule consultation

SEO:
- [ ] Service JSON-LD or WebPage
- [ ] BreadcrumbList: Home > Buy

## sell.html

Content sections:
- [ ] Page hero with seller-focused messaging
- [ ] Seller service overview
- [ ] Step-by-step selling process (5-7 steps)
- [ ] Free CMA (Comparative Market Analysis) offer
- [ ] Marketing strategy highlights
- [ ] CTA to get home valuation

SEO:
- [ ] Service JSON-LD or WebPage
- [ ] BreadcrumbList: Home > Sell

## listings.html

Content sections:
- [ ] Page hero
- [ ] Filter/sort controls (price range, property type, bedrooms)
- [ ] Property cards grid (6-9 listings)
- [ ] Each card: image, address, price, beds/baths/sqft, "View Details" link
- [ ] "Can't find what you need?" CTA

SEO:
- [ ] ItemList or WebPage JSON-LD
- [ ] BreadcrumbList: Home > Listings

## contact.html

Content sections:
- [ ] Page hero
- [ ] Contact form (name, email, phone, message, property interest dropdown)
- [ ] Direct contact info (phone, email, office address)
- [ ] FAQ accordion (5-8 common questions)
- [ ] Map placeholder or embedded map
- [ ] Social media links

SEO:
- [ ] FAQPage JSON-LD (from FAQ section)
- [ ] BreadcrumbList: Home > Contact

## communities/{area}.html

Content sections:
- [ ] Hero with area name and scenic image
- [ ] Area overview (2-3 paragraphs about the neighborhood)
- [ ] Key stats (avg price, population, schools, transit)
- [ ] Lifestyle & amenities section
- [ ] Schools and education
- [ ] Transportation & transit
- [ ] Real estate market highlights
- [ ] Featured listings in this area (2-3 cards)
- [ ] CTA to explore listings or contact agent

SEO:
- [ ] Place or Neighborhood JSON-LD
- [ ] BreadcrumbList: Home > Neighborhoods > {Area Name}
- [ ] Area-specific meta description

## blog/index.html

Content sections:
- [ ] Page hero with "Real Estate Insights" or similar
- [ ] Article cards grid (one card per article)
- [ ] Each card: thumbnail image, title, excerpt (2-3 lines), date, "Read More" link
- [ ] Category tags on cards

SEO:
- [ ] Blog or CollectionPage JSON-LD
- [ ] BreadcrumbList: Home > Blog

## blog/{article}.html

Content sections:
- [ ] Article header: title, author, date, read time, category tag
- [ ] Table of contents (anchor links to H2 sections)
- [ ] 2000+ words of substantive content
- [ ] Key Takeaway callout boxes (2-3 per article)
- [ ] Internal links to community pages and other blog articles
- [ ] Author bio box at bottom
- [ ] Related Articles section (3 cards)

SEO:
- [ ] Article JSON-LD (headline, author, datePublished, image)
- [ ] FAQPage JSON-LD (3-5 FAQ items from the article)
- [ ] BreadcrumbList: Home > Blog > {Article Title}
- [ ] Unique og:title and og:description

## Post-Build Verification Checklist

Run these after all pages are complete:

```bash
# 1. No real personal info
grep -ri "Benjamin" realtor-demo/
grep -ri "real-phone-number" realtor-demo/
grep -ri "real-email" realtor-demo/

# 2. All pages have attribution
grep -l "Perplexity Computer" realtor-demo/*.html realtor-demo/**/*.html

# 3. All pages have correct nav items
grep -l "Wesbrook Village" realtor-demo/*.html realtor-demo/**/*.html
grep -l "blog/index.html\|../blog/index.html" realtor-demo/*.html realtor-demo/**/*.html

# 4. No broken relative paths
grep -n "href=\"style.css" realtor-demo/communities/*.html  # Should NOT exist
grep -n "href=\"../style.css" realtor-demo/communities/*.html  # Should exist

# 5. All pages have main.js
grep -l "main.js" realtor-demo/*.html realtor-demo/**/*.html
```
