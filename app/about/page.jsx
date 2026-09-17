import Image from "next/image";
import { createPageMetadata } from "../../lib/seo";

import {
  ButtonLink,
  FinalCTA,
  Icon,
  SectionLabel,
} from "../components/SitePrimitives";

export const metadata = createPageMetadata({
  title: "About OPTN Labs | OPTN Wallet & BCH Ecosystem",
  description:
    "Meet the team behind OPTN Wallet, open Bitcoin Cash resources, infrastructure, and controlled-payment pilot projects.",
  path: "/about",
});

const principles = [
  ["Useful products", "We start with practical experiences that make Bitcoin Cash easier to use in everyday products."],
  ["Self-custody by design", "We build products and tools that let users retain control of their keys and funds."],
  ["Open ecosystem", "We publish reusable resources and support infrastructure that other teams can inspect, use, and extend."],
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

const contactHref = "/#contact";

export default function AboutPage() {
  return (
    <div className="page-shell about-page">
      <section className="page-hero about-hero">
        <div className="site-container about-hero-grid">
          <div>
            <SectionLabel>About OPTN Labs</SectionLabel>
            <h1>Building useful Bitcoin Cash products.</h1>
            <p className="page-hero-copy">
              Founded in Canada in 2025, OPTN Labs is the company behind OPTN
              Wallet. We also contribute open resources, infrastructure, and
              engineering for the wider Bitcoin Cash ecosystem.
            </p>
            <p className="about-mission">
              <strong>Our mission:</strong> make Bitcoin Cash easier to use,
              integrate, and extend.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/wallet">Explore OPTN Wallet</ButtonLink>
              <ButtonLink href={contactHref} variant="secondary">Contact us</ButtonLink>
            </div>
          </div>
          <div className="about-hero-panel">
            <SectionLabel>At a glance</SectionLabel>
            <div className="about-panel-row">
              <Icon name="wallet" size={24} />
              <div><strong>Ship user products</strong><span>Self-custody, digital assets, and connected applications</span></div>
            </div>
            <div className="about-panel-row">
              <Icon name="code" size={24} />
              <div><strong>Support the ecosystem</strong><span>Open resources, infrastructure, and implementation experience</span></div>
            </div>
            <div className="about-panel-row">
              <Icon name="shield" size={24} />
              <div><strong>Explore new workflows</strong><span>Controlled-payment pilots for software and AI agents</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section about-story-section">
        <div className="site-container">
          <SectionLabel>From product to ecosystem</SectionLabel>
          <h2>Build the product. Share the foundation.</h2>
          <div className="about-story-copy">
            <p>OPTN Wallet brings BCH payments, CashTokens, connected apps, and advanced tools into one self-custody product. The work behind it also produces resources that can help other teams build better Bitcoin Cash experiences.</p>
            <p>That product and ecosystem experience now informs a newer area of exploration: controlled-payment pilots where software can act within owner-defined financial boundaries.</p>
          </div>
        </div>
      </section>

      <section className="site-section about-principles-section">
        <div className="site-container">
          <SectionLabel>Principles</SectionLabel>
          <h2>How we work</h2>
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
          <SectionLabel>Current work</SectionLabel>
          <h2>One released product, a broader ecosystem.</h2>
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
                <strong>OPTN Wallet · Released</strong>
                <p>Self-custody BCH wallet with CashTokens, app connections, and advanced transaction tools.</p>
                <a className="about-proof-link" href="https://play.google.com/store/apps/details?id=optn.wallet.app" target="_blank" rel="noopener noreferrer">
                  View the Google Play listing <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
            <article className="about-proof-item"><strong>Bitcoin Cash ecosystem</strong><p>Open resources, token and metadata guidance, infrastructure, and engineering for BCH builders.</p></article>
            <article className="about-proof-item"><strong>Controlled-payment pilots</strong><p>WIP explorations for software and AI payments with defined recipients, amounts, paths, and recovery.</p></article>
          </div>
        </div>
      </section>

      <section className="site-section about-team-section">
        <div className="site-container">
          <SectionLabel>Company</SectionLabel>
          <h2>The team</h2>
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
            Our work across wallets, CashTokens, covenant applications, and BCH
            infrastructure shapes both the products we ship and the ecosystem
            work we share.
          </p>
        </div>
      </section>

      <FinalCTA
        title="Want to build with OPTN?"
        body="Ask about OPTN Wallet, the Bitcoin Cash ecosystem, or a controlled-payment pilot project."
        label="Contact us"
        href={contactHref}
      />
    </div>
  );
}
