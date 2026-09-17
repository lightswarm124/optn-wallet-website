# OPTN Labs website — current content and layout review map

**Updated:** 2026-09-16
**Repository:** `/home/lightswarm/projects/optn-wallet-website`

This document describes the current working tree for editorial and UX review. It
is not a deployment claim. Use it with
[`content/current-copy.en.md`](content/current-copy.en.md), the generated
English text catalog. Regenerate that catalog with `npm run copy:extract` and
verify it with `npm run copy:check` after changing website copy.

## Review brief for ChatGPT

Review the site as a first-time visitor journey rather than an SEO exercise.
Assess whether the copy and layout make this hierarchy immediately clear:

1. **OPTN Wallet is the released product.**
2. **The ecosystem section connects users and builders to BCH resources,
   standards, infrastructure, and engineering.**
3. **Controlled payments for software and AI are WIP pilot exploration, shown
   after the Wallet and ecosystem rather than as a released platform.**

Please return:

- a short overall diagnosis;
- a page-by-page assessment of each page's job and handoff;
- any wording or layout that blurs the three levels above;
- the highest-impact changes only, separated into copy and layout;
- any claim that appears unsupported, overly defensive, or likely to confuse a
  user or investor.

The route components and MDX files under `app/` and `content/blog/` are the
authoritative sources. The generated English catalog is an editorial and
i18n-style review artifact, not a runtime translation file.

## Site-wide navigation and behavior

### Header

The header remains visible while the visitor scrolls. Desktop and mobile
navigation use this order:

1. **Wallet** → `/wallet`
2. **Ecosystem** → `/ecosystem`
3. **Engineering** → `/engineering`
4. **About** → `/about`
5. Theme control
6. **Contact us**

This order deliberately leads with the released product. `Platform` and
`Solutions` are no longer presented as parallel navigation choices.

### Footer

- Brand statement: “OPTN Wallet, open BCH resources, infrastructure, and
  engineering.”
- Explore: Wallet, Ecosystem, Engineering, Work with OPTN.
- Learn: About, Blog, CashTokens, Covenants, BCMR, FAQ.
- Contact: “Contact us,” email, the Telegram group, and social links.

### Responsive reading and interaction

- The shared type scale is enlarged across desktop and mobile so navigation,
  card copy, captions, controls, and footer links remain comfortably readable.
- Major two-column layouts collapse to one column below the tablet breakpoint;
  dense card grids and Wallet feature tabs reduce their column count again on
  narrow phones.
- Primary actions become full-width where useful on mobile. Carousel arrows,
  feature controls, theme controls, and pagination dots use larger touch
  targets while retaining compact visual indicators.
- Keyboard focus is visible on links, buttons, and expandable FAQ summaries.
- Long technical endpoints wrap within their cards, and the page shell prevents
  decorative layouts from creating horizontal page overflow.

### Route compatibility and hidden pages

- `/solutions` redirects to `/platform` and is omitted from navigation and the
  sitemap so visitors do not encounter two pages describing the same offer.
- `/demo` remains active for development and direct sharing, but no visible
  header, footer, or page-body link routes visitors to it.
- There is no separate `/contact` page. “Contact us” routes to the Home contact
  form. The general OPTN email address remains available in the footer as a
  fallback.
- The contact form collects name, email, optional company/project, inquiry
  type, and message. It submits through FormSubmit to `info@optnlabs.com`; the
  website has no contact database or email credentials. The form includes
  required-field validation, a honeypot, sending/success/error states, and a
  disclosure that FormSubmit may retain submissions for up to 30 days.

## Primary visitor journey

```text
USE         → OPTN Wallet
EXPLORE     → Bitcoin Cash ecosystem
COLLABORATE → Engineering and infrastructure
PILOT       → Controlled-payment exploration
```

The Wallet is the product anchor. Ecosystem material explains what surrounds
it. Controlled-payment work is introduced later and explicitly described as
pilot exploration.

## Route map and rough layouts

| Route | Visitor-facing job | Primary handoff |
| --- | --- | --- |
| `/` | Establish OPTN Wallet as the released product, summarize its capabilities, then introduce the ecosystem and pilot work. | Wallet, Ecosystem, or Contact us. |
| `/wallet` | Explain what people can do with OPTN Wallet and show the product. | Google Play, GitHub, ecosystem resources. |
| `/ecosystem` | Serve as the combined ecosystem map for Wallet, CashTokens, BCMR, covenants, open source, infrastructure, token data, and public service status. | Relevant ecosystem section or Contact us. |
| `/platform` | Explain the WIP controlled-payment pilot model without presenting it as a released platform. | Contact us about a pilot project. |
| `/solutions` | Compatibility redirect only. | `/platform`. |
| `/engineering` | Offer implementation help based on OPTN's BCH product and transaction experience. | Contact us or Ecosystem. |
| `/developers`, `/infrastructure` | Compatibility redirects for the former standalone routes. | `/ecosystem` or its Infrastructure section. |
| `/pricing` | Explain open exploration, scoped pilot work, and project-based engineering. | Contact us. |
| `/about` | House company, mission, principles, team, and the distinction between released product and pilot work. | Wallet or Contact us. |
| `/faq` | Answer Wallet, custody, ecosystem, infrastructure, engineering, and pilot questions. | Wallet, Contact us, or Blog. |
| `/demo` | Provide a direct-share controlled-payment walkthrough when media assets are ready. | Model, public resources, or Contact us. |
| `/cashtokens` | Teach the CashTokens layer and route into Wallet or implementation help. | Wallet, BCMR, Engineering. |
| `/covenants-on-bitcoin-cash` | Explain BCH covenant concepts and practical workflow boundaries. | Pilot projects or Engineering. |
| `/bcmr-token-metadata` | Explain token metadata and user-facing asset context. | CashTokens, infrastructure, or Engineering. |
| `/blog` | Publish Wallet updates and BCH builder notes. | Relevant product or technical page. |
| `/policy` | Privacy information. | Site navigation. |

### Home — `/`

1. **Wallet hero.** The left column introduces OPTN Wallet and links to Google
   Play, the Wallet page, and Contact us. The right column uses the full OPTN
   header logo with linked Google Play and GitHub Releases buttons; it does not
   use the controlled-payment flow.
2. **Wallet capabilities.** Four short cards cover everyday payments,
   CashTokens, connected apps, and advanced tools.
3. **Ecosystem.** Four cards route to Wallet, tokens and metadata, covenants and
   contracts, and infrastructure and data.
4. **Pilot exploration.** The controlled-payment message and flow chart appear
   later, after the released Wallet and ecosystem. The section is marked WIP
   once and explains that this work is separate from the released Wallet.
5. **Contact form.** A compact, responsive form handles general, Wallet,
   ecosystem/infrastructure, engineering, pilot, and partnership inquiries
   without opening the visitor's email application.

### Wallet — `/wallet`

1. **Product hero.** Self-custody BCH and CashTokens, connected applications,
   Google Play, and GitHub.
2. **Product tour.** A manually controlled screenshot carousel shows the Wallet
   interface. Screenshots remain in this carousel rather than the hero.
3. **Feature carousel.** Six user-facing groups cover payments, CashTokens,
   connected apps, security and recovery, wallet utilities, and advanced
   workflows. The carousel supports buttons, feature tabs, keyboard arrows, and
   touch swipes.
4. **Ecosystem bridge.** Links to the ecosystem, infrastructure, engineering,
   and the latest Wallet update.
5. **Final CTA.** Get OPTN Wallet.

The feature copy describes user capabilities rather than implementation work or
release-note optimizations. Experimental add-ons are not presented as generally
available features.

### Ecosystem — `/ecosystem`

1. **Hero.** Positions OPTN Wallet alongside open-source code, BCH standards,
   infrastructure, and practical resources.
2. **Ecosystem map.** Routes visitors to Wallet and app connections, CashTokens
   and metadata, covenants and contracts, and infrastructure and data.
3. **Open resources.** Connects product experience to code, technical learning,
   and public services.
4. **Infrastructure and data.** Integrates the service map, access paths,
   TokenIndexer, and live public-service status into the Ecosystem page.
5. **Final CTA.** Contact OPTN about building in the BCH ecosystem.

The former `/developers` and `/infrastructure` URLs redirect to this canonical
page so the visitor-facing name and URL now match.

### Pilot projects — `/platform`

1. **Hero.** Clearly labels the work as WIP pilot projects for controlled
   software and AI payments.
2. **Pilot model.** Request → Coordinate → Enforce → Operate.
3. **Financial rules.** Recipients, amounts, next steps, and recovery.
4. **Core model.** Separates signing authorization from programmable transaction
   conditions.
5. **Technical foundation.** “Why Bitcoin Cash” appears here only; it is not
   repeated on Home.
6. **Final CTA.** Contact OPTN about a specific pilot workflow.

### About — `/about`

1. **Company hero.** OPTN Labs is the company behind OPTN Wallet and a
   contributor to the BCH ecosystem.
2. **From product to ecosystem.** Connects the Wallet, shared resources, and the
   later controlled-payment exploration.
3. **Principles.** Useful products, self-custody, and an open ecosystem.
4. **Current work.** Distinguishes OPTN Wallet as released, ecosystem work as a
   broad supporting layer, and controlled payments as WIP pilot exploration.
5. **Team.** Company biographies stay here rather than being repeated on Home.

## Current wording rules

- Use **Contact us** for the general commercial CTA. Do not substitute
  pilot-specific or conversational alternatives.
- Use **Ecosystem** for the canonical `/ecosystem` section.
- Use **Pilot projects** for `/platform`; do not present Platform and Solutions
  as separate products.
- Describe **OPTN Wallet** as the released product.
- Keep WIP language localized to controlled-payment pilot exploration. Do not
  spread “in development,” “proof,” or maturity caveats throughout unrelated
  Wallet and ecosystem copy.
- Keep “Why Bitcoin Cash” on the Pilot projects page rather than duplicating it
  on Home.
