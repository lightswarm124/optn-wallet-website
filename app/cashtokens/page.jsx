import {
  ArrowLink,
  ButtonLink,
  FinalCTA,
  Icon,
  SectionLabel,
} from "../components/SitePrimitives";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "CashTokens on Bitcoin Cash: Primitives, Wallets & Apps | OPTN Labs",
  description:
    "Learn how CashTokens work in Bitcoin Cash outputs and what wallets, indexers, and applications must handle when building token-aware products.",
  path: "/cashtokens",
});

const primitiveLayers = [
  [
    "stack",
    "Fungible amounts",
    "A token category and amount travel with a BCH output, so balances are assembled from token-bearing UTXOs.",
  ],
  [
    "cube",
    "NFT commitments",
    "NFTs carry a commitment and a capability (none, mutable, or minting). Wallets must handle that state according to the capability and intended transaction.",
  ],
  [
    "route",
    "Token-aware transactions",
    "A builder must select the right token inputs and construct outputs without unintentionally burning tokens, changing NFT state, or misallocating BCH value.",
  ],
  [
    "wallet",
    "Human-readable display",
    "BCMR metadata can give wallets and applications names, symbols, decimals, icons, and descriptions to display.",
  ],
];

const integrationSteps = [
  [
    "Select token UTXOs",
    "Keep BCH value and token state separate while selecting inputs and calculating change.",
  ],
  [
    "Construct valid outputs",
    "Preserve the category, amount, NFT capability, and commitment required by the intended flow.",
  ],
  [
    "Resolve metadata",
    "Use BCMR data for display and discovery while keeping the on-chain category as the asset reference.",
  ],
  [
    "Test edge cases",
    "Cover sends, splits, merges, capability transitions and intentional token burns, missing metadata, and unsupported wallet paths.",
  ],
];

const relatedResources = [
  ["Covenants", "/covenants-on-bitcoin-cash"],
  ["BCMR metadata", "/bcmr-token-metadata"],
  ["OPTN Wallet", "/wallet"],
  ["Developer resources", "/developers"],
];

const relatedReading = [
  ["CashTokens in practice", "/blog/cashtokens-practical-entry"],
  ["Wallet flows and failure cases", "/blog/cashtokens-wallet-nft-failures"],
  ["CashScript covenant patterns", "/blog/cashscript-cashtokens-covenants"],
];

export default function CashTokensPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="site-container page-hero-grid">
          <div>
            <SectionLabel>CashTokens on Bitcoin Cash</SectionLabel>
            <h1>CashTokens make Bitcoin Cash useful for more than payments.</h1>
            <p className="page-hero-copy">
              CashTokens let products issue, display, and move fungible tokens
              and NFTs directly on Bitcoin Cash. This guide explains what
              wallets, apps, and product teams need to make those experiences
              work.
            </p>
            <div className="hero-actions">
              <a className="button" href="#integration">
                Read the integration model <span aria-hidden="true">→</span>
              </a>
              <ButtonLink href="/wallet" variant="secondary">
                Explore OPTN Wallet
              </ButtonLink>
            </div>
          </div>

          <div className="architecture-graphic" aria-label="CashTokens product flow">
            <div className="architecture-node">
              <Icon name="stack" size={25} />
              <div>
                <strong>CashToken output</strong>
                <small>Category · fungible amount · NFT capability / commitment</small>
              </div>
            </div>
            <div className="architecture-arrow">↓</div>
            <div className="architecture-node architecture-node-middle">
              <Icon name="wallet" size={25} />
              <div>
                <strong>Wallet or indexer</strong>
                <small>Select, parse, and display token UTXOs</small>
              </div>
            </div>
            <div className="architecture-arrow">↓</div>
            <div className="architecture-node architecture-node-dark">
              <Icon name="code" size={25} />
              <div>
                <strong>Application flow</strong>
                <small>Build and sign a valid transaction</small>
              </div>
            </div>
            <p>Educational overview. Product implementations vary.</p>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionLabel>The foundation</SectionLabel>
          <h2>The building blocks for token-powered BCH products.</h2>
          <p className="section-intro">
            CashTokens add native token state to Bitcoin Cash. The protocol
            defines what an output can carry; wallets, indexers, and apps turn
            that foundation into a product people can use.
          </p>
          <p className="section-intro">
            An output can carry a fungible amount, one NFT, or both, with all
            token data in that output belonging to the same category.
          </p>
          <div className="four-columns technical-grid">
            {primitiveLayers.map(([icon, title, body]) => (
              <div className="column-item" key={title}>
                <span className="icon-circle">
                  <Icon name={icon} />
                </span>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section" id="integration">
        <div className="site-container boundary">
          <div>
            <SectionLabel>From foundation to product</SectionLabel>
            <h2>Make token experiences work from end to end.</h2>
            <p className="section-intro">
              A CashToken balance is built from the outputs that hold it, not
              from an account balance in an app database. Every token-aware
              action therefore has to be reflected in a BCH transaction.
            </p>
            <div className="hero-actions">
              <ArrowLink href="/bcmr-token-metadata">
                Understand BCMR metadata
              </ArrowLink>
              <ArrowLink href="/covenants-on-bitcoin-cash">
                See where covenants fit
              </ArrowLink>
            </div>
          </div>
          <div className="simple-list">
            {integrationSteps.map(([title, body]) => (
              <div key={title}>
                <strong>{title}</strong>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionLabel>CashTokens and covenants</SectionLabel>
          <div className="boundary">
            <div>
              <h2>Asset state and spend rules are different layers.</h2>
              <p className="section-intro">
                CashTokens describe the asset state carried by a transaction.
                Covenants constrain which transaction paths are permitted. A
                product can use either layer independently, or combine them
                when a token flow also needs enforceable spend conditions.
              </p>
            </div>
            <div className="comparison">
              <div className="comparison-panel">
                <h3>CashTokens answer</h3>
                <p>Which token category is present?</p>
                <p>How much is carried?</p>
                <p>Which NFT capability or commitment applies?</p>
              </div>
              <div className="comparison-panel good">
                <h3>Covenants answer</h3>
                <p>Which transaction path is allowed?</p>
                <p>What outputs must be created?</p>
                <p>How does the controlled state continue?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionLabel>What CashTokens do not provide by themselves</SectionLabel>
          <h2>The protocol primitive is only one part of the product.</h2>
          <div className="four-columns technical-grid">
            <div className="column-item">
              <span className="icon-circle"><Icon name="wallet" /></span>
              <h3>Wallet behavior</h3>
              <p>Token selection, change handling, signing, and user-facing transaction previews still need to be built.</p>
            </div>
            <div className="column-item">
              <span className="icon-circle"><Icon name="route" /></span>
              <h3>Metadata availability</h3>
              <p>Names and icons depend on metadata resolution. Clients need useful fallbacks when metadata is missing or stale.</p>
            </div>
            <div className="column-item">
              <span className="icon-circle"><Icon name="shield" /></span>
              <h3>Spend restrictions</h3>
              <p>Token state does not automatically restrict future spends. Use a covenant when the transaction path itself must be constrained.</p>
            </div>
            <div className="column-item">
              <span className="icon-circle"><Icon name="check" /></span>
              <h3>Application correctness</h3>
              <p>Builders and tests must prove that the resulting token state matches the intended transition.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container resource-strip">
          <div>
            <SectionLabel>Continue the technical path</SectionLabel>
            <p className="section-intro">Move from the token primitive to enforcement, metadata, wallet behavior, or implementation resources.</p>
          </div>
          <div className="resource-links">
            {relatedResources.map(([label, href]) => (
              <ArrowLink href={href} key={href}>{label}</ArrowLink>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionLabel>Related reading</SectionLabel>
          <div className="resource-links">
            {relatedReading.map(([label, href]) => (
              <ArrowLink href={href} key={href}>{label}</ArrowLink>
            ))}
            <p className="section-intro">Further reference</p>
            <a
              className="arrow-link"
              href="https://cashtokens.org/docs/spec/chip/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Official CashTokens specification <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <FinalCTA
        title="Building a CashTokens product?"
        body="Start with the protocol layer, then bring us the wallet, application, or integration problem."
        label="Talk to OPTN"
      />
    </div>
  );
}
