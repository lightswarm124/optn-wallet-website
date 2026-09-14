import Image from "next/image";
import { createPageMetadata } from "../../lib/seo";

import {
  ButtonLink,
  FinalCTA,
  Icon,
  SectionLabel,
} from "../components/SitePrimitives";

export const metadata = createPageMetadata({
  title: "About OPTN Labs | Bitcoin Cash Products & Infrastructure",
  description:
    "OPTN Labs is a Canadian technology company building Bitcoin Cash products for self-custody, digital assets, developer integrations, and programmable payments.",
  path: "/about",
});

const principles = [
  ["Open foundation", "We build reusable Bitcoin Cash tools and infrastructure that other teams can use directly."],
  ["Self-custody by design", "We build self-custody products and tools that let users retain control of their keys and funds."],
  ["Practical engineering", "We turn hard transaction and integration problems into useful products."],
];

const team = [
  {
    name: "Jerry Qian",
    role: "Founder",
    image: "/assets/images/team/jerry-qian.jpg",
    body: "Jerry leads product, wallet and transaction infrastructure, covenant development, and commercial strategy at OPTN Labs. He brings more than a decade of experience organizing local Web3 communities.",
  },
  {
    name: "Kyle Wildeman",
    role: "Co-founder",
    image: "/assets/images/team/kyle-wildeman.png",
    body: "Kyle created FundMe.cash and works on production covenant applications, contract review, and real-fund workflows. His experience building covenant-based products informs OPTN Labs’ programmable transaction work.",
  },
];

const contactHref = "mailto:info@optnlabs.com?subject=OPTN%20Labs%20inquiry";

export default function AboutPage() {
  return (
    <div className="page-shell about-page">
      <section className="page-hero about-hero">
        <div className="site-container about-hero-grid">
          <div>
            <SectionLabel>About OPTN Labs</SectionLabel>
            <h1>Building Bitcoin Cash products for people, apps, and AI agents.</h1>
            <p className="page-hero-copy">
              Founded in Canada in 2025, OPTN Labs builds Bitcoin Cash products
              and infrastructure for self-custody, digital assets, developer
              integrations, and programmable payments.
            </p>
            <p className="about-mission">
              <strong>Our mission:</strong> make Bitcoin Cash useful across
              self-custody products, connected applications, and programmable
              payment workflows.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/wallet">Explore OPTN Wallet</ButtonLink>
              <ButtonLink href={contactHref} variant="secondary">Talk to OPTN</ButtonLink>
            </div>
          </div>
          <div className="about-hero-panel">
            <SectionLabel>At a glance</SectionLabel>
            <div className="about-panel-row">
              <Icon name="wallet" size={24} />
              <div><strong>Use Bitcoin Cash</strong><span>Wallets, digital assets, and connected applications</span></div>
            </div>
            <div className="about-panel-row">
              <Icon name="code" size={24} />
              <div><strong>Build BCH products</strong><span>Open tooling, infrastructure, and engineering</span></div>
            </div>
            <div className="about-panel-row">
              <Icon name="shield" size={24} />
              <div><strong>Program financial workflows</strong><span>Payments, transaction rules, and autonomous software</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section about-story-section">
        <div className="site-container">
          <SectionLabel>Why OPTN exists</SectionLabel>
          <h2>Make advanced Bitcoin Cash capabilities usable.</h2>
          <div className="about-story-copy">
            <p>Bitcoin Cash combines low-cost UTXO transactions, native tokens, and transaction-level programmability. OPTN turns these primitives into wallets, infrastructure, and payment workflows that people and development teams can use.</p>
            <p>We started with OPTN Wallet. Building a complete wallet exposed the tooling and infrastructure BCH applications need and led naturally to our next focus: payment and transaction infrastructure for software that can operate money autonomously.</p>
          </div>
        </div>
      </section>

      <section className="site-section about-principles-section">
        <div className="site-container">
          <SectionLabel>How we work</SectionLabel>
          <h2>Open where it helps. Clear where it matters.</h2>
          <div className="three-columns about-principles-grid">
            {principles.map(([title, body]) => (
              <article className="column-item about-principle" key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
          <div className="about-boundary">
            <div>
              <SectionLabel>Self-custody architecture</SectionLabel>
              <h3>Customers retain control of their keys and funds.</h3>
            </div>
            <p>
              OPTN provides application and transaction infrastructure around
              customer-controlled funds. Where a workflow uses BCH covenants,
              transaction rules can enforce defined financial conditions for
              funds placed in that workflow.
            </p>
          </div>
        </div>
      </section>

      <section className="site-section about-proof-section">
        <div className="site-container">
          <SectionLabel>Track record</SectionLabel>
          <h2>Built through working BCH products.</h2>
          <div className="about-proof-grid">
            <article className="about-proof-item about-proof-wallet-item">
              <Image
                className="about-proof-screenshot"
                src="/screenshots/IMG_20250511_111312.png"
                alt="OPTN Wallet home screen shown on its Google Play listing"
                width={361}
                height={749}
              />
              <div className="about-proof-wallet-copy">
                <strong>OPTN Wallet <span className="status-inline">Shipped</span></strong>
                <p>Self-custody BCH wallet, CashTokens, transaction construction, and application integrations.</p>
                <a className="about-proof-link" href="https://play.google.com/store/apps/details?id=optn.wallet.app" target="_blank" rel="noopener noreferrer">
                  View the Google Play listing <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
            <article className="about-proof-item"><strong>FundMe.cash <span className="status-inline">Shipped</span></strong><p>Covenant-based campaign flows for contributions, claims, and refunds.</p></article>
            <article className="about-proof-item"><strong>Programmable payments <span className="status-inline">In development</span></strong><p>Agent payments, transaction composition, and covenant-based workflows.</p></article>
          </div>
        </div>
      </section>

      <section className="site-section about-team-section">
        <div className="site-container">
          <SectionLabel>The team</SectionLabel>
          <h2>Built by people with BCH product experience.</h2>
          <div className="about-team-grid">
            {team.map((member) => (
              <article className="about-team-card" key={member.name}>
                <Image
                  className="about-team-photo"
                  src={member.image}
                  alt={`${member.name}, ${member.role} at OPTN Labs`}
                  width={320}
                  height={320}
                />
                <div>
                  <h3>{member.name}</h3>
                  <span className="about-team-role">{member.role}</span>
                  <p>{member.body}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="about-team-note">
            Our work across wallets, covenant applications, and production BCH
            workflows shaped our current focus: payment infrastructure that
            lets software act within defined transaction rules.
          </p>
        </div>
      </section>

      <FinalCTA
        title="Have a product idea?"
        body="Tell us what you are building and we will help identify the right next step."
        label="Talk to OPTN"
        href={contactHref}
      />
    </div>
  );
}
