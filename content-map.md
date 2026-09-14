# OPTN Labs website — current content map for storytelling review

**Updated:** 2026-09-13
**Repository:** `/home/lightswarm/projects/optn-wallet-website`
**Review target:** current working tree, based on `main` at `a1881e7` with local, uncommitted copy changes across the commercial pages, technical guides, and two articles. This document is a content/placement map, not a claim that those local changes are deployed.

## Instructions for the reviewer

Review the website as a visitor journey and company story, not as an SEO exercise. Search Console/indexing strategy is out of scope. Assess the implementation critically: the intended story is approved, but the current working-tree voice pass is still open to review.

Use this map together with [`content/current-copy.en.md`](content/current-copy.en.md), generated from the website source by `npm run copy:extract`. The map explains why each block exists and where it appears; the generated catalog supplies extracted English strings and full published blog bodies. Run `npm run copy:check` to verify that the catalog still matches source. These materials reflect the current working tree, including local uncommitted edits, not necessarily the deployed website.

Focus on:

1. What a first-time visitor understands about OPTN in the first 10 seconds, and what they still do not understand after Home.
2. Whether each page has one clear job and appears at the right point in the journey.
3. Repeated explanations, proof points, status labels, CTAs, and product lists. Distinguish useful reinforcement from copy that makes visitors reread the same story.
4. Whether the material is grouped where a visitor expects it, and whether anything should move, combine, shorten, or be removed.
5. Whether the language is understandable and persuasive to non-specialists without making technical or commercial claims less accurate.
6. Whether a visitor can tell what is shipped, available, in development, planned, or illustrative—and what to do next.
7. Whether the copy leads with product value and capability while stating maturity and technical scope accurately, without repeating caveats or drifting into hype.

Please return: (a) a short overall diagnosis, (b) a page-by-page table with each page’s job, keep/reduce/move suggestions, and handoff, (c) the most consequential redundancies ranked by impact, and (d) any concrete comprehension or proof risks. Separate evidence from inference. Do not propose speculative SEO work or reopen the site architecture without identifying a specific visitor problem.

## Source and scope notes

- The route components and MDX under `app/` and `content/blog/` are authoritative for the current content. This map follows the working tree as inspected on the date above.
- Shared header and footer content is described separately because it appears across routes.
- The site currently has **15 static content routes** and **5 published blog articles**. The blog loader filters out future-dated MDX; the two articles in `content/temp/` are not part of the live blog content.
- The home page no longer includes a team section or a “Meet the team” CTA. Team/company detail lives on `/about`.
- `content/current-copy.en.md` is the companion English string catalog, generated from App Router page/handler files and their imported local modules. It is an editorial/localization reference, not a runtime localization file; published MDX sources remain authoritative for article bodies.
- Several older-looking components are not currently referenced by the routed pages: `Hero`, `StackSection`, `UseCases`, `FoundationsSection`, `WhyOptnExists`, `BeyondWalletAccess`, `ScreenshotCarousel`, `Contact`, and `ContactForm`. They are not part of the live content inventory below unless a route begins importing them.

## Company story and message hierarchy

The intended visitor progression is:

```text
USE      → OPTN Wallet: shipped self-custody BCH product and proof in use
BUILD    → public developer resources and infrastructure: reusable foundation
CONTROL  → Platform: financial coordination and programmable fund control direction
WORK     → Engineering: apply OPTN's product/stack experience to another team's work
```

Canonical company description: **OPTN Labs builds Bitcoin Cash products and infrastructure for self-custody, digital assets, developer integrations, and programmable payments for people, applications, and AI agents.**

The progression matters more than presenting Wallet, developer tools, infrastructure, programmable finance, and engineering as unrelated equal products. OPTN Wallet is the shipped product; Developers and Infrastructure explain the supporting stack; Platform is the differentiated programmable-payment direction; Engineering is the current commercial way to apply OPTN's expertise.

### Copy direction from the feedback pass

- Lead with what the products let people, applications, and AI agents do; explain transaction policy and enforcement after the payment/product value is clear.
- Keep the approved **Use → Build → Control → Work** progression. “Control” remains the story stage, while public descriptions can lead with programmable payments and agent workflows.
- Make AI-agent payments the clearest in-development wedge. Do not imply those capabilities are generally available or part of the stable Wallet.
- Use **Shipped**, **Available now**, **In development**, and **Coming soon** status labels. Avoid repeating the same maturity disclaimer in the paragraph immediately below.
- Describe BCH through relevant product and engineering properties, not through negative comparisons with other chains or investment-style upside claims. Comparisons in technical education should remain neutral and specific.
- Keep self-custody positive in commercial copy. Put direct answers and complete asset/covenant scope on Platform, FAQ, and technical pages; do not remove material qualifications.
- Keep legal/privacy copy outside this voice pass. Do not add demand, revenue, security-guarantee, or product-availability claims without evidence.

### Audience implied by the current content

- Someone evaluating or using OPTN Wallet.
- A BCH developer or product team looking for CashTokens, covenants, BCMR, wallet integration, or infrastructure resources.
- A team with a BCH workflow that may need engineering help.
- A prospect exploring bounded AI payments, treasury operations, or BCH application flows.
- An investor or partner moving from an external introduction/deck to the website to check that the company story, shipped proof, and maturity boundaries are coherent.

## Availability, custody, and claim boundaries

Keep these distinctions intact when reviewing or suggesting copy:

| State | What the website currently says |
| --- | --- |
| Shipped product | OPTN Wallet is a self-custody BCH/CashTokens wallet; GitHub and Google Play are linked. |
| Available now | Public developer resources, public BCH infrastructure surfaces, and scoped engineering support. Infrastructure availability is also represented by a dynamic status block. |
| Shipped proof | OPTN Wallet is publicly available through Google Play. About links to the official listing and uses a Wallet screenshot that also appears there. Other product cards retain their stated availability without unsupported volume metrics. |
| In development | Programmable payments and covenant-based financial workflows. AI-agent payments are the initial focus, not a generally available product. |
| Coming soon / future direction | Builder is coming soon; its card no longer repeats pricing/availability disclaimers. Managed coordination remains a longer-term product direction, not a live SaaS offer. |
| WIP | The in-wallet add-on system remains in development; it is not presented as a generally available third-party platform. Browser-extension claims are out of scope. |
| Self-custody and enforcement scope | OPTN Wallet is self-custody, with users retaining control of keys and funds. Covenant enforcement applies only to BCH/CashToken funds deliberately placed under BCH covenant control. Other chains/assets require a separate trusted bridge, custodian, or issuer. |
| Diagrams | Home and Infrastructure have responsive light/dark SVG variants that follow the saved site theme; the CashTokens state-transition visual uses theme-aware CSS. Home’s product-story visual shows Use → Build → Control → Work and links to relevant pages in separate HTML. Payment-flow diagrams are labeled as reference architecture/in development; technical guides identify educational examples and where implementations vary. |

The site does not include the deck’s raise amount, investor milestones, $25K pricing assumption, x402 market numbers, competitor comparisons, or use-of-funds. Those remain investor-conversation material, not public-site claims.

## Shared site shell

### Header and primary navigation

- Brand mark links to Home; theme toggle and responsive menu are shared.
- Primary nav, in order: **Wallet** (`/wallet`), **Build** (`/developers`), **Infrastructure** (`/infrastructure`), **Engineering** (`/engineering`), **About** (`/about`).
- Header CTA: **Talk to OPTN**, linking to the Home contact section.
- Platform and Solutions are intentionally not top-level primary-nav items; they are reachable through Home, footer, and in-page links.

### Footer

- Brand statement: “Wallet, infrastructure, and programmable payments on Bitcoin Cash.”
- **Explore:** Wallet, Platform, Solutions, Pricing.
- **Build:** Developers, Engineering, Infrastructure.
- **Learn:** About, Blog, CashTokens, Covenants, BCMR, FAQ.
- Contact: “Talk to OPTN,” `info@optnlabs.com`; social links to X, LinkedIn, and the OPTNWallet GitHub repository.
- Bottom links: Privacy (`/policy`) and email; copyright year is generated dynamically.

### Shared conversion pattern

- There is no separate `/contact` route. Most “Talk to OPTN” / “Discuss your workflow” CTAs lead to `/#contact`, which is a Home-page CTA section; many page-level `FinalCTA` instances use a mailto link directly.
- Home, Wallet, About, and supporting pages repeatedly offer Wallet, developer resources, GitHub, or an email conversation as next steps.
- No live general-purpose contact form is rendered by the current routes; `Contact` and `ContactForm` components exist but are not referenced by routed page source.

## Visitor journeys and page roles

```text
New visitor → Home → [Wallet proof] → [Build: Developers / Infrastructure]
                         ↓                       ↓
                    About / Blog          CashTokens / Covenants / BCMR
                         ↓                       ↓
                 Control: Platform → Solutions → Engineering / Pricing → Contact
```

This is a conceptual route, not a forced linear funnel. Technical readers can enter directly on any learning page; the footer, blog links, and in-page links support those paths.

| Route | Primary job | Main next step |
| --- | --- | --- |
| `/` | Introduce OPTN as a BCH product company, show the shipped Wallet, supporting stack, and in-development programmable-payment direction. | Use Wallet, explore developer resources, or contact OPTN. |
| `/wallet` | Explain the shipped self-custody product and how building it shaped the wider stack. | Download/review Wallet; continue to Developers or Engineering. |
| `/developers` | Orient self-serve builders and route them to focused technical resources. | Read a technical pillar, use GitHub, or ask Engineering for help. |
| `/infrastructure` | Explain BCH backend services and show current public endpoint status. | Request access, inspect TokenIndexer/BCMR, or check status. |
| `/platform` | Explain the in-development programmable-payment thesis, Request → Coordinate → Enforce → Operate model, and BCH covenant scope. | Discuss a workflow or move to Solutions/Engineering. |
| `/solutions` | Make agent payments the initial focus and frame treasury/BCH apps as workflow opportunities. | Discuss that workflow, use developer tools, or view Pricing. |
| `/engineering` | Position engineering as the commercial application of OPTN's shipped product and stack experience. | Start a scoped engineering conversation. |
| `/pricing` | Separate free access, upcoming Builder, scoped engineering, and the longer-term managed-coordination direction, with minimal repeated caveats. | Pick an available path or ask about scope. |
| `/about` | Explain the company trajectory, working products, qualified proof, and team. | Explore Wallet or contact OPTN. |
| `/faq` | Answer buyer/user objections after the main narrative is understood. | Contact OPTN, use Wallet, or read Builder Notes. |
| `/blog` and `/blog/[slug]` | Provide product proof and deeper technical/product learning. | Continue to authoritative product or technical pages. |
| `/cashtokens` | Teach the token primitive and product implementation boundary. | Continue to Covenants, BCMR, Wallet, Developers, or related articles. |
| `/covenants-on-bitcoin-cash` | Teach what covenant rules can constrain, how a spend path works, and where limits apply. | Continue to Platform, CashTokens, Engineering, or related articles. |
| `/bcmr-token-metadata` | Teach metadata resolution and its distinction from on-chain transaction authority. | Continue to Infrastructure, CashTokens, Wallet, Developers, or related articles. |
| `/policy` | Present the OPTN Crypto Wallet App privacy policy. | Contact by email for questions. |

## Route-by-route content and placement

### Home — `/` (`app/page.jsx`)

**Role:** overview and conversion. Home introduces the story, proves it through the Wallet, then moves to Build and Control. It does not duplicate the team/About section.

**Section order:**

1. **Hero — “Bitcoin Cash products for people, applications, and AI agents.”** Positions OPTN through its shipped self-custody Wallet and developer infrastructure, then signals its in-development programmable-payment direction. A collage of real OPTN Wallet screens supplies product proof. Supporting prompt: “Use the wallet. Build with the stack. Explore programmable payments.” Actions: Wallet, Developers, Talk to OPTN.
2. **Shipped product — “The product at the foundation of the OPTN stack.”** Describes OPTN Wallet as bringing BCH, CashTokens, connected applications, and advanced transaction flows into one self-custody product. Capability chips: BCH/CashTokens, WalletConnect, app connections, advanced transactions. Links to Wallet, GitHub, and the latest Wallet update.
3. **Product story — “From shipped product to programmable payments.”** A responsive Use → Build → Control → Work visual presents the shipped Wallet, available developer resources and infrastructure, programmable payments in development, and available scoped Engineering. A separate accessible HTML link row routes Use to Wallet, Build to Developers and Infrastructure, Control to Platform, and Work to Engineering.
4. **Programmable payments · In development — “Payment infrastructure for autonomous software.”** Introduces agent payments, BCH-native transaction composition, and programmable financial rules. The flow reads software request → OPTN composes the transaction → BCH validates transaction rules; caption: “Reference architecture · Platform in development.”
5. **Final contact/decision section — “Ready to build on Bitcoin Cash?”** Choose the Wallet, Talk to OPTN, or Developer resources.

**Placement note:** Home is the short version of About, Wallet, Developers/Infrastructure, Platform, and the contact offer. Deeper explanation belongs on those pages. No team bio or proof-claim catalogue is repeated here.

### Wallet — `/wallet` (`app/wallet/page.jsx`)

**Role:** shipped product page and concrete “Use” proof.

**Section order:**

1. **Hero:** Shipped status; “A self-custody wallet for BCH, CashTokens, and connected apps.” Describes sending BCH, managing CashTokens, connecting to apps, and advanced transaction workflows. Actions: Google Play and GitHub. Keep the hero text-led; the following carousel is the single place for Wallet screen imagery.
2. **Inside OPTN Wallet:** an eight-screen, manually controlled carousel shows Wallet home, assets, CashTokens, actions, sending, receiving, app browsing, and airdrop setup.
3. **Payments, assets, and apps — “Use BCH and CashTokens in connected experiences.”** Four capability rows: CashTokens; advanced transactions; connecting to apps; richer BCH transaction/contract workflows.
4. **From wallet to stack — “The product that started the stack.”** Explains how solving real product needs across tokens, app connections, infrastructure, and transactions shaped the developer stack and programmable-payment work. A compact link panel routes to Developers, Infrastructure, Engineering, and the latest Wallet update; decorative logo artwork was removed.
5. **Final CTA:** “Try OPTN Wallet.” Download or review the open implementation.

**Maturity note:** The in-wallet add-on system remains in development; do not portray it as generally available. Browser-extension claims are out of scope. The update article, rather than this page, holds the longer current-state/release details.

### Developers — `/developers` (`app/developers/page.jsx`)

**Role:** self-serve resource directory; it should route, not reproduce all technical lessons.

**Section order:**

1. **Hero:** “Build your BCH product on a stronger foundation.” Says building OPTN Wallet exposed the practical integration challenges of a complete BCH product; public resources cover CashTokens, covenants, metadata, wallet connections, and infrastructure. Links to Engineering and GitHub. A request → resource → working integration diagram illustrates the builder journey.
2. **The supporting layer — “Build on the foundation behind OPTN Wallet.”** Four linked cards: CashTokens, Covenants, BCMR, Wallet integration.
3. **Need help getting to launch? — “From first integration to production readiness.”** Architecture/implementation, testing/review, and hosted services; describes a route from self-serve resources to implementation help.
4. **Final CTA:** Building something on BCH? Tell OPTN what is being made and where it gets difficult.

### Infrastructure — `/infrastructure` (`app/infrastructure/page.jsx`)

**Role:** specific BCH service surface and operational access; not a generic introduction to everything OPTN builds.

**Section order:**

1. **Hero:** “The BCH services your product needs to keep moving.” Connects services to what OPTN Wallet needed: chain data, indexing, metadata, and connectivity. CTAs: Request access / View token data.
2. **Service map — “Different jobs. Purpose-built services.”** A responsive desktop/mobile SVG starts with wallets and applications, then distinguishes Electrum connectivity, Chaingraph queries, TokenIndexer token data, BCMR metadata resolution, and IPFS content delivery. Endpoint-specific network scope is labeled conservatively; live availability remains in the status section.
3. **TokenIndexer — “Make CashTokens easier to show and use.”** App-ready balances, holder data, metadata, portfolio views; explains integration and self-run/service-access operating options. CTAs: ask about data access / explore BCMR.
4. **Public service status.** Runtime-fetched public service list and health/status data; it may change independently of static page copy.
5. **Final CTA:** request BCH backend/service access.

### Platform — `/platform` (`app/platform/page.jsx`)

**Role:** conceptual and technical center of the Control story. It should explain the model and boundaries, not act as a generic sales page for every solution.

**Section order:**

1. **Hero — Platform · Programmable payments · In development:** “Payment infrastructure for software and AI agents.” Explains that OPTN is developing BCH-native payment infrastructure and that BCH covenant rules validate spending paths for funds placed under that control; links to Talk to OPTN and shows the reference architecture.
2. **How the platform fits together — “From payment request to an enforceable transaction path.”** Preserves **Request → Coordinate → Enforce → Operate**, with application requests, OPTN translating requests into transaction and policy paths, BCH covenant validation, and ongoing monitoring, reconciliation, and integrations while customers retain custody.
3. **Payment and transaction rules — “Define how software can use money.”** Recipients, amounts, next steps, and recovery.
4. **Programmable authority — “Define what a transaction is allowed to do.”** Explains how transaction rules complement key authorization, then contrasts authorization with programmable transaction conditions. Links to Engineering.
5. **Built on Bitcoin Cash — “Starting with BCH and CashTokens.”** States that covenant rules apply to BCH/CashToken funds deliberately placed under covenant control; other assets/chains require a separate trusted bridge, custodian, or issuer.
6. **Final CTA:** discuss an agent-payment or programmable-finance workflow.

### Solutions — `/solutions` (`app/solutions/page.jsx`)

**Role:** demand/use-case framing. Help visitors identify a workflow before sending them to platform mechanics or engineering delivery.

**Section order:**

1. **Hero:** “Payments and financial workflows for autonomous software.” Names AI-agent payments as the initial BCH-native development focus and positions scoped engineering as a route for treasury and BCH-application work. CTA: Discuss your workflow.
2. **Use cases — “Start with the financial workflow.”** Three cards:
   - **AI payments — Initial focus · In development:** payment infrastructure for agents paying APIs/services, receiving funds, and participating in automated workflows.
   - **Treasury & business workflows:** define repeatable payouts, grants, and delegated spending around transaction rules, state, and recovery paths.
   - **BCH applications:** combine CashTokens, wallet connectivity, infrastructure, and transaction tooling in a user-facing product.
   Each card discusses the workflow by email rather than opening a new product route.
3. **Ways to work with us:** start with public tools or involve OPTN for design, integration, testing, and support; links to Developers and Pricing plus Talk to OPTN.
4. **Final CTA:** discuss payment composition, BCH integration, and the transaction rules the product needs.

### Engineering — `/engineering` (`app/engineering/page.jsx`)

**Role:** current commercial application of OPTN product and stack experience.

**Section order:**

1. **Hero:** “Product engineering for Bitcoin Cash applications.” Positions engineering as an application of the Wallet/stack experience to architecture, transaction design, integration, testing, and release.
2. **Apply the stack — “Apply OPTN’s product experience to your build.”** Four service areas: wallet/application integration; CashTokens and BCMR; CashScript/covenant patterns; backend, testing, deployment.
3. **From product idea to launch / Built from working products.** Three delivery steps: Plan; Build or review; Test and prepare. Adjacent product list: shipped OPTN Wallet; shipped FundMe.cash campaign flows; programmable payments marked “In development.”
4. **Go deeper.** Links to Developers, CashTokens, Covenants, BCMR, Blog, GitHub; a short platform-scope note links to Platform.
5. **Final CTA:** discuss the product, technical challenge, and intended outcome.

### Pricing — `/pricing` (`app/pricing/page.jsx`)

**Role:** explain the engagement/availability model. This is not a page of fixed dollar price points.

**Section order:**

1. **Hero:** “Start with the open stack. Work with OPTN when you need more.” Emphasizes free Wallet/tools and scoped engineering; CTAs to developer tools or contact.
2. **Choose your path:**
   - **Community — Free / Available now:** Wallet, open tools/templates, local testing, public documentation.
   - **Builder — Coming soon:** guided setup, reusable integration workflows, and a smoother developer experience; no separate pricing disclaimer beneath the status.
   - **Custom engineering — Project-based / Available now:** workflow/architecture, wallet/CashToken integration, covenant/transaction design, testing/release support.
   - Custom offer band expands production workflow design, adversarial testing, migration, and release work.
   - Fine print covers only separately scoped integration, audit, compliance, and engineering work.
   - A long-term-direction band describes managed coordination for programmable financial workflows without presenting it as a current offer.
3. **Common questions.** Managed coordination availability, custody, choosing Custom, and Builder timing.
4. **Final CTA:** workflow inquiry.

### About — `/about` (`app/about/page.jsx`)

**Role:** the single home for company origin, principles, team, and founder/product proof.

**Section order:**

1. **Hero:** “Building Bitcoin Cash products for people, apps, and AI agents.” Canadian company founded in 2025; builds products and infrastructure for self-custody, digital assets, developer integrations, and programmable payments. Mission and side panel summarize the product, supporting stack, and programmable-payment direction.
2. **Why OPTN exists — “Make advanced Bitcoin Cash capabilities usable.”** States BCH’s low-cost UTXO transactions, native tokens, and transaction-level programmability, then connects OPTN Wallet to infrastructure and in-development payment systems for autonomous software.
3. **How we work — “Open where it helps. Clear where it matters.”** Three principles: open foundation; self-custody by design; practical engineering. The custody and covenant scope is stated positively and factually.
4. **Track record — “Built through working BCH products.”** Product cards: shipped OPTN Wallet; shipped FundMe.cash; programmable payments marked “In development.” The Wallet card includes an authentic product screenshot and links to the official Google Play listing.
5. **The team — “Built by people with BCH product experience.”** Founder Jerry Qian and co-founder Kyle Wildeman bios. Kyle is identified as FundMe.cash’s creator. Follow-up connects team experience to the current programmable-payment focus.
6. **Final CTA:** product idea / Talk to OPTN.

### FAQ — `/faq` (`app/faq/page.jsx`)

**Role:** objection handling and clarification, not a second company overview.

Intro frames this as a short answer page for teams evaluating OPTN for a BCH product, Wallet, or infrastructure. Nine accordion questions cover:

1. What OPTN Labs is (including Wallet as shipped proof).
2. What OPTN Wallet is and its current broad capabilities.
3. Whether OPTN holds keys or funds.
4. What is available vs in development (including Builder and the add-on system).
5. What BCH services are available (Electrum, Chaingraph, BCMR, IPFS, TokenIndexer/status).
6. Whether public tools can be used independently.
7. CashTokens, covenants, and CashScript assistance.
8. When to contact about custom engineering.
9. What information to send when contacting OPTN.

The closing “Still unsure?” block routes to contact or Blog. The FAQ intentionally repeats key availability/custody answers, but is a likely place to evaluate whether too many page-level explanations are being repeated verbatim.

### Technical learning pages

These are deeper educational/reference pages, distinct from the commercial summaries on Home, Solutions, and Platform. All include in-page progression, cross-links to related pages/articles, and a final CTA.

#### CashTokens — `/cashtokens` (`app/cashtokens/page.jsx`)

**Role:** explain the token primitive and the complete product implementation surface.

1. Hero: “Build token-enabled products on Bitcoin Cash.” Explains fungible tokens/NFTs on BCH; an editable diagram shows a mutable NFT commitment changing from example bytes `0x01` to `0x02` across a spend, with one successor and the same category. An immutable-NFT caveat is included.
2. **The foundation — “The building blocks for token-powered BCH products.”** Fungible amounts, NFT commitments/capabilities, token-aware transaction construction, and BCMR human-readable display; explains that token data on one output belongs to one category.
3. **From foundation to product — “Make token experiences work from end to end.”** Integration sequence: select token UTXOs, construct valid outputs, resolve metadata, test edge cases; routes to BCMR and covenant material.
4. **CashTokens and covenants — “Asset state and spend rules are different layers.”** Separates token state/identity from transaction-path restrictions.
5. **Building complete CashToken products — “From native token state to a usable product.”** Wallet behavior, metadata availability, spend rules, application correctness.
6. **Continue the technical path** plus **Related reading** links to Covenants, BCMR, Wallet, Developers and three CashTokens articles.
7. Final CTA for a token-aware BCH product.

#### Covenants — `/covenants-on-bitcoin-cash` (`app/covenants-on-bitcoin-cash/page.jsx`)

**Role:** explain transaction-level rules, patterns, authorization distinctions, and technical limits.

1. Hero: “Give Bitcoin Cash transactions clear rules.” Defines covenant value and links toward how-it-works; illustrative architecture.
2. **What a covenant can control — “Build guardrails into the transaction itself.”** Lists transaction dimensions controlled by rule.
3. **How it works — “Turn a business rule into a permitted path.”** Four-step Lock → Build → Validate → Continue flow, with stateful successor behavior.
4. **Authorization and enforcement:** explains that signing and covenant rule checks answer different questions.
5. **Common Bitcoin Cash patterns — “Use covenants where the transaction path matters.”** Pattern cards and links to CashTokens/Engineering.
6. **Design considerations — “Design for explicit transaction paths.”** Explains scope/implementation responsibilities without presenting covenants as universal account security.
7. **Continue the technical path**, **Related reading**, CHIP reference, and final CTA.

#### BCMR token metadata — `/bcmr-token-metadata` (`app/bcmr-token-metadata/page.jsx`)

**Role:** explain user-facing token identity/context and keep metadata distinct from consensus/transaction authority.

1. Hero: “Make CashTokens easier for people to recognize and use.” Graphic: on-chain category → BCMR document → wallet/app; notes client behavior can vary.
2. **What BCMR contributes — “Turn token IDs into useful product experiences.”** Metadata fields/context.
3. **Metadata resolution — “From an on-chain ID to a name users understand.”** Resolution sequence, validation, unavailable-source handling, and links to Infrastructure/Developers.
4. **BCMR in the product stack — “From token creation to a clear wallet experience.”** Product layers from token creation through user display.
5. **Metadata and transaction authority — “Two layers with different jobs.”** BCMR provides display context; on-chain category and BCH consensus remain authoritative. Clients need registry trust, update, cache, and fallback rules.
6. **Continue the technical path**, **Related reading**, CHIP-BCMR specification link, and final CTA.

### Blog index and articles — `/blog`, `/blog/[slug]`

**Blog index job:** archive of builder notes, product updates, and technical field notes. The lead copy points first to the latest product update, then CashTokens, covenants, wallet architecture, and infrastructure. Each card shows date, up to three tags, title, summary, and “Read post.” Individual posts have date/tags, reading progress, heading-derived contents/progress, and links.

Currently dated/published articles in `content/blog/`:

| Date | Article | Content job / review note |
| --- | --- | --- |
| 2026-09-10 | **OPTN Wallet Update: CashTokens, BCH Apps, and What’s Shipping in 2026** (`optn-wallet-update-2026`) | Current-state product article: self-custody BCH/CashTokens, WalletConnect, Android/desktop releases, stable improvements, and in-development add-ons and agent-payment experiments. It distinguishes prerelease from stable wallet functionality without repeatedly apologizing for product maturity. |
| 2026-05-26 | **CashTokens in Production: Wallet Flows, NFT Control Objects, and Failure Cases** (`cashtokens-wallet-nft-failures`) | Technical follow-up about token-aware wallet flows, NFT control objects, failure cases, and tests. |
| 2026-05-19 | **CashScript Covenant Patterns for CashTokens** (`cashscript-cashtokens-covenants`) | Technical follow-up on transaction introspection, token-aware output checks, and division of responsibility between covenant and builder. |
| 2026-05-12 | **CashTokens in Practice: Building Native Token Products on Bitcoin Cash** (`cashtokens-practical-entry`) | Engineering guide to token-aware wallets, transaction construction, covenants, metadata, and integration testing, framed around BCH transaction design. |
| 2026-01-26 | **CashTokens Kickoff: Building with Native Tokens and Covenants on Bitcoin Cash** (`cashtokens-kickoff`) | Introductory token/covenant article. Updated to explain UTXO token state and covenant workflows as an engineering model, removing investment-style upside and negative competitor framing. |

The four CashTokens articles overlap by subject with `/cashtokens` and with one another by design (overview → practice → wallet/failure cases → covenant patterns). Review whether the article ladder is obvious and whether each article adds depth rather than repeats the technical pillar. The Wallet update is the only current product/release article.

### Privacy policy — `/policy` (`app/policy/page.jsx`)

**Role:** legal/product policy page, not part of the sales/story sequence. It is titled **“OPTN Crypto Wallet App Privacy Policy”**, has effective date **July 15, 2025**, and sections for introduction, information collected, local storage, third-party services, authentication, permissions, legal compliance, updates, contact, security, children, and retention.

It currently makes specific factual statements about no data collection/transmission, local private-key/transaction-history storage and encryption, third-party services, authentication, and camera use. Those are material product/legal claims and should be checked against the current Wallet behavior and legal review before anyone rewrites them based only on storytelling preferences. Its age/effective date is visible and may prompt a separate currency review.

## Cross-page grouping and likely repetition to test

These are review questions, not predetermined edits:

1. **Company summary:** Home, About hero, FAQ Q1, footer, and metadata all describe OPTN. Is that repetition helping different entry points, or is one concise canonical explanation being rephrased too many times?
2. **Wallet as proof:** Home, Wallet, About, Developers, Engineering, FAQ, and Blog all mention the Wallet. The repetition can establish shipped proof, but detailed feature lists/releases should have one owner (Wallet page/article).
3. **Supporting stack:** Home, About, Developers, Infrastructure, Engineering, and Pricing name tools/services. Keep the distinctions legible: Developers = self-serve learning/resources; Infrastructure = operated service surface/status; Engineering = scoped implementation work.
4. **Control thesis:** Home teaser, Platform explanation, Solutions use cases, About mission/story/boundary, Engineering scope note, Pricing future managed-coordination band, and FAQ repeat financial coordination/covenants/custody. Platform should own the model and limits; Solutions should own customer problems; Engineering should own delivery; Pricing should own offer availability.
5. **Availability/custody:** status labels and no-custody boundary recur across Home, Wallet, Platform, About, Pricing, FAQ, and Engineering. Assess where full explanation is necessary and where a short link or status label is enough.
6. **Proof:** About and Engineering both list Wallet, FundMe.cash, and covenant coordination. About links directly to the public Google Play listing as the public verification surface for OPTN Wallet.
7. **Technical cluster:** the CashTokens pillar and four articles share topic space. Evaluate the learning sequence and whether CashTokens, covenant, and BCMR pages each have a distinct teaching boundary.
8. **CTA frequency:** most pages end in contact; many also place a CTA in the hero or mid-page. Does each extra prompt help visitors choose, or create repetitive sales language? There is one primary inquiry channel (email), not a multi-step form.
9. **“Platform” and “Solutions”:** neither is in primary navigation but both are in the footer. Can visitors infer the distinction from labels and entry links without being forced to read both pages?
10. **Legacy/archive tone:** the earliest CashTokens posts use “Web3,” “practical alternative,” and cross-chain comparisons, while current commercial pages center practical BCH products and workflows. Assess whether those articles add historical perspective or make the company voice feel inconsistent.

## Explicit non-goals and constraints for recommendations

- Do not reopen Search Console, keyword targeting, indexing, or speculative traffic strategy in this review.
- Do not invent customer demand, pilot outcomes, product availability, security guarantees, adoption, or revenue claims.
- Do not imply that OPTN takes custody or that covenant control applies to arbitrary funds/chains; preserve the deliberate BCH/CashToken covenant boundary.
- Do not promote Builder, managed coordination, or the Wallet add-on system beyond their stated maturity; browser-extension claims are out of scope.
- Keep founder/team content on About rather than adding it back to Home.
- Prefer visitor comprehension and distinct page roles over adding more sections or repeating a product catalogue.
- Recommend structural changes only when tied to a specific confusion, content duplication, or missing visitor decision.
