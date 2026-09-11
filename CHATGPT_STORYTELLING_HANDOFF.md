# OPTN Labs website storytelling handoff

This is a source-faithful handoff for the deeper storytelling review. It describes the implementation currently in the repository and includes an i18n-style English copy set for the wording that is now live in the page source.

Repository: `/home/lightswarm/projects/optn-wallet-website`

The current application changes are working-tree changes and have not been committed in this pass. Search Console and speculative SEO work are intentionally out of scope here because the site has not accumulated useful search data yet.

## Canonical company story

OPTN builds products that make advanced Bitcoin Cash capabilities usable. OPTN Wallet is the proof. The developer tooling and infrastructure behind it form a reusable stack. That work leads to the differentiated direction: enforcing how software-operated funds are allowed to move.

The visitor-facing mental model is:

```text
Use      -> OPTN Wallet, a shipped self-custody product
Build    -> developer resources and infrastructure behind the product
Control  -> programmable limits around software-operated funds
Work     -> Engineering help applying the stack to another product
```

Engineering is the commercial access point to OPTN expertise, not a separate technology pillar.

## Page-by-page narrative responsibilities

| Page | Narrative job | Visitor handoff |
| --- | --- | --- |
| Home | Introduce the whole progression: BCH capability, Wallet proof, reusable stack, and control direction. | Choose Wallet, developer resources, or contact OPTN. |
| Wallet | Prove that OPTN ships a real self-custody BCH product and explain what building it taught the company. | Move to the stack, Engineering, or the Wallet update. |
| Developers | Organize the reusable tools and send builders to the right technical resource. | Explore a technical pillar, GitHub, or Engineering. |
| Infrastructure | Explain the operational BCH services that products need. | Request access or continue into token data and public status. |
| Platform | Teach the central distinction between authorization and permitted transaction outcomes. | Apply the idea to a real use case or contact Engineering. |
| Solutions | Show where bounded transaction workflows may be useful. | Discuss a workflow, review pricing, or explore public tools. |
| Engineering | Explain how OPTN applies its own product and stack experience to another team’s build. | Start a scoped conversation. |
| Pricing | Answer what is free, what is coming, and what requires project scope. | Choose Community, watch Builder, or discuss Custom engineering. |
| About | Explain why OPTN exists and who is behind it. | Return to the Wallet or contact OPTN. |
| FAQ | Remove uncertainty after the visitor understands the main story. | Resolve custody, availability, access, and contact questions. |
| Blog | Accumulate the evidence trail: product proof, technical lessons, infrastructure, and future applications. | Read deeper evidence without changing the core page roles. |

## Detailed implementation changes

### Home — `app/page.jsx`

- The homepage now moves the Wallet proof section before the supporting-stack section.
- The hero uses the immediately understandable heading `Bitcoin Cash wallets, tools, and infrastructure.` and changes the supporting story from a catalogue to a progression: BCH has more capability than simple payments, OPTN makes it usable, and the company is exploring bounded software-operated funds.
- The hero prompt is now `Use the wallet. Build with the stack. Explore what comes next.`
- The old four equal ecosystem cards became two cards after the Wallet proof:
  - `Build` — developer resources and infrastructure as the reusable BCH stack.
  - `Control` — programmable fund control, explicitly marked `In development`.
- The stack section now explains why those layers follow the Wallet: `Once a real wallet works, the next layers become clear...`
- The hero now uses `systems designed to set clear limits around software-operated funds` for a cleaner product-to-direction comparison.
- The stack transition now says `give other builders the tools and infrastructure they need` to avoid repeating `build`.
- The Control card is intentionally a teaser: `Explore transaction rules that limit what software-operated funds can do.` The following fund-control section carries the deeper explanation.
- A bridge sentence now explains the need for transaction-level constraints: `As applications become more capable, the question shifts from who can request a transaction to what transactions should be possible at all.`
- The Wallet proof is now explicitly titled `The product that proves the stack.`
- The fund-control section remains the narrative turn after the product and stack proof. Its transaction flow is still labeled illustrative and not a live deployment.
- The final CTA remains the single choice point for the homepage: use the Wallet, contact OPTN, or explore developer resources.

### Wallet — `app/wallet/page.jsx`

- The page now opens with `The product that proves the stack` and the shipped status.
- The hero explains that OPTN built the Wallet to make more of BCH practical for real users.
- The capability copy now says `Support richer BCH transaction and contract workflows` rather than implying a mature covenant-powered product surface.
- The product-proof section now says `Where the story starts` and explains that the Wallet came before the wider tools, services, and transaction-control work.
- Existing capability rows and product artwork remain; no add-on system was promoted as generally available.

### Developers — `app/developers/page.jsx`

- The hero now explains that OPTN Wallet exposed the hard parts of building a useful BCH product.
- Developer resources are framed as the supporting layer behind the Wallet, not as another independent OPTN business line.
- The page still organizes access to CashTokens, Covenants, BCMR, and Wallet integration instead of duplicating the technical pillar pages.

### Infrastructure — `app/infrastructure/page.jsx`

- The hero now connects infrastructure directly to the Wallet’s needs: chain data, token indexing, metadata, and connectivity.
- The public-service section is now labeled `The supporting layer` and headed `The foundation behind usable BCH apps.`
- The page remains operational: service catalog, TokenIndexer, access model, and public status. It does not become a second BCMR or CashTokens explainer.

### Engineering — `app/engineering/page.jsx`

- The hero now leads with proof: OPTN built the Wallet and supporting BCH stack before offering that expertise to other teams.
- The capability section is framed as applying the stack to a customer product.
- The process is one path: `From product idea to launch`.
- The product list is labeled `Proof behind the work`, so Engineering reads as the downstream service layer rather than a separate company identity.

### About — `app/about/page.jsx` and `app/globals.css`

- The product-directory section was removed so About does not repeat the sitemap.
- A new `Why OPTN exists` story explains BCH capability, usability difficulty, the Wallet as the starting point, and the question of transaction-level control.
- The mission now uses `clear, defined paths` instead of `clear, approved paths` to avoid implying an external transaction gatekeeper.
- The page continues with principles, the self-custody boundary, and the founders after the mission has context. The boundary now consistently refers to `defined financial paths`.
- A small responsive two-column story layout was added for the new About narrative.

### Solutions — `app/solutions/page.jsx`

- The generic `Define -> Design -> Build and test -> Launch` lifecycle was removed because it duplicated Engineering.
- Solutions now focuses on use cases and a short `Ways to work with us` bridge to public tools, pricing, and contact.

### Pricing — `app/pricing/page.jsx`

- The duplicated `Configure / Validate / Maintain` support section was removed.
- The duplicated `Start / Set up / Ship` flow was removed.
- Pricing now answers the commercial question directly with Community, Builder, Custom engineering, fine print, common questions, and one CTA.

### FAQ — `app/faq/page.jsx`

- Overlapping identity questions were consolidated.
- Technical education questions about CashTokens, covenants, and CashScript were grouped into one implementation-oriented answer.
- New emphasis is on visitor uncertainty: custody, availability, independent use of open tools, infrastructure access, when to contact Engineering, and what to include in an inquiry.

### Deliberately unchanged

- `/platform` remains the conceptual center for authorization versus permitted transaction outcomes.
- `/cashtokens`, `/covenants-on-bitcoin-cash`, and `/bcmr-token-metadata` remain technical teaching pages with distinct subjects.
- The primary header navigation remains a utility navigation: Wallet, Build, Infrastructure, Engineering, About. The homepage storytelling sequence does not require duplicating that sequence in the header.
- No Search Console, sitemap, metadata, schema, or speculative keyword changes were made for this storytelling pass.

## Source-faithful English i18n copy set

These keys represent the current wording in the page source. They are intended as a localization-ready content inventory, not as an instruction to add all strings to a runtime translation system yet.

### Home

```text
home.hero.eyebrow = "OPTN Labs"
home.hero.title = "Bitcoin Cash wallets, tools, and infrastructure."
home.hero.body = "Bitcoin Cash can do more than simple payments. OPTN builds practical products and supporting layers that make advanced BCH capabilities usable—from a self-custody wallet to systems designed to set clear limits around software-operated funds."
home.hero.detail = "Use the wallet. Build with the stack. Explore what comes next."
home.hero.primary_cta = "Explore OPTN Wallet"
home.hero.secondary_cta = "Explore developer resources"
home.hero.contact_cta = "Talk to OPTN"

home.wallet_proof.eyebrow = "Proof in use"
home.wallet_proof.title = "The product that proves the stack."
home.wallet_proof.body = "We built OPTN Wallet to make BCH, CashTokens, app connections, and advanced transaction flows practical for real users."
home.wallet_proof.capability_1 = "BCH & CashTokens"
home.wallet_proof.capability_2 = "WalletConnect"
home.wallet_proof.capability_3 = "Connect to apps"
home.wallet_proof.capability_4 = "Advanced BCH workflows"
home.wallet_proof.wallet_cta = "Explore OPTN Wallet"
home.wallet_proof.github_cta = "View on GitHub"
home.wallet_proof.update_cta = "Read the latest update"

home.stack.eyebrow = "From proof to control"
home.stack.title = "Build the stack. Control the outcome."
home.stack.body = "Once a real wallet works, the next layers become clear: give other builders the tools and infrastructure they need, then explore transaction rules that control what software-operated funds can do."
home.stack.build.stage = "Build"
home.stack.build.title = "The BCH stack"
home.stack.build.status = "Available now"
home.stack.build.body = "Developer resources and infrastructure built around the problems a working wallet has to solve."
home.stack.build.primary_cta = "Explore developer resources"
home.stack.build.secondary_cta = "View infrastructure"
home.stack.control.stage = "Control"
home.stack.control.title = "Programmable fund control"
home.stack.control.status = "In development"
home.stack.control.body = "Explore transaction rules that limit what software-operated funds can do."
home.stack.control.cta = "Explore Platform"
home.stack.transition = "As applications become more capable, the question shifts from who can request a transaction to what transactions should be possible at all."

home.fund_control.eyebrow = "In development"
home.fund_control.title = "Give software room to act—with clear limits."
home.fund_control.body = "When software needs to move money, OPTN is exploring ways to make the permitted path explicit in the transaction itself."
home.fund_control.detail = "The design can cover recipients, amounts, next steps, and recovery—so a signed request is not the only line of defense."
home.fund_control.flow.request = "A product requests an action"
home.fund_control.flow.rules = "BCH transaction rules"
home.fund_control.flow.outcome = "Only permitted outcomes proceed"
home.fund_control.flow.caption = "Illustrative architecture. Not a live deployment."
home.fund_control.cta = "Explore programmable fund control"

home.final_cta.title = "Ready to build on Bitcoin Cash?"
home.final_cta.body = "Use the open tools and shipped wallet, or bring OPTN a workflow you want to make real."
home.final_cta.wallet_cta = "Explore OPTN Wallet"
home.final_cta.contact_cta = "Talk to OPTN"
home.final_cta.developers_cta = "Developer resources"
```

### Wallet

```text
wallet.hero.status = "Shipped"
wallet.hero.eyebrow = "The product that proves the stack"
wallet.hero.title = "A self-custody BCH wallet that connects to what’s next."
wallet.hero.body = "We built OPTN Wallet to make more of BCH practical for real users: send BCH, manage CashTokens, connect to apps, and explore more capable transaction flows from one self-custody wallet."
wallet.hero.primary_cta = "Get OPTN Wallet"
wallet.hero.secondary_cta = "View on GitHub"

wallet.capabilities.eyebrow = "Built for how BCH is used today"
wallet.capabilities.title = "Use BCH with more confidence."
wallet.capabilities.cashtokens = "See fungible tokens and NFTs alongside BCH."
wallet.capabilities.advanced_transactions = "Handle richer payments and advanced BCH workflows."
wallet.capabilities.connect_to_apps = "Connect to BCH apps and experiences when you need them."
wallet.capabilities.explore_contracts = "Support richer BCH transaction and contract workflows."

wallet.proof.eyebrow = "Where the story starts"
wallet.proof.title = "The working product behind the wider OPTN stack."
wallet.proof.body = "We did not start with abstract infrastructure. We built a wallet, learned what users and applications need, and use those lessons to shape the tools, services, and transaction controls around it."
wallet.proof.engineering_cta = "Engineering"
wallet.proof.developers_cta = "Developers"
wallet.proof.update_cta = "Latest Wallet update"
wallet.final_cta.title = "Try OPTN Wallet."
wallet.final_cta.body = "Download the shipped wallet or review the open implementation."
wallet.final_cta.cta = "Get OPTN Wallet"
```

### About

```text
about.hero.eyebrow = "About OPTN Labs"
about.hero.title = "Building practical tools for the future of Bitcoin Cash."
about.hero.body = "Founded in Canada in 2025, OPTN Labs builds products that make Bitcoin Cash easier to use, easier to build on, and easier to operate."
about.hero.mission_label = "Our mission:"
about.hero.mission = "build open financial infrastructure that helps people and software move value through clear, defined paths while preserving self-custody."
about.hero.wallet_cta = "Explore OPTN Wallet"
about.hero.contact_cta = "Talk to OPTN"

about.glance.eyebrow = "At a glance"
about.glance.use.title = "Use BCH with confidence"
about.glance.use.body = "Wallets and connected applications"
about.glance.build.title = "Build products faster"
about.glance.build.body = "Tools, infrastructure, and engineering"
about.glance.control.title = "Create clearer controls"
about.glance.control.body = "Coordination and permitted outcomes"

about.story.eyebrow = "Why OPTN exists"
about.story.title = "Make advanced Bitcoin Cash capabilities usable."
about.story.paragraph_1 = "Bitcoin Cash has native tokens, programmable transaction patterns, and a UTXO model capable of more than simple payments. But users and teams should not have to manage all that machinery themselves to build or use a product."
about.story.paragraph_2 = "We started with a real wallet. Building it exposed the tooling and infrastructure BCH applications need—and led us to explore a deeper question: as software moves money, how can the transaction itself help define what is allowed?"

about.principles.eyebrow = "How we work"
about.principles.title = "Open where it helps. Clear where it matters."
about.principles.open_foundation = "We build on Bitcoin Cash and share the tools that help the ecosystem move forward."
about.principles.self_custody = "OPTN helps coordinate financial actions without taking custody of customer funds."
about.principles.engineering = "We turn hard transaction and integration problems into useful products."
about.boundary.eyebrow = "Current boundary"
about.boundary.title = "OPTN does not hold customer funds."
about.boundary.body = "We can help map requests to defined financial paths. For funds deliberately placed under covenant control, BCH transaction rules can enforce the permitted outcome."
about.team.eyebrow = "The team"
about.team.title = "Built by people who build on BCH."
about.team.note = "The team’s work across wallets, covenant applications, and working BCH workflows shaped the problem OPTN is building around: authorization alone does not guarantee an acceptable outcome."
about.final_cta.title = "Have a product idea?"
about.final_cta.body = "Tell us what you are building and we will help identify the right next step."
about.final_cta.cta = "Talk to OPTN"
```

### Developers

```text
developers.hero.eyebrow = "Developers"
developers.hero.title = "Build your BCH product on a stronger foundation."
developers.hero.body = "OPTN Wallet exposed the hard parts of building a useful BCH product. These public resources help you work through the same primitives—CashTokens, covenants, metadata, wallet connections, and infrastructure—on your own."
developers.hero.primary_cta = "Talk to engineering"
developers.hero.secondary_cta = "View GitHub"
developers.resources.eyebrow = "The supporting layer"
developers.resources.title = "Build on the foundation behind OPTN Wallet."
developers.resources.cashtokens = "Make tokens useful in wallets and apps."
developers.resources.covenants = "Design transaction paths with clear guardrails."
developers.resources.bcmr = "Give tokens names and context users can understand."
developers.resources.wallet = "Use a shipped wallet as a practical product reference."
developers.support.eyebrow = "Need help getting to launch?"
developers.support.title = "From first integration to production readiness."
developers.support.body = "OPTN can help turn a technical question into a working plan, a tested integration, and a clearer path to release."
developers.support.architecture = "Shape the right wallet, app, and transaction design."
developers.support.testing = "Catch integration issues before they reach users."
developers.support.hosted_services = "Use BCH infrastructure without running every backend component yourself."
developers.final_cta.title = "Building something on BCH?"
developers.final_cta.body = "Tell us what you’re making and where the path gets difficult."
developers.final_cta.cta = "Talk to OPTN"
```

### Infrastructure

```text
infrastructure.hero.eyebrow = "Infrastructure"
infrastructure.hero.title = "The BCH services your product needs to keep moving."
infrastructure.hero.body = "OPTN Wallet needed reliable chain data, token indexing, metadata, and connectivity to feel usable. We make those supporting Bitcoin Cash services available to teams building their own products."
infrastructure.hero.primary_cta = "Request access"
infrastructure.hero.secondary_cta = "View token data"
infrastructure.services.eyebrow = "The supporting layer"
infrastructure.services.title = "The foundation behind usable BCH apps."
infrastructure.services.connectivity = "Wallet connectivity and transaction access through Electrum endpoints."
infrastructure.services.chain_data = "Query BCH chain data for product features and operational workflows."
infrastructure.services.token_data = "Give users balances, holders, portfolios, and metadata through BCMR and TokenIndexer."
infrastructure.services.content = "Deliver token media and application files through IPFS gateway and API access."
infrastructure.tokenindexer.eyebrow = "TokenIndexer"
infrastructure.tokenindexer.title = "Make CashTokens easier to show and use."
infrastructure.tokenindexer.body = "TokenIndexer turns on-chain token activity into app-ready balances, holder data, metadata, and portfolio views."
infrastructure.tokenindexer.access_cta = "Ask about token data access"
infrastructure.tokenindexer.bcmr_cta = "Explore BCMR"
infrastructure.final_cta.title = "Need the BCH backend without all the overhead?"
infrastructure.final_cta.body = "Tell us what your product needs and we’ll point you to the right services."
infrastructure.final_cta.cta = "Request access"
```

### Engineering

```text
engineering.hero.eyebrow = "Engineering"
engineering.hero.title = "Turn a BCH product idea into something people can use."
engineering.hero.body = "We built OPTN Wallet and the supporting BCH stack ourselves. Now we help teams apply those lessons to wallets, CashToken apps, and controlled transaction workflows of their own."
engineering.hero.primary_cta = "Talk to engineering"
engineering.hero.secondary_cta = "Explore developer resources"
engineering.areas.eyebrow = "Apply the stack"
engineering.areas.title = "The same expertise, applied to your product."
engineering.areas.wallet = "Connect your product to BCH apps, wallets, and transaction flows."
engineering.areas.tokens = "Make token balances, metadata, and user experiences work together."
engineering.areas.covenants = "Design transaction rules for workflows with real constraints."
engineering.areas.backend = "Build the services, test harnesses, and release checks that keep things moving."
engineering.process.eyebrow = "From product idea to launch"
engineering.proof.eyebrow = "Proof behind the work"
engineering.boundary.eyebrow = "What we currently support"
engineering.boundary.body = "Current fund-level enforcement work is scoped to BCH and CashToken funds deliberately placed under BCH covenant control."
engineering.final_cta.title = "Let’s make the next step clearer."
engineering.final_cta.body = "Tell us what you’re building, what’s blocking progress, and when you want to ship."
```

### Solutions

```text
solutions.hero.eyebrow = "Solutions"
solutions.hero.title = "Make money-moving workflows easier to control."
solutions.hero.body = "OPTN helps teams design and test Bitcoin Cash workflows for AI payments, treasury operations, and applications—so the rules are clear before money moves."
solutions.hero.cta = "Discuss your workflow"
solutions.use_cases.eyebrow = "Use cases"
solutions.use_cases.title = "Start with the workflow that matters most."
solutions.use_cases.ai_payments = "Give automated services room to act while setting clear limits on where and how much they can spend."
solutions.use_cases.treasury = "Create repeatable payouts and delegated budgets with clear approval and recovery paths."
solutions.use_cases.applications = "Turn BCH, CashTokens, and covenant capabilities into products people can actually use."
solutions.work.eyebrow = "Ways to work with us"
solutions.work.title = "Start with public tools, or work with OPTN to ship."
solutions.work.body = "Explore on your own, or bring us in when the workflow needs deeper design, integration, testing, or support."
solutions.work.developers_cta = "Explore developer tools"
solutions.work.pricing_cta = "View pricing"
solutions.work.contact_cta = "Talk to OPTN"
solutions.final_cta.title = "Have a workflow worth building?"
solutions.final_cta.body = "Tell us what needs to move, who needs control, and where you want help."
```

### Pricing

```text
pricing.hero.eyebrow = "Pricing"
pricing.hero.title = "Start with open tools. Add support when it helps."
pricing.hero.body = "Explore OPTN's free wallet and developer tools. When you need a faster path, bring us in for setup, integration, testing, or ongoing support—without giving up control of your funds."
pricing.hero.primary_cta = "Explore free tools"
pricing.hero.secondary_cta = "Talk to OPTN"
pricing.plans.eyebrow = "Choose your path"
pricing.plans.title = "Choose the level of support that fits."
pricing.community.status = "Available now"
pricing.community.title = "Community"
pricing.community.price = "Free"
pricing.community.body = "Everything you need to explore and build with OPTN's open BCH tools."
pricing.builder.status = "Coming soon"
pricing.builder.title = "Builder"
pricing.builder.price = "Not yet priced"
pricing.builder.body = "A future convenience layer for teams that want a simpler setup and smoother path from idea to integration."
pricing.custom.status = "Available now"
pricing.custom.title = "Custom engineering"
pricing.custom.price = "Scoped to project"
pricing.custom.body = "Hands-on support for specialized BCH products and transaction workflows."
pricing.custom.band_title = "Need a production workflow or a partner to help you ship?"
pricing.custom.band_body = "Get focused help with architecture, covenant and transaction design, integration, adversarial testing, migration, and release."
pricing.custom.band_cta = "Talk to OPTN"
pricing.fine_print = "Builder is not yet generally available and has no public price. Additional integration, audit, compliance and specialized engineering work may require separate scope and pricing."
pricing.faq.eyebrow = "Common questions"
pricing.faq.title = "Clear boundaries matter."
pricing.final_cta.title = "Have a workflow in mind?"
pricing.final_cta.body = "Tell us what you need to build, simplify, or control."
```

### FAQ

```text
faq.hero.eyebrow = "Visitor guide"
faq.hero.title = "Frequently asked questions"
faq.hero.body = "A short answer page for teams deciding whether OPTN Labs is the right fit for their BCH product, wallet, or infrastructure work."
faq.hero.contact_cta = "Contact OPTN"
faq.hero.wallet_cta = "Explore OPTN Wallet"
faq.what_is_optn = "OPTN Labs is a Canadian company building Bitcoin Cash wallets, developer tools, infrastructure, and transaction systems. OPTN Wallet is the shipped user product; the wider company helps teams make BCH products easier to use, integrate, and operate."
faq.what_is_wallet = "OPTN Wallet is a self-custody BCH wallet and reference implementation. It supports everyday wallet use, CashTokens, connected applications, and advanced transaction work as the product continues to develop."
faq.custody = "No. OPTN's open and paid tooling paths are designed around self-custody and do not require OPTN to hold your keys or funds. Any custom arrangement should be scoped explicitly."
faq.availability = "OPTN Wallet, public developer resources, Bitcoin Cash infrastructure, and engineering support are available today. Some convenience layers, including Builder and the in-wallet add-on system, are still in development and are not generally available."
faq.infrastructure = "The public infrastructure surface includes Electrum, Chaingraph, BCMR, IPFS, and token data access. TokenIndexer provides token balances, holders, metadata, and app-facing data, with public status for what is currently exposed."
faq.open_tools = "Yes. Public tools, documentation, and code are available for teams that want to explore and build independently. OPTN's engineering services are available when you want help shaping, integrating, testing, or shipping a workflow."
faq.technical_help = "Yes. OPTN can help with CashToken-aware wallet and application flows, covenant patterns, transaction planning, and CashScript implementation. You do not need to know CashScript before starting a conversation."
faq.engineering = "Reach out when you need production workflow design, covenant or transaction work, wallet or CashToken integration, infrastructure guidance, testing, security review, or release support."
faq.contact = "Send what you are building, the part of the stack you need help with, your timeline, and any repo or architecture notes that will help us understand the scope."
faq.final_cta.title = "Still unsure?"
faq.final_cta.body = "Send a short note and we will point you to the right route or the right part of the stack."
faq.final_cta.build_cta = "Build with OPTN"
faq.final_cta.blog_cta = "Read builder notes"
```

## Content boundaries for future edits

- Keep `Shipped`, `Available now`, `Coming soon`, and `In development` distinctions explicit.
- The in-wallet add-on system and Addon SDK are still work in progress; do not present them as a finished public platform.
- Fund-level enforcement claims are scoped to Bitcoin Cash and CashToken funds deliberately placed under BCH covenant control.
- OPTN does not hold customer funds or private keys through the open and paid tooling paths.
- Platform should carry the deepest explanation of authorization versus permitted transaction outcomes. Solutions should show applications of that idea. Engineering should explain how to build or validate those workflows.
- Developers should organize resources and send builders to the technical pillar pages, not reproduce those pages.
- Infrastructure should describe service operation and access, not become a second technical tutorial.
- About should explain why OPTN exists and who is behind it, not repeat the product catalogue.
- The blog should accumulate evidence over time: product proof, engineering lessons, infrastructure, transaction control, and later applications such as agent payments.
