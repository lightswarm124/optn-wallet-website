import {
  ArrowLink,
  ButtonLink,
  FinalCTA,
  FlowSteps,
  Icon,
  SectionLabel,
} from "../components/SitePrimitives";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Bitcoin Cash Covenants: Rules, Examples & Limits | OPTN Labs",
  description:
    "Learn how Bitcoin Cash covenants constrain recipients, amounts, successor states, and recovery for BCH and CashToken funds placed under covenant control.",
  path: "/covenants-on-bitcoin-cash",
});

const controls = [
  ["person", "Recipients", "Restrict where a controlled output can send value next."],
  ["stack", "Amounts", "Enforce per-payment, cumulative, or remaining-value limits."],
  ["route", "Successor state", "For stateful designs, a valid successor advances the workflow; a transaction that violates the rule fails."],
  ["shield", "Recovery", "Make the return or recovery path explicit in the transaction rules."],
];

const patterns = [
  ["Escrow", "Release value only when the transaction satisfies the agreed conditions."],
  ["Staged distribution", "Move grants, treasury funds, or payouts through defined successor states."],
  ["Restricted spend", "Limit recipients or transaction shapes for a software-operated workflow."],
  ["Token state", "Combine CashToken categories, commitments, or capabilities with covenant rules to constrain token-aware state transitions."],
];

const limits = [
  ["Only controlled funds", "A covenant governs funds deliberately placed under that covenant. It does not control unrelated assets or an entire wallet."],
  ["Explicit transaction design", "The rule can only enforce conditions expressible using the BCH VM and the transaction information available to the script."],
  ["Builder responsibility", "A wallet or backend still has to construct the intended outputs, handle fees and change, and preserve or intentionally transform token state."],
  ["Recovery is a design choice", "A recovery path must be included and tested; an incomplete design can make funds difficult or impossible to move."],
];

const relatedResources = [
  ["OPTN Platform", "/platform"],
  ["CashTokens", "/cashtokens"],
  ["Engineering support", "/engineering"],
  ["Developer resources", "/developers"],
];

const relatedReading = [
  ["CashScript covenant patterns", "/blog/cashscript-cashtokens-covenants"],
  ["CashTokens wallet failure cases", "/blog/cashtokens-wallet-nft-failures"],
  ["CashTokens in practice", "/blog/cashtokens-practical-entry"],
];

export default function CovenantsPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="site-container page-hero-grid">
          <div>
            <SectionLabel>Bitcoin Cash covenants</SectionLabel>
            <h1>Covenants define enforceable transaction paths.</h1>
            <p className="page-hero-copy">
              A Bitcoin Cash covenant can require the transaction spending a
              controlled output to satisfy defined rules. This guide covers
              what covenants can enforce, common BCH patterns, and the limits
              teams need to design around.
            </p>
            <div className="hero-actions">
              <a className="button" href="#how-it-works">
                See how it works <span aria-hidden="true">→</span>
              </a>
              <ButtonLink href="/platform" variant="secondary">
                Explore OPTN Platform
              </ButtonLink>
            </div>
          </div>

          <div className="architecture-graphic" aria-label="Covenant transaction flow">
            <div className="architecture-node">
              <Icon name="code" size={25} />
              <div>
                <strong>Transaction request</strong>
                <small>An application or wallet proposes a spend</small>
              </div>
            </div>
            <div className="architecture-arrow">↓</div>
            <div className="architecture-node architecture-node-middle">
              <Icon name="route" size={25} />
              <div>
                <strong>Transaction inspection</strong>
                <small>Inputs and outputs are checked against the rule</small>
              </div>
            </div>
            <div className="architecture-arrow">↓</div>
            <div className="architecture-node architecture-node-dark">
              <Icon name="shield" size={25} />
              <div>
                <strong>Permitted outcome</strong>
                <small>Valid transaction proceeds; invalid paths fail</small>
              </div>
            </div>
            <p>Illustrative architecture. Not a live deployment.</p>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionLabel>What a covenant can control</SectionLabel>
          <h2>Rules are enforced when covenant-controlled funds are spent.</h2>
          <p className="section-intro">
            With the right script and transaction design, the spend conditions
            are checked at the BCH transaction boundary instead of living only
            in an application server or an operator checklist.
          </p>
          <div className="four-columns technical-grid">
            {controls.map(([icon, title, body]) => (
              <div className="column-item" key={title}>
                <span className="icon-circle"><Icon name={icon} /></span>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section" id="how-it-works">
        <div className="site-container">
          <SectionLabel>How it works</SectionLabel>
          <h2>The rule is checked at the transaction boundary.</h2>
          <p className="section-intro">
            A covenant does not approve a vague request. It evaluates the
            concrete transaction that attempts to spend the controlled input.
            The builder and the covenant therefore have separate jobs.
          </p>
          <FlowSteps
            className="pricing-steps"
            steps={[
              { title: "Lock", body: "Place BCH or CashToken funds under a covenant rule." },
              { title: "Build", body: "Assemble the intended inputs, outputs, state, and fee." },
              { title: "Validate", body: "The script checks the transaction against the permitted path." },
              { title: "Continue", body: "For stateful designs, a valid successor advances the workflow; a transaction that violates the rule fails." },
            ]}
          />
        </div>
      </section>

      <section className="site-section">
        <div className="site-container boundary">
          <div>
            <SectionLabel>Authorization and enforcement</SectionLabel>
            <h2>Authorization and covenant rules answer different questions.</h2>
            <p className="section-intro">
              A signature proves that an authorized key approved a transaction.
              A covenant can additionally require the spending transaction
              itself to satisfy rules about outputs, values, tokens, or
              continuation state. Many designs use both.
            </p>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionLabel>Common Bitcoin Cash patterns</SectionLabel>
          <h2>Use covenants where the transaction path matters.</h2>
          <div className="four-columns technical-grid">
            {patterns.map(([title, body], index) => (
              <div className="column-item" key={title}>
                <span className="step-number">{index + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
          <div className="hero-actions">
            <ArrowLink href="/cashtokens">Pair spend rules with CashTokens</ArrowLink>
            <ArrowLink href="/engineering">Talk to engineering</ArrowLink>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container boundary">
          <div>
            <SectionLabel>Important limitations</SectionLabel>
            <h2>Covenants are narrow by design.</h2>
            <p className="section-intro">
              A covenant can make a specific transaction path enforceable, but
              it is not a universal policy engine or a substitute for wallet,
              builder, and operational design.
            </p>
          </div>
          <div className="simple-list">
            {limits.map(([title, body]) => (
              <div key={title}>
                <strong>{title}</strong>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container resource-strip">
          <div>
            <SectionLabel>Continue the technical path</SectionLabel>
            <p className="section-intro">Move from covenant concepts to OPTN’s platform, CashTokens, engineering, or developer resources.</p>
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
              href="https://cashscript.org/docs/guides/covenants"
              target="_blank"
              rel="noopener noreferrer"
            >
              CashScript covenant documentation <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <FinalCTA
        title="Have a covenant pattern in mind?"
        body="Bring the transaction path, recovery behavior, and product context. We can help scope the implementation."
        label="Talk to OPTN"
      />
    </div>
  );
}
