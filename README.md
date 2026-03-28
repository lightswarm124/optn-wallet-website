# OPTN Labs Website

Marketing site for OPTN Labs, built with Next.js App Router.

## Local Development

Run the site locally:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Homepage Refresh

First-pass homepage refresh completed on March 8, 2026.

Goals addressed:

- Reposition the homepage around `OPTN Labs`, not just the wallet
- Add a stronger proof / "live now" section
- Restore updates and resources on the homepage
- Replace vague roadmap copy with dated milestone framing
- Add a more structured inquiry flow instead of only generic contact links

Key files:

- `app/page.jsx`
- `app/components/Hero.jsx`
- `app/components/ProofStrip.jsx`
- `app/components/Resources.jsx`
- `app/components/Roadmap.jsx`
- `app/components/Contact.jsx`
- `app/components/ContactForm.jsx`
- `app/components/Header.jsx`
- `content-map.md`

## SEO Notes

Current SEO work in this repo:

- Shared site metadata in `app/layout.jsx`
- Homepage-specific metadata in `app/page.jsx`
- Blog metadata aligned to `OPTN Labs`
- Canonical URLs for homepage and blog posts
- Open Graph and Twitter metadata for homepage and blog posts
- JSON-LD for `Organization` and `WebSite`
- Sitemap and robots routes in `app/sitemap.js` and `app/robots.js`
- Internal linking from homepage sections to blog/resources/contact

SEO priorities still worth doing next:

1. Publish more indexed content.
   One blog post is not enough to create strong search coverage.
2. Create dedicated landing pages.
   Suggested pages: `Wallet`, `Hosted Infrastructure`, `Engineering Support`, `CashTokens`, `Covenants on BCH`.
3. Add richer proof content.
   Case studies, launch notes, uptime/status, examples, and concrete metrics will help both ranking and conversion.
4. Tighten keyword alignment in copy.
   Current copy is improved structurally, but deeper content work should intentionally target BCH, CashTokens, covenant UX, metadata, wallet infrastructure, and developer support queries.
5. Add more crawlable supporting content.
   FAQs, glossary pages, and comparison/explainer content can expand long-tail reach.

## Inquiry Form Behavior

The inquiry form in `app/components/ContactForm.jsx` does **not** send mail directly from the website.

It works by generating a `mailto:` link in the browser:

- The visitor fills out the form
- Clicking submit opens their local mail client
- The subject and body are pre-filled for an email to `info@optnlabs.com`

What this means:

- No backend setup is required for the current implementation
- `info@optnlabs.com` must be a working inbox
- The visitor must have a configured email client for the experience to work well
- Browser-only `mailto:` flows are less reliable on some devices and webmail-heavy setups

If OPTN Labs wants a more reliable inquiry funnel, replace this with one of:

1. A server action or API route that sends email
2. A form provider such as Formspree, Basin, or similar
3. A CRM-backed form that stores submissions and triggers notifications

## Next Content Phase

The current homepage structure is stronger, but the content is still a first-pass draft.

Next rewrite / reorg pass should focus on:

- Hero messaging and value proposition
- Proof claims and trust signals
- Clear separation between wallet, hosted infrastructure, and engineering services
- Dated launch updates instead of generic promises
- Search-oriented content pages and blog cadence

The first draft of the broader page strategy now lives in `content-map.md`.
