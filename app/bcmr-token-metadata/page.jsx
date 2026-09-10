import {
  ArrowLink,
  ButtonLink,
  FinalCTA,
  Icon,
  SectionLabel,
} from "../components/SitePrimitives";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "BCMR: Bitcoin Cash Token Metadata for Wallets & Apps | OPTN Labs",
  description:
    "Learn how BCMR connects CashToken category IDs to names, symbols, decimals, icons, and authenticated metadata for Bitcoin Cash wallets and indexers.",
  path: "/bcmr-token-metadata",
});

const metadataFields = [
  ["cube", "On-chain reference", "Use the category ID as the protocol-level reference for tokens belonging to that category."],
  ["code", "Display fields", "Names, symbols, decimals, and descriptions help a wallet explain what a user holds."],
  ["wallet", "Media and links", "Icons and resource URIs can connect a token entry to a richer product experience."],
  ["shield", "Resolution behavior", "Clients need validation, caching, and fallback behavior when a registry document is unavailable."],
];

const resolutionSteps = [
  ["Read the category", "A token-bearing output provides the category that identifies the asset on-chain."],
  ["Acquire registry data", "A wallet or indexer can obtain metadata from an embedded, imported, DNS-resolved, or chain-resolved BCMR source."],
  ["Validate and cache", "Validate the registry according to its resolution method, verify published content hashes where applicable, and cache metadata using an explicit update policy."],
  ["Render with fallback", "The application shows the metadata when available and falls back to the category when it is not."],
];

const productLayers = [
  ["Issuance", "Choose the token category and the metadata publication strategy the product intends to use."],
  ["Registry", "Publish a discoverable document that clients can resolve and validate."],
  ["Indexer", "Associate token-bearing UTXOs with balances, holders, and metadata for application queries."],
  ["Wallet", "Turn the resolved data into a clear asset list, history, and transaction preview."],
];

const relatedResources = [
  ["CashTokens", "/cashtokens"],
  ["Infrastructure", "/infrastructure"],
  ["OPTN Wallet", "/wallet"],
  ["Developer resources", "/developers"],
];

const relatedReading = [
  ["CashTokens in practice", "/blog/cashtokens-practical-entry"],
  ["Wallet flows and failure cases", "/blog/cashtokens-wallet-nft-failures"],
];

export default function TokenMetadataPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="site-container page-hero-grid">
          <div>
            <SectionLabel>BCMR on Bitcoin Cash</SectionLabel>
            <h1>Make CashTokens easier for people to recognize and use.</h1>
            <p className="page-hero-copy">
              BCMR gives Bitcoin Cash wallets and apps a structured way to show
              token names, symbols, icons, and other useful information. This
              guide explains how metadata connects an on-chain token to a
              better product experience.
            </p>
            <p className="hero-note">Specification status: draft application-layer standard.</p>
            <div className="hero-actions">
              <a className="button" href="#resolution">
                Follow the resolution path <span aria-hidden="true">→</span>
              </a>
              <ButtonLink href="/cashtokens" variant="secondary">
                Start with CashTokens
              </ButtonLink>
            </div>
          </div>

          <div className="architecture-graphic" aria-label="BCMR metadata resolution flow">
            <div className="architecture-node">
              <Icon name="cube" size={25} />
              <div>
                <strong>Token category</strong>
                <small>On-chain asset reference</small>
              </div>
            </div>
            <div className="architecture-arrow">↓</div>
            <div className="architecture-node architecture-node-middle">
              <Icon name="code" size={25} />
              <div>
                <strong>BCMR document</strong>
                <small>Identity and display metadata</small>
              </div>
            </div>
            <div className="architecture-arrow">↓</div>
            <div className="architecture-node architecture-node-dark">
              <Icon name="wallet" size={25} />
              <div>
                <strong>Wallet or application</strong>
                <small>Resolve, validate, cache, and display</small>
              </div>
            </div>
            <p>Educational overview. Client behavior can vary.</p>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionLabel>What BCMR contributes</SectionLabel>
          <h2>Turn token IDs into useful product experiences.</h2>
          <p className="section-intro">
            A category identifies a CashToken, but people need more context
            than a long identifier. BCMR gives wallets and apps a structured
            way to turn that identifier into useful information without putting
            every display field directly into each transaction.
          </p>
          <div className="four-columns technical-grid">
            {metadataFields.map(([icon, title, body]) => (
              <div className="column-item" key={title}>
                <span className="icon-circle"><Icon name={icon} /></span>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section" id="resolution">
        <div className="site-container boundary">
          <div>
            <SectionLabel>Metadata resolution</SectionLabel>
            <h2>From an on-chain ID to a name users understand.</h2>
            <p className="section-intro">
              Wallets and indexers connect the on-chain category to the
              information a user sees. A resilient implementation validates
              registry data, handles unavailable sources, and keeps the asset
              reference separate from its display name.
            </p>
            <div className="hero-actions">
              <ArrowLink href="/infrastructure">See the infrastructure layer</ArrowLink>
              <ArrowLink href="/developers">Open developer resources</ArrowLink>
            </div>
          </div>
          <div className="simple-list">
            {resolutionSteps.map(([title, body]) => (
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
          <SectionLabel>BCMR in the product stack</SectionLabel>
          <h2>From token creation to a clear wallet experience.</h2>
          <div className="four-columns technical-grid">
            {productLayers.map(([title, body], index) => (
              <div className="column-item" key={title}>
                <span className="step-number">{index + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container boundary">
          <div>
            <SectionLabel>Important boundary</SectionLabel>
            <h2>Helpful context—not transaction authority.</h2>
            <p className="section-intro">
              BCMR can make a token understandable, but it does not change
              whether a BCH transaction is valid. Applications should keep the
              on-chain category authoritative and treat names, icons, and
              descriptions as resolved data with explicit fallback behavior.
            </p>
          </div>
          <div className="simple-list">
            <div>
              <strong>It does not authorize a spend</strong>
              <p>Metadata cannot make an otherwise invalid transaction valid.</p>
            </div>
            <div>
              <strong>It can be unavailable</strong>
              <p>Wallets should remain useful when a document, image, or registry endpoint cannot be reached.</p>
            </div>
            <div>
              <strong>It needs product validation</strong>
              <p>Clients should define which registries or resolution methods they trust, how updates are authenticated, when cached data expires, and how the interface falls back when metadata is unavailable.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container resource-strip">
          <div>
            <SectionLabel>Continue the technical path</SectionLabel>
            <p className="section-intro">Move from metadata to the CashToken primitive, infrastructure, wallet behavior, or implementation resources.</p>
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
              href="https://github.com/bitjson/chip-bcmr"
              target="_blank"
              rel="noopener noreferrer"
            >
              CHIP-BCMR specification <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <FinalCTA
        title="Building a token-aware BCH product?"
        body="Bring the category, wallet surface, metadata, and integration problem. We can help connect the layers."
        label="Talk to OPTN"
      />
    </div>
  );
}
