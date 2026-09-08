# OPTN Labs — current English copy snapshot

This is a localization-style snapshot of the current user-facing English copy
in the OPTN Labs website. It is a context reference for future copywriting and
translation work, not a runtime i18n file.

Source: current working tree of `/home/lightswarm/projects/optn-wallet-website`.

Use the source files as authoritative if this snapshot and the implementation
ever differ. Preserve route names, links, product-status labels, technical
meaning, and legal meaning unless a new copy decision explicitly changes them.

## shared.navigation

```text
nav.platform = "Platform"
nav.solutions = "Solutions"
nav.wallet = "Wallet"
nav.engineering = "Engineering"
nav.cta = "Talk to OPTN"
nav.theme.use_light = "Use light theme"
nav.theme.use_dark = "Use dark theme"
nav.menu.open = "Open menu"
nav.menu.close = "Close menu"
```

## shared.footer

```text
footer.description = "Bitcoin Cash wallets, tools, infrastructure, and engineering."
footer.group.explore = "Explore"
footer.group.build = "Build"
footer.group.learn = "Learn"
footer.group.contact = "Contact"
footer.contact.cta = "Talk to OPTN →"
footer.contact.email = "info@optnlabs.com"
footer.legal.privacy = "Privacy"
footer.legal.copyright = "© {year} OPTN Labs Inc."
footer.social.aria = "Social links"
```

## shared.site_metadata

```text
site.meta.title.default = "OPTN Labs | Programmable fund control for Bitcoin Cash"
site.meta.title.template = "%s | OPTN Labs"
site.meta.description = "OPTN Labs builds open Bitcoin Cash tools for wallets, CashTokens, covenant-controlled transactions, and software-operated payment workflows."
site.meta.open_graph.title = "OPTN Labs | Bitcoin Cash fund control and engineering"
site.meta.open_graph.description = "Open Bitcoin Cash tools, wallet products, and engineering support for controlled transaction workflows."
site.meta.website.description = "Open Bitcoin Cash tools, wallet products, and engineering support for controlled transaction workflows."
```

Footer links:

```text
footer.explore.wallet = "Wallet"
footer.explore.platform = "Platform"
footer.explore.solutions = "Solutions"
footer.explore.pricing = "Pricing"
footer.build.developers = "Developers"
footer.build.engineering = "Engineering"
footer.build.infrastructure = "Infrastructure"
footer.learn.about = "About"
footer.learn.blog = "Blog"
footer.learn.cashtokens = "CashTokens"
footer.learn.covenants = "Covenants"
footer.learn.bcmr = "BCMR"
footer.learn.faq = "FAQ"
```

## shared.graphics_and_ctas

These strings are rendered by shared components used by one or more pages.

```text
architecture.application = "Application / AI agent"
architecture.application_detail = "Request actions"
architecture.coordination = "OPTN coordination"
architecture.coordination_detail = "Validate and construct transactions"
architecture.covenant_rules = "BCH covenant rules"
architecture.covenant_rules_detail = "Enforce permitted outcomes"
architecture.caption = "Illustrative architecture. Not a live deployment."

policy.title = "Illustrative policy"
policy.status = "Not a live deployment"
policy.recipient = "Approved recipient"
policy.recipient_value = "api.provider.com"
policy.payment_limit = "Payment limit"
policy.payment_limit_value = "0.25 BCH per payment"
policy.recovery = "Owner recovery"
policy.recovery_value = "Return to owner"
policy.result = "Allowed under this policy"
policy.result_detail = "Transaction meets all rules"

engineering.product = "Product or wallet"
engineering.product_detail = "Your application or product"
engineering.transaction_layer = "BCH transaction layer"
engineering.transaction_layer_detail = "CashTokens · covenants · construction"
engineering.integration = "Tested integration"
engineering.integration_detail = "Wallets, services, and real-world workflows"
engineering.caption = "Illustrative engineering workflow"

cta.default.title = "Have a workflow to deploy?"
cta.default.body = "Tell us what you are building. We will help scope the right path."
cta.default.label = "Talk to OPTN"
```

## page.home

### Metadata

```text
meta.title = "Bitcoin Cash Wallets, Tools & Infrastructure"
meta.description = "OPTN Labs builds Bitcoin Cash products for users and developers, including OPTN Wallet, public developer tooling, BCH infrastructure, and programmable transaction systems."
meta.open_graph.title = "OPTN Labs | Bitcoin Cash Wallets, Tools & Infrastructure"
meta.open_graph.description = "OPTN Labs builds Bitcoin Cash products for users and developers, including OPTN Wallet, public developer tooling, BCH infrastructure, and programmable transaction systems."
meta.twitter.title = "OPTN Labs | Bitcoin Cash Wallets, Tools & Infrastructure"
meta.twitter.description = "Bitcoin Cash products for users and developers: OPTN Wallet, public developer tooling, BCH infrastructure, and programmable transaction systems."
```

### Hero

```text
hero.label = "OPTN Labs"
hero.h1 = "Bitcoin Cash wallets, tools, and infrastructure."
hero.body = "OPTN Labs builds products for using BCH, developing applications, and defining how software-operated funds can move."
hero.detail = "From a self-custody wallet and developer tooling to infrastructure and programmable transaction systems."
hero.cta.wallet = "Explore OPTN Wallet"
hero.cta.platform = "Explore the Platform"
hero.cta.contact = "Talk to OPTN"
hero.visual = "Self-custody · BCH · CashTokens"
```

### Ecosystem

```text
ecosystem.label = "What OPTN builds"
ecosystem.h2 = "One ecosystem. Several ways to build with it."

ecosystem.wallet.title = "OPTN Wallet"
ecosystem.wallet.status = "Available now"
ecosystem.wallet.body = "Use BCH, CashTokens, and connected Bitcoin Cash applications from a self-custody wallet."
ecosystem.wallet.cta = "Explore Wallet"

ecosystem.developers.title = "Developer Tools"
ecosystem.developers.status = "Available now"
ecosystem.developers.body = "Public developer tooling, documentation, examples, and integration resources for building on Bitcoin Cash."
ecosystem.developers.cta = "Explore Developers"

ecosystem.infrastructure.title = "Infrastructure"
ecosystem.infrastructure.status = "Available now"
ecosystem.infrastructure.body = "Public BCH network, indexing, and metadata infrastructure for applications and developers."
ecosystem.infrastructure.cta = "Explore Infrastructure"

ecosystem.fund_control.title = "Fund Control"
ecosystem.fund_control.status = "In development"
ecosystem.fund_control.body = "Covenant-based transaction systems for defining how software-operated funds are permitted to move."
ecosystem.fund_control.cta = "Explore Platform"
```

### Wallet section

```text
wallet_section.label = "Available now"
wallet_section.h2 = "Start with OPTN Wallet."
wallet_section.body = "A self-custody Bitcoin Cash wallet for BCH, CashTokens, application connections, and advanced transaction workflows."
wallet_section.capability.bch_tokens = "BCH & CashTokens"
wallet_section.capability.walletconnect = "WalletConnect"
wallet_section.capability.integrations = "Application integrations"
wallet_section.capability.transactions = "Advanced transaction tools"
wallet_section.art_caption = "Canonical OPTN product artwork."
wallet_section.cta.wallet = "Explore OPTN Wallet"
wallet_section.cta.github = "View on GitHub"
```

### Fund-control section

```text
fund_control.label = "In development"
fund_control.h2 = "Control how funds move—not only who can sign."
fund_control.body = "BCH covenant rules can restrict what transactions are valid for funds deliberately placed under covenant control."
fund_control.detail = "Rules can constrain recipients, amounts, permitted next states, and recovery paths—even when a transaction has otherwise been authorized."
fund_control.cta = "Explore programmable fund control"
fund_control.flow.request = "Software requests an action"
fund_control.flow.rules = "BCH covenant rules"
fund_control.flow.outcome = "Permitted transaction outcome"
fund_control.flow.caption = "Illustrative architecture. Not a live deployment."
```

### Founders and final CTA

```text
founders.label = "OPTN Labs"
founders.h2 = "Built by people who build on BCH."
founders.cta = "Meet the team"
founders.jerry.name = "Jerry Qian"
founders.jerry.role = "Founder"
founders.kyle.name = "Kyle Wildeman"
founders.kyle.role = "Co-founder"

final_cta.h2 = "Use the tools. Build something new."
final_cta.body = "Start with OPTN Wallet and the public developer ecosystem, or talk to us about a more specialized workflow."
final_cta.wallet = "Explore OPTN Wallet"
final_cta.contact = "Talk to OPTN"
final_cta.developers = "Developer resources"
```

## page.about

### Metadata

```text
meta.title = "About OPTN Labs"
meta.description = "OPTN Labs is a Canadian company founded in 2025, building Bitcoin Cash wallets, developer tools, infrastructure, and controlled transaction systems."
meta.open_graph.title = "About OPTN Labs | Bitcoin Cash builders"
meta.open_graph.description = "Founded in Canada in 2025, OPTN Labs builds Bitcoin Cash wallets, developer tooling, infrastructure, and programmable transaction systems."
```

### Page copy

```text
hero.label = "About OPTN Labs"
hero.h1 = "Building the systems that help value move with control."
hero.body = "Founded in Canada in 2025, OPTN Labs builds Bitcoin Cash wallets, developer tooling, infrastructure, and programmable transaction systems for people, software, and AI agents."
hero.mission_label = "Our mission:"
hero.mission = "build open financial infrastructure that helps people, software, and AI agents move value through approved paths while preserving self-custody."
hero.cta.wallet = "Explore OPTN Wallet"
hero.cta.contact = "Talk to OPTN"

build.label = "What we build"
build.use_bch = "Use Bitcoin Cash"
build.use_bch_detail = "Wallets and connected applications"
build.build_bch = "Build on Bitcoin Cash"
build.build_bch_detail = "Tools, infrastructure, and engineering"
build.control_workflows = "Control financial workflows"
build.control_workflows_detail = "Coordination and permitted outcomes"

layers.label = "One ecosystem, several layers"
layers.h2 = "Products and infrastructure for the BCH application layer."
layer.wallet.title = "OPTN Wallet"
layer.wallet.status = "Shipped"
layer.wallet.body = "A self-custody Bitcoin Cash and CashTokens wallet built to interact with applications and advanced transaction flows."
layer.wallet.cta = "Explore Wallet"
layer.tools.title = "Open developer tools"
layer.tools.status = "Available now"
layer.tools.body = "Public tooling, documentation, examples, and technical resources for building Bitcoin Cash applications."
layer.tools.cta = "Explore Developers"
layer.infrastructure.title = "BCH infrastructure"
layer.infrastructure.status = "Available now"
layer.infrastructure.body = "Network, indexing, and metadata services that help applications and developers work with Bitcoin Cash."
layer.infrastructure.cta = "Explore Infrastructure"
layer.fund_control.title = "Programmable fund control"
layer.fund_control.status = "In development"
layer.fund_control.body = "Coordination and covenant systems for defining permitted recipients, amounts, transaction paths, and recovery."
layer.fund_control.cta = "Explore the Platform"

principles.label = "How we work"
principles.h2 = "Open where it helps. Explicit where it matters."
principles.open.title = "Open foundation"
principles.open.body = "We build on Bitcoin Cash, CashTokens, and public developer infrastructure."
principles.self_custody.title = "Self-custody boundary"
principles.self_custody.body = "OPTN coordinates financial actions without taking custody of customer funds."
principles.engineering.title = "Practical engineering"
principles.engineering.body = "We work from transaction behavior and tested integrations toward useful products."
principles.boundary.label = "Current boundary"
principles.boundary.h3 = "OPTN does not hold customer funds."
principles.boundary.body = "Coordination can map requests to approved financial paths, while BCH covenant rules can enforce permitted outcomes against funds deliberately placed under covenant control."

team.label = "The team"
team.h2 = "Built by people who build on BCH."
team.jerry.name = "Jerry Qian"
team.jerry.role = "Founder"
team.jerry.body = "Jerry leads wallet and transaction infrastructure, covenant research and development, product direction, and founder-led commercialization at OPTN Labs. He has more than 10 years of experience organizing local web3 communities."
team.kyle.name = "Kyle Wildeman"
team.kyle.role = "Co-founder"
team.kyle.body = "Kyle created FundMe.cash and works on production covenant applications, contract auditing, and real-fund workflows. His experience building covenant-based products informs OPTN Labs’ focus on practical, controlled transaction systems."
team.note = "The team’s work across wallets, covenant applications, and live BCH workflows shaped the problem OPTN is building around: authorization alone does not guarantee an acceptable outcome."

explore.label = "Explore OPTN Labs"
explore.h2 = "Choose where you want to start."
explore.wallet = "Use the shipped wallet"
explore.tools = "Build with the open tools"
explore.engineering = "Discuss a technical project"
explore.platform = "Understand fund control"

final_cta.h2 = "Have something to build?"
final_cta.body = "Tell us what you are working on and we will help identify the right starting point."
final_cta.label = "Talk to OPTN"
```

## page.solutions

### Metadata

```text
meta.title = "Controlled BCH payments for software, AI and treasury"
meta.description = "Use Bitcoin Cash transaction rules to build controlled payment workflows for software, AI agents, treasury operations, and BCH applications."
```

### Page copy

```text
hero.label = "Solutions"
hero.h1 = "Deploy controlled financial workflows."
hero.body = "Use OPTN to put enforceable rules around money moved by people and software—from AI payments to treasury operations—using Bitcoin Cash transaction rules."
hero.cta = "Talk to OPTN"

use_cases.label = "Use cases"
use_cases.h2 = "Start where you have real risk."
use_cases.ai.title = "AI payments"
use_cases.ai.body = "Allow agents or automated services to request payments while restricting recipients, amounts, and remaining authority."
use_cases.ai.cta = "Explore AI payments"
use_cases.treasury.title = "Treasury & business workflows"
use_cases.treasury.body = "Coordinate payouts, delegated budgets, and recovery paths with enforceable rules."
use_cases.treasury.cta = "Explore treasury workflows"
use_cases.bch.title = "BCH applications"
use_cases.bch.body = "Build CashToken and covenant-based products that require constrained transaction behavior."
use_cases.bch.cta = "Explore BCH applications"

deployment.label = "Deployment path"
deployment.h2 = "From a real use case to deployment."
deployment.define.title = "Define"
deployment.define.body = "Identify the workflow and required rules."
deployment.design.title = "Design"
deployment.design.body = "Create the policy and transaction logic."
deployment.integrate.title = "Integrate & test"
deployment.integrate.body = "Build, test, and validate with your team."
deployment.deploy.title = "Deploy"
deployment.deploy.body = "Deploy the workflow and transition to ongoing support if needed."

options.label = "Deployment options"
options.title = "Start with open tools, or bring us a workflow."
options.body = "Use the self-managed path for exploration. Contact OPTN for scoped engineering, integration, testing and deployment support."
options.developers = "Explore developer tools"
options.pricing = "View pricing"
options.contact = "Talk to OPTN"

final_cta.h2 = "Have a use case in mind?"
final_cta.body = "Let’s talk about how to deploy it."
```

## page.platform

### Metadata

```text
meta.title = "Programmable fund control"
meta.description = "Learn how OPTN uses Bitcoin Cash transaction rules to define permitted recipients, amounts, next states, and recovery paths for software-operated funds."
```

### Page copy

```text
hero.label = "Platform"
hero.h1 = "A control layer for software-operated funds."
hero.body = "OPTN helps companies enforce spending rules around software-operated funds using Bitcoin Cash transaction rules. Applications can request actions. Transaction rules determine what the funds can actually do."
hero.cta = "Talk to OPTN"

controls.label = "What OPTN controls"
controls.h2 = "Define what funds can do."
controls.recipients.title = "Recipients"
controls.recipients.body = "Where funds may go."
controls.amounts.title = "Amounts"
controls.amounts.body = "Per-payment and cumulative limits."
controls.next_states.title = "Next states"
controls.next_states.body = "What happens after a payment."
controls.recovery.title = "Recovery"
controls.recovery.body = "How control returns to the owner."

comparison.label = "Authorization vs. permitted outcomes"
comparison.h2 = "A different layer of control."
comparison.body = "A wallet, signer, or MPC decides whether a transaction is authorized. OPTN helps define whether the resulting transaction is permitted, even if the signer is compromised or an application behaves unexpectedly."
comparison.cta = "Learn more about the difference"
comparison.traditional = "Traditional flow"
comparison.traditional.request = "Request"
comparison.traditional.authorization = "Authorization (wallet / signer / MPC)"
comparison.traditional.execution = "Transaction executes"
comparison.optn = "With OPTN"
comparison.optn.coordination = "OPTN coordination"
comparison.optn.outcome = "BCH covenant rules determine outcome"

enforcement.label = "Current enforcement boundary"
enforcement.h2 = "BCH and CashToken funds under covenant control."
enforcement.body = "Fund-level enforcement currently applies to Bitcoin Cash and CashToken funds placed under BCH covenant control. External-chain assets are outside the current enforcement boundary unless represented through a separately trusted bridge, custodian, or issuer layer."
enforcement.bch = "Bitcoin Cash"
enforcement.bch_status = "Supported"
enforcement.tokens = "CashTokens"
enforcement.tokens_status = "Supported"

final_cta.h2 = "Have a technical question or use case?"
final_cta.body = "Let’s talk about how OPTN can help."
```

## page.wallet

### Metadata

```text
meta.title = "OPTN Wallet"
meta.description = "OPTN Wallet is a shipped Bitcoin Cash and CashTokens wallet built to interact with applications and advanced transaction flows from a self-custody wallet."
```

### Page copy

```text
hero.status = "Shipped"
hero.label = "OPTN Wallet"
hero.h1 = "The BCH wallet built to interact."
hero.body = "Send, receive, manage CashTokens, connect to applications, and work with advanced transaction flows from a self-custody wallet."
hero.cta.get = "Get OPTN Wallet"
hero.cta.github = "View on GitHub"

capabilities.label = "Built for the BCH application layer"
capabilities.h2 = "More than storage and sending."
capabilities.cashtokens.title = "CashTokens"
capabilities.cashtokens.body = "View and manage fungible tokens and NFTs alongside BCH."
capabilities.transactions.title = "Transaction construction"
capabilities.transactions.body = "Support richer BCH transactions and advanced wallet workflows."
capabilities.connections.title = "Wallet connections"
capabilities.connections.body = "Connect the wallet to BCH applications and external experiences."
capabilities.contracts.title = "Contract interaction"
capabilities.contracts.body = "Use BCH covenant and CashScript tooling through a wallet product surface."

platform.label = "Part of OPTN Labs"
platform.h2 = "Shipped proof for a broader control platform."
platform.body = "OPTN Wallet is the product surface where OPTN builds and validates BCH transaction construction, CashTokens, application connections, and covenant-oriented workflows."
platform.engineering = "Engineering"
platform.developers = "Developers"

final_cta.h2 = "Explore the shipped product."
final_cta.body = "Use OPTN Wallet or review the implementation."
final_cta.label = "Get OPTN Wallet"
```

## page.infrastructure

### Metadata

```text
meta.title = "Hosted BCH infrastructure"
meta.description = "Hosted Bitcoin Cash infrastructure from OPTN Labs for wallet and application teams that need Electrum, Chaingraph, BCMR, IPFS, and TokenIndexer access."
```

### Page copy

```text
hero.label = "Infrastructure"
hero.h1 = "Hosted BCH infrastructure for teams building real apps."
hero.body = "Use the network, metadata, and token services your product needs without standing up every backend component on day one."
hero.cta.access = "Request access"
hero.cta.token_data = "View token data"
hero.flow.app = "App / wallet"
hero.flow.app_detail = "Product requests and token views"
hero.flow.optn = "OPTN hosted layer"
hero.flow.optn_detail = "Service access and integration support"
hero.flow.services = "Hosted BCH services"
hero.flow.services_detail = "Electrum · Chaingraph · BCMR · TokenIndexer"

services.label = "Hosted services"
services.h2 = "Access the pieces your product needs."
services.connectivity.title = "Connectivity"
services.connectivity.body = "Electrum endpoints and transaction access for wallets and applications."
services.chain_data.title = "Chain data"
services.chain_data.body = "Chaingraph access for blockchain queries and application data."
services.token_data.title = "Token data"
services.token_data.body = "BCMR metadata and TokenIndexer data for balances, holders, and portfolios."
services.content.title = "Content"
services.content.body = "IPFS gateway and API access for applications that need file and media delivery."

tokenindex.label = "TokenIndexer"
tokenindex.h2 = "CashTokens indexing and API."
tokenindex.body = "TokenIndexer associates CashTokens with addresses so apps can show balances, holder data, metadata, and portfolios."
tokenindex.cta.access = "Ask about token data access"
tokenindex.cta.bcmr = "Explore BCMR"
tokenindex.token_data.title = "Token data"
tokenindex.token_data.body = "Address portfolios, holder data, summaries, and metadata."
tokenindex.api.title = "API-first"
tokenindex.api.body = "A service surface for apps, mobile clients, and backend systems."
tokenindex.open_source.title = "Open source"
tokenindex.open_source.body = "Run it yourself or use hosted access where it helps."

status.label = "Public service status"
status.body = "Status for public infrastructure endpoints currently exposed by OPTN Labs."
status.online = "Online"
status.unavailable = "Unavailable"
status.public_endpoint = "Public endpoint"
status.electrum.name = "Electrum Chipnet WSS"
status.electrum.note = "Public secure Electrum endpoint for chipnet wallet connectivity."
status.chaingraph.name = "Chaingraph"
status.chaingraph.note = "Public GraphQL health endpoint for chipnet chain data access."
status.bcmr.name = "BCMR"
status.bcmr.note = "Public BCMR metadata indexer status endpoint."
status.tokenindexer.name = "TokenIndexer"
status.tokenindexer.note = "Unified token API health endpoint for chipnet and mainnet datasets."
status.updated = "Registry updated {date}. Status refreshes every {minutes} minutes."

final_cta.h2 = "Need BCH backend access?"
final_cta.body = "Tell us what you are building and what services you need."
final_cta.label = "Request access"
```

## page.engineering

### Metadata

```text
meta.title = "Bitcoin Cash engineering"
meta.description = "OPTN Labs helps teams build Bitcoin Cash wallets, CashToken applications, and controlled transaction workflows with architecture, implementation, testing, and release support."
```

### Page copy

```text
hero.label = "Engineering"
hero.h1 = "Engineering for products that move value."
hero.body = "OPTN Labs helps teams build Bitcoin Cash wallets, CashToken applications, and controlled transaction workflows—with architecture, implementation, testing, and release support."
hero.cta.engineering = "Talk to engineering"
hero.cta.developers = "Explore developer resources"

areas.label = "Work across the transaction stack"
areas.wallet.title = "Wallet and application integration"
areas.wallet.body = "Connect products to BCH applications and transaction workflows."
areas.tokens.title = "CashTokens and BCMR"
areas.tokens.body = "Design token handling and metadata-aware product experiences."
areas.covenants.title = "CashScript and covenant patterns"
areas.covenants.body = "Build constrained transaction paths within a defined technical scope."
areas.backend.title = "Backend and testing"
areas.backend.body = "Support transaction construction, indexing, test harnesses, and release review."

process.label = "From technical question to tested implementation"
process.scope.title = "Scope"
process.scope.body = "Define the product, constraints, and target workflow."
process.build.title = "Build or review"
process.build.body = "Work through architecture, implementation, or transaction design."
process.validate.title = "Validate"
process.validate.body = "Test behavior, review integration points, and prepare for release."

products.label = "Grounded in working BCH products"
products.wallet = "OPTN Wallet"
products.wallet.status = "Shipped"
products.wallet.body = "BCH and CashTokens wallet"
products.wallet.cta = "Explore Wallet"
products.fundme = "FundMe.cash"
products.fundme.status = "Shipped"
products.fundme.body = "Covenant-based crowdfunding"
products.coordination = "Covenant coordination"
products.coordination.status = "Built and tested locally · In development"
products.coordination.body = "Research for controlled payment workflows"

resources.label = "Technical resources"
resources.developers = "Developers"
resources.tokens = "CashTokens"
resources.covenants = "Covenants"
resources.bcmr = "BCMR"
resources.blog = "Blog"
resources.github = "GitHub"
boundary.label = "Current technical boundary"
boundary.body = "Fund-level enforcement currently applies to BCH and CashToken funds placed under BCH covenant control."
boundary.cta = "Read the Platform boundary"

final_cta.h2 = "Have a technical question or use case?"
final_cta.body = "Let’s talk about how OPTN can help."
```

## page.developers

### Metadata

```text
meta.title = "Developer resources"
meta.description = "Developer resources for building Bitcoin Cash applications with CashTokens, covenants, BCMR, wallet integrations, and OPTN infrastructure."
```

### Page copy

```text
hero.label = "Developers"
hero.h1 = "Build Bitcoin Cash products with working foundations."
hero.body = "Explore the technical surfaces behind OPTN Wallet, CashTokens, covenants, token metadata, and hosted BCH infrastructure."
hero.cta.engineering = "Talk to engineering"
hero.cta.github = "View GitHub"
hero.flow.question = "Product question"
hero.flow.question_detail = "Choose the BCH capability you need"
hero.flow.resource = "Technical resource"
hero.flow.resource_detail = "Read, test, and integrate"
hero.flow.product = "Working product"
hero.flow.product_detail = "Wallet and application proof"

resources.label = "Technical resources"
resources.h2 = "Start with the layer you need."
resources.cashtokens.title = "CashTokens"
resources.cashtokens.body = "Token primitives, wallet display, and application integration."
resources.covenants.title = "Covenants"
resources.covenants.body = "Constrained transaction paths and covenant-oriented workflows on BCH."
resources.bcmr.title = "BCMR"
resources.bcmr.body = "Token metadata and discovery for wallets and applications."
resources.wallet.title = "Wallet integration"
resources.wallet.body = "Use the shipped OPTN Wallet as a product and integration reference."
resources.cta = "Explore"

deeper.label = "Need a deeper technical path?"
deeper.h2 = "From architecture to tested implementation."
deeper.body = "OPTN can help scope the product, work through transaction design, and validate the integration points that matter before release."
deeper.architecture.title = "Architecture and implementation"
deeper.architecture.body = "Work through wallet, application, and transaction design."
deeper.testing.title = "Testing and review"
deeper.testing.body = "Validate behavior and integration points against the intended product."
deeper.hosted.title = "Hosted services"
deeper.hosted.body = "Use infrastructure where running the full stack is not the right first step."

final_cta.h2 = "Have a technical question?"
final_cta.body = "Tell us what you are building and where you need help."
final_cta.label = "Talk to OPTN"
```

## page.pricing

### Metadata

```text
meta.title = "Pricing | Open tools, Builder and Team"
meta.description = "Explore OPTN Labs pricing for open Bitcoin Cash tools, Builder and Team convenience features, and scoped engineering support."
```

### Page copy

```text
hero.label = "Pricing"
hero.h1 = "Start free. Pay for the easier path."
hero.body = "OPTN's core tooling is open and self-managed. Paid options make setup, configuration, integration and ongoing use easier without requiring OPTN to operate your financial authority."
hero.cta.tools = "Explore free tools"
hero.cta.contact = "Talk to OPTN"

plans.label = "Choose your path"
plans.h2 = "Open tools, paid convenience, or custom support."
plans.community.status = "Available now"
plans.community.title = "Community"
plans.community.price = "Free"
plans.community.body = "Build directly with the open wallet, covenant and transaction tooling."
plans.community.feature.wallet = "OPTN Wallet"
plans.community.feature.tools = "Open tools and templates"
plans.community.feature.testing = "Local testing and verification"
plans.community.feature.docs = "Public documentation"
plans.community.cta = "Explore the tools"
plans.builder.status = "Early access"
plans.builder.title = "Builder"
plans.builder.price = "Around $15 / month"
plans.builder.body = "Spend less time wiring the pieces together with paid convenience tooling."
plans.builder.feature.configuration = "Guided configuration"
plans.builder.feature.recipes = "Integration recipes"
plans.builder.feature.validation = "Local validation workflows"
plans.builder.feature.support = "Standard async support"
plans.builder.cta = "Ask about Builder"
plans.team.status = "Early access / planned"
plans.team.title = "Team"
plans.team.price = "Around $59 / month"
plans.team.body = "Tooling and support for a small team building with OPTN."
plans.team.feature.builder = "Everything in Builder"
plans.team.feature.templates = "Reusable team templates"
plans.team.feature.playbooks = "Integration playbooks"
plans.team.feature.support = "Priority async support"
plans.team.cta = "Ask about Team"

custom.label = "Custom"
custom.h3 = "Need a production workflow or deeper support?"
custom.body = "Scope engineering, covenant design, integration, adversarial testing, migration and deployment support with OPTN."
custom.cta = "Talk to OPTN"
plans.fine_print = "Builder and Team are early-access recommendations. Additional integration, audit, compliance and specialized engineering work may require separate scope and pricing."

value.label = "What paid plans mean"
value.h2 = "Pay for less wiring and better support."
value.configure.title = "Configure"
value.configure.body = "Guided policy and configuration helpers make the open tools easier to apply."
value.validate.title = "Validate"
value.validate.body = "Recipes and local workflows help teams test integration points before release."
value.maintain.title = "Maintain"
value.maintain.body = "Updates, migration guidance and bounded support reduce ongoing maintenance work."

path.label = "From open tools to supported implementation"
path.h2 = "Choose, configure, build."
path.choose.title = "Choose a path"
path.choose.body = "Start with open tools or identify where support will help."
path.configure.title = "Configure"
path.configure.body = "Define the workflow, policy and integration boundaries."
path.build.title = "Build or review"
path.build.body = "Use the tooling yourself or bring OPTN in for scoped work."

faq.label = "Common questions"
faq.h2 = "Clear boundaries matter."
faq.hosted.question = "Do paid plans include hosted financial control?"
faq.hosted.answer = "No. These plans are for convenience tooling and support around self-managed workflows. Hosted authorities, monitoring and managed coordination remain future product directions."
faq.custody.question = "Does OPTN hold customer keys or funds?"
faq.custody.answer = "The open and paid tooling paths do not require OPTN to hold your keys or funds. Custom arrangements should be scoped explicitly."
faq.custom.question = "When should I choose Custom?"
faq.custom.answer = "Choose Custom for production workflow design, covenant or transaction work, wallet and CashToken integration, testing, security review, or deployment support."
faq.prices.question = "Are Builder and Team prices final?"
faq.prices.answer = "They are recommended early-access prices. They should become public billing plans only when the recurring tooling and support commitments are available."

final_cta.h2 = "Have a workflow in mind?"
final_cta.body = "Tell us what you need to control."
```

## page.cashtokens

### Metadata

```text
meta.title = "CashTokens on BCH"
meta.description = "OPTN Labs helps teams build CashTokens products on Bitcoin Cash with wallet support, metadata handling, token discovery, and implementation guidance."
```

### Page copy

```text
hero.label = "BCH primitive"
hero.h1 = "CashTokens support for BCH products"
hero.body = "CashTokens become useful when wallets, metadata, and backend services present them as a product. OPTN Labs helps teams build the wallet UX, registry handling, and integration patterns needed to ship token-aware BCH apps."
hero.cta.contact = "Talk to OPTN"
hero.cta.metadata = "See token metadata"
hero.cta.wallet = "Explore OPTN Wallet"

needs.label = "What teams usually need"
needs.issuance = "Issuance flows and token-aware wallet UX"
needs.metadata = "Metadata publishing and discovery"
needs.views = "Balances, history, and holder views"
needs.backend = "Backend integration for wallets and apps"

cards.issuance.title = "Issuance"
cards.issuance.body = "Design the token lifecycle, issuance flow, and wallet behavior together so the product matches the protocol."
cards.wallet.title = "Wallet UX"
cards.wallet.body = "Show tokens in a way that helps users understand balances, actions, and what a transaction will do."
cards.discovery.title = "Discovery"
cards.discovery.body = "Publish metadata and token information in a format wallets and apps can consume reliably."
cards.integration.title = "Integration"
cards.integration.body = "Connect token data and wallet flows to the backend services that keep the product operational."

why.label = "Why this matters"
why.body = "CashTokens are valuable when they are represented clearly in a wallet and backed by metadata the rest of the ecosystem can read. Without that layer, token launches and token-aware products stay harder to understand than they need to be."
help.label = "How OPTN helps"
help.product.title = "Product definition"
help.product.body = "Decide what the token should do in the wallet before the implementation gets expensive."
help.implementation.title = "Implementation"
help.implementation.body = "Build token-aware wallet and app flows around the actual BCH transaction model."
help.operations.title = "Operational support"
help.operations.body = "Use hosted services and token data surfaces where it makes sense instead of running everything yourself."

final_cta.h2 = "Need CashTokens support?"
final_cta.body = "Send a short note about the token, the wallet surface, and the release stage. We will route you to the right part of the stack."
final_cta.build = "Build with OPTN"
final_cta.faq = "Read the FAQ"
```

## page.covenants

### Metadata

```text
meta.title = "Covenants on BCH"
meta.description = "OPTN Labs helps teams design covenant-based control on Bitcoin Cash for escrow, staged treasury spend, restricted transfers, and other controlled flows."
```

### Page copy

```text
hero.label = "BCH primitive"
hero.h1 = "Covenant-based control for BCH apps"
hero.body = "Covenants are useful when a product needs network-enforced transaction rules instead of relying only on off-chain promises. OPTN Labs helps teams design the control flow, wallet UX, and implementation patterns around that model."
hero.cta.contact = "Talk to OPTN"
hero.cta.engineering = "Engineering support"
hero.cta.wallet = "Review the wallet"

patterns.label = "Common BCH patterns"
patterns.escrow = "Escrow and conditional release"
patterns.treasury = "Staged treasury or grant spend"
patterns.restricted = "Restricted transfers and recipient controls"
patterns.multi_party = "Multi-party workflows with clear rules"

cards.escrow.title = "Escrow"
cards.escrow.body = "Build release conditions that are enforced by the transaction structure instead of a separate manual process."
cards.treasury.title = "Treasury"
cards.treasury.body = "Shape staged spending and governance patterns for teams that want tighter control over funds."
cards.restricted.title = "Restricted spend"
cards.restricted.body = "Constrain how value moves so the app can enforce a product rule, not just a UI rule."
cards.wallet.title = "Wallet UX"
cards.wallet.body = "Make the transaction consequences understandable before the user signs anything."

why.label = "Why this matters"
why.body = "Covenant-based control is most useful when the product has to preserve a specific state transition. That can mean an escrow pattern, a staged distribution, or a wallet flow where the user should only be able to take one path."
help.label = "How OPTN helps"
help.design.title = "Design"
help.design.body = "Translate the intended rule into a transaction model that is actually practical to ship."
help.implementation.title = "Implementation"
help.implementation.body = "Build wallet and backend flows around the rule, not around assumptions that are easy to break."
help.launch.title = "Launch support"
help.launch.body = "Review the flow before release so the edge cases are visible before users touch it."

final_cta.h2 = "Need help with covenant design?"
final_cta.body = "Send us the pattern you are trying to enforce and the product flow around it. We will respond with the right implementation path."
final_cta.build = "Build with OPTN"
final_cta.faq = "Read the FAQ"
```

## page.bcmr_token_metadata

### Metadata

```text
meta.title = "BCMR and token metadata"
meta.description = "OPTN Labs helps teams build token metadata and discovery flows for Bitcoin Cash, including BCMR-style registry data, wallet surfaces, and token-aware APIs."
```

### Page copy

```text
hero.label = "Metadata layer"
hero.h1 = "Token metadata and discovery for BCH apps"
hero.body = "BCMR-style metadata is what turns a token entry into something a wallet or app can explain to a user. OPTN Labs helps teams design the registry, display, and API layer around that information."
hero.cta.contact = "Talk to OPTN"
hero.cta.cashtokens = "Back to CashTokens"
hero.cta.services = "Hosted services"

what.label = "What this layer does"
what.names = "Lets wallets show names, descriptions, and media"
what.discovery = "Supports token discovery and portfolio views"
what.source = "Gives apps a consistent metadata source"
what.ambiguity = "Reduces ambiguity for token-aware UX"

cards.publish.title = "Publish"
cards.publish.body = "Prepare metadata in a format that wallets and apps can consume without custom handling for every token."
cards.discover.title = "Discover"
cards.discover.body = "Expose token discovery and portfolio data so users can make sense of what they hold."
cards.display.title = "Display"
cards.display.body = "Make the wallet surface easier to understand by pairing token entries with the right metadata."
cards.serve.title = "Serve"
cards.serve.body = "Use hosted infrastructure where it helps, rather than forcing every team to run the metadata plumbing themselves."

why.h2 = "Why this matters"
why.body = "Token metadata is part of the product, not just the data model. If wallets and apps cannot explain the token clearly, users have a harder time trusting the flow. OPTN Labs treats metadata as an implementation problem, not a side note."
help.h2 = "How OPTN helps"
help.design.title = "Metadata design"
help.design.body = "Define the metadata surface so it can be consumed by the wallet and other BCH clients."
help.integration.title = "Integration"
help.integration.body = "Wire the metadata into token discovery, balances, and wallet display logic."
help.hosting.title = "Hosting"
help.hosting.body = "Use hosted services to reduce the amount of infrastructure a new product has to run on day one."

final_cta.h2 = "Need help with token metadata?"
final_cta.body = "Tell us how the token should appear in the wallet and what the backend needs to expose. We can help shape the data and the implementation around it."
final_cta.build = "Build with OPTN"
final_cta.faq = "Read the FAQ"
```

## page.faq

### Metadata and header

```text
meta.title = "FAQ"
meta.description = "Frequently asked questions about OPTN Labs, OPTN Wallet, hosted BCH services, and BCH implementation support."
hero.label = "Visitor guide"
hero.h1 = "Frequently asked questions"
hero.body = "A short answer page for teams deciding whether OPTN Labs is the right fit for their BCH product, wallet, or infrastructure work."
hero.cta.contact = "Contact OPTN"
hero.cta.wallet = "Explore OPTN Wallet"
```

### Questions and answers

```text
faq.what_is_optn.question = "What is OPTN Labs?"
faq.what_is_optn.answer = "OPTN Labs is a Bitcoin Cash app infrastructure company. We build wallet software, token data surfaces, hosted backend services, covenant patterns, and implementation support for teams shipping BCH products."

faq.only_wallet.question = "Is OPTN only a wallet?"
faq.only_wallet.answer = "No. OPTN Wallet is the reference implementation, but the company also builds TokenIndexer, hosted BCH services, and integration support for product teams."

faq.what_is_wallet.question = "What is OPTN Wallet?"
faq.what_is_wallet.answer = "OPTN Wallet is our BCH wallet and reference implementation. It proves the wallet UX, token flows, app connections, add-ons, and advanced transaction behavior we want to make easier for other teams."

faq.what_build.question = "What does OPTN build?"
faq.what_build.answer = "OPTN builds wallet software, CashTokens support, token indexing, hosted BCH services, covenant-aware transaction flows, and integration support."

faq.tokenindexer.question = "What is TokenIndexer?"
faq.tokenindexer.answer = "TokenIndexer is OPTN's token data layer for balances, holders, metadata, and app-facing APIs."

faq.hosted_services.question = "What hosted BCH services are available?"
faq.hosted_services.answer = "The public service surface includes Electrum, Chaingraph, BCMR, IPFS, and token data access, with public status for what is currently exposed."

faq.cashtokens.question = "Can OPTN help with CashTokens?"
faq.cashtokens.answer = "Yes. CashTokens are a core part of the stack, from wallet support to metadata and token-aware app flows."

faq.covenants.question = "Can OPTN help with covenants?"
faq.covenants.answer = "Yes. We help with covenant patterns, transaction planning, and product flows that depend on constrained spend behavior."

faq.cashscript.question = "Do I need to know CashScript?"
faq.cashscript.answer = "No. If you already know CashScript, great. If not, OPTN can still help with the design and implementation path."

faq.outcome_control.question = "What does outcome control mean?"
faq.outcome_control.answer = "It means the app can shape what a valid transaction is allowed to do, not just who can authorize it."

faq.contact.question = "What should I send when I reach out?"
faq.contact.answer = "Send what you are building, the part of the stack you need help with, your timeline, and any repo or architecture notes that will help us understand the scope."
```

### Final CTA

```text
final_cta.h2 = "Still unsure?"
final_cta.body = "Send a short note and we will point you to the right route or the right part of the stack."
final_cta.contact = "Build with OPTN"
final_cta.blog = "Read builder notes"
```

## page.blog

### Blog index copy

```text
meta.title = "Builder Notes"
meta.description = "Builder notes, product updates, and technical field notes from OPTN Labs."
hero.label = "OPTN Labs Blog"
hero.h1 = "Builder notes, product updates, and technical field notes"
hero.body = "CashTokens, covenants, wallet architecture, and the infrastructure we’re shipping to make BCH easier to build on."
post.cta = "Read post →"
post.next_label = "Next up"
post.next_cta = "Continue reading →"
post.not_found = "Post not found"
```

Current published post metadata:

```text
blog.cashscript_cashtokens_covenants.title = "CashScript Covenant Patterns for CashTokens"
blog.cashscript_cashtokens_covenants.description = "A technical follow-up for developers working with CashTokens on BCH. This post focuses on covenant patterns, transaction introspection, token-aware output checks, and how to split responsibility between the contract and the transaction builder."

blog.cashtokens_kickoff.title = "CashTokens Kickoff: Tokens & Covenants on Bitcoin Cash – A Practical Alternative for Web3 Builders"
blog.cashtokens_kickoff.description = "Introduction to CashTokens and covenants on BCH. Explore the UTXO token model and transaction constraints as an option beyond EVM gas costs, state management issues, and Solana reliability concerns. With ongoing upgrades and growing community momentum, BCH is positioning itself as an emerging contender with significant upside."

blog.cashtokens_practical_entry.title = "CashTokens in Practice: Why Web3 Teams Should Build on BCH with Native Tokens"
blog.cashtokens_practical_entry.description = "A follow-up to our BCH introduction for developers and founders. This post explains how CashTokens work in practice, what wallets and contracts actually need to support, and why native token infrastructure matters for BCH ecosystem growth."

blog.cashtokens_wallet_nft_failures.title = "CashTokens in Production: Wallet Flows, NFT Control Objects, and Failure Cases"
blog.cashtokens_wallet_nft_failures.description = "A technical CashTokens follow-up for developers. This post covers token-aware wallet flows, NFT-based control objects, and the failure modes and tests teams should write before shipping CashScript-based token systems."
```

The full article bodies remain in `content/blog/*.mdx` and should be treated as
editorial/technical source material rather than automatically rewritten as
marketing copy.

## page.policy

The privacy page is legal/product-policy content and should not be rewritten
into a more promotional tone without explicit legal review.

```text
meta.title = "OPTN Crypto Wallet App Privacy Policy"
meta.effective_date = "July 15, 2025"
section.table_of_contents = "Table of Contents"
section.introduction = "Introduction"
section.information = "Information We Collect"
section.local_storage = "Local Data Storage"
section.third_party = "Third-Party Services"
section.authentication = "User Authentication"
section.permissions = "App Permissions"
section.compliance = "Legal Compliance"
section.updates = "Policy Updates"
section.contact = "Contact Information"
section.security = "Security Measures"
section.children = "Children's Privacy"
section.retention = "Data Retention"
```

The complete legal paragraphs are in `app/policy/page.jsx` and should remain
source-authoritative.

## source-only or unreferenced copy

The repository also contains older or draft components with copy that is not
currently imported by `app/page.jsx` or the live route pages, including:

```text
app/components/Hero.jsx
app/components/StackSection.jsx
app/components/FoundationsSection.jsx
app/components/BeyondWalletAccess.jsx
app/components/WhyOptnExists.jsx
app/components/UseCases.jsx
app/components/Contact.jsx
app/components/ContactForm.jsx
```

Do not treat strings in those components as current live website copy without
checking imports and route usage first. They may contain useful positioning
ideas, but they are draft/source context rather than confirmed page content.
