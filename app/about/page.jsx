import Image from "next/image";
import { createPageMetadata } from "../../lib/seo";

import {
  ButtonLink,
  FinalCTA,
  Icon,
  SectionLabel,
} from "../components/SitePrimitives";

export const metadata = createPageMetadata({
  title: "About OPTN Labs | Bitcoin Cash Builders",
  description:
    "OPTN Labs is a Canadian company founded in 2025, building Bitcoin Cash wallets, developer tools, infrastructure, and controlled transaction systems.",
  path: "/about",
});

const principles = [
  ["Open foundation", "We build on Bitcoin Cash and share the tools that help the ecosystem move forward."],
  ["Self-custody by design", "OPTN helps coordinate financial actions without taking custody of customer funds."],
  ["Practical engineering", "We turn hard transaction and integration problems into useful products."],
];

const team = [
  {
    name: "Jerry Qian",
    role: "Founder",
    image: "/assets/images/team/jerry-qian.jpg",
    body: "Jerry leads wallet and transaction infrastructure, covenant research and development, product direction, and founder-led commercialization at OPTN Labs. He has more than 10 years of experience organizing local web3 communities.",
  },
  {
    name: "Kyle Wildeman",
    role: "Co-founder",
    image: "/assets/images/team/kyle-wildeman.png",
    body: "Kyle is the creator of FundMe.cash and works on production covenant applications, contract auditing, and real-fund workflows. His experience building covenant-based products informs OPTN Labs’ focus on practical, controlled transaction systems.",
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
            <h1>Building practical tools for the future of Bitcoin Cash.</h1>
            <p className="page-hero-copy">
              Founded in Canada in 2025, OPTN Labs builds products that make
              Bitcoin Cash easier to use, easier to build on, and easier to
              operate.
            </p>
            <p className="about-mission">
              <strong>Our mission:</strong> build open financial infrastructure
              that helps people and software move value through clear,
              defined paths while preserving self-custody.
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
              <div><strong>Use BCH with confidence</strong><span>Wallets and connected applications</span></div>
            </div>
            <div className="about-panel-row">
              <Icon name="code" size={24} />
              <div><strong>Build products faster</strong><span>Tools, infrastructure, and engineering</span></div>
            </div>
            <div className="about-panel-row">
              <Icon name="shield" size={24} />
              <div><strong>Create clearer controls</strong><span>Coordination and permitted outcomes</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section about-story-section">
        <div className="site-container">
          <SectionLabel>Why OPTN exists</SectionLabel>
          <h2>Make advanced Bitcoin Cash capabilities usable.</h2>
          <div className="about-story-copy">
            <p>Bitcoin Cash has native tokens, programmable transaction patterns, and a UTXO model capable of more than simple payments. But users and teams should not have to manage all that machinery themselves to build or use a product.</p>
            <p>We started with a real wallet. Building it exposed the tooling and infrastructure BCH applications need—and led us to explore a deeper question: as software moves money, how can the transaction itself help define what is allowed?</p>
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
              <SectionLabel>Current boundary</SectionLabel>
              <h3>OPTN does not hold customer funds.</h3>
            </div>
            <p>
              We can help map requests to defined financial paths. For funds
              deliberately placed under covenant control, BCH transaction rules
              can enforce the permitted outcome.
            </p>
          </div>
        </div>
      </section>

      <section className="site-section about-proof-section">
        <div className="site-container">
          <SectionLabel>Experience behind the stack</SectionLabel>
          <h2>Built through working BCH products.</h2>
          <div className="about-proof-grid">
            <div className="about-proof-item"><strong>OPTN Wallet <span className="status-inline">Shipped</span></strong><p>Self-custody BCH wallet, CashTokens, transaction construction, and application integrations.</p></div>
            <div className="about-proof-item"><strong>FundMe.cash <span className="status-inline">Shipped</span></strong><p>Covenant-based campaign flows for contributions, claims, and refunds.</p></div>
            <div className="about-proof-item"><strong>Covenant coordination <span className="status-inline">Validated · In development</span></strong><p>Controlled payments, continuing states, and downstream covenant handoffs.</p></div>
          </div>
          <p className="about-proof-note"><strong>FundMe.cash: 3,000 BCH historical campaign contribution volume — not OPTN revenue.</strong></p>
        </div>
      </section>

      <section className="site-section about-team-section">
        <div className="site-container">
          <SectionLabel>The team</SectionLabel>
          <h2>Built by people who build on BCH.</h2>
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
            The team’s work across wallets, covenant applications, and working
            BCH workflows shaped the problem OPTN is building around:
            authorization alone does not guarantee an acceptable outcome.
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
