import Image from "next/image";
import { createPageMetadata } from "../../lib/seo";

import {
  ArrowLink,
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

const companyLayers = [
  {
    icon: "wallet",
    title: "OPTN Wallet",
    status: "Shipped",
    body: "A self-custody Bitcoin Cash and CashTokens wallet built to interact with applications and advanced transaction flows.",
    href: "/wallet",
    label: "Explore Wallet",
  },
  {
    icon: "code",
    title: "Open developer tools",
    status: "Available now",
    body: "Public tooling, documentation, examples, and technical resources for building Bitcoin Cash applications.",
    href: "/developers",
    label: "Explore Developers",
  },
  {
    icon: "building",
    title: "BCH infrastructure",
    status: "Available now",
    body: "Network, indexing, and metadata services that help applications and developers work with Bitcoin Cash.",
    href: "/infrastructure",
    label: "Explore Infrastructure",
  },
  {
    icon: "shield",
    title: "Programmable fund control",
    status: "In development",
    body: "Coordination and covenant systems for defining permitted recipients, amounts, transaction paths, and recovery.",
    href: "/platform",
    label: "Explore the Platform",
  },
];

const principles = [
  ["Open foundation", "We build on Bitcoin Cash, CashTokens, and public developer infrastructure."],
  ["Self-custody boundary", "OPTN coordinates financial actions without taking custody of customer funds."],
  ["Practical engineering", "We work from transaction behavior and tested integrations toward useful products."],
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
    body: "Kyle created FundMe.cash and works on covenant applications, contract auditing, and real-fund workflows. His experience building covenant-based products informs OPTN Labs’ focus on practical, controlled transaction systems.",
  },
];

const contactHref = "mailto:info@optnlabs.com?subject=OPTN%20Labs%20inquiry";

function Layer({ icon, title, status, body, href, label }) {
  return (
    <article className="column-item about-layer">
      <span className="icon-circle"><Icon name={icon} /></span>
      <div className="about-layer-heading">
        <h3>{title}</h3>
        <span className="status-pill">{status}</span>
      </div>
      <p>{body}</p>
      <ArrowLink href={href}>{label}</ArrowLink>
    </article>
  );
}

export default function AboutPage() {
  return (
    <div className="page-shell about-page">
      <section className="page-hero about-hero">
        <div className="site-container about-hero-grid">
          <div>
            <SectionLabel>About OPTN Labs</SectionLabel>
            <h1>Building the systems that help value move with control.</h1>
            <p className="page-hero-copy">
              Founded in Canada in 2025, OPTN Labs builds Bitcoin Cash wallets,
              developer tooling, infrastructure, and programmable transaction
              systems for people, software, and AI agents.
            </p>
            <p className="about-mission">
              <strong>Our mission:</strong> build open financial infrastructure
              that helps people, software, and AI agents move value through
              approved paths while preserving self-custody.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/wallet">Explore OPTN Wallet</ButtonLink>
              <ButtonLink href={contactHref} variant="secondary">Talk to OPTN</ButtonLink>
            </div>
          </div>
          <div className="about-hero-panel">
            <SectionLabel>What we build</SectionLabel>
            <div className="about-panel-row">
              <Icon name="wallet" size={24} />
              <div><strong>Use Bitcoin Cash</strong><span>Wallets and connected applications</span></div>
            </div>
            <div className="about-panel-row">
              <Icon name="code" size={24} />
              <div><strong>Build on Bitcoin Cash</strong><span>Tools, infrastructure, and engineering</span></div>
            </div>
            <div className="about-panel-row">
              <Icon name="shield" size={24} />
              <div><strong>Control financial workflows</strong><span>Coordination and permitted outcomes</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section about-layers-section">
        <div className="site-container">
          <SectionLabel>One ecosystem, several layers</SectionLabel>
          <h2>Products and infrastructure for the BCH application layer.</h2>
          <div className="four-columns about-layer-grid">
            {companyLayers.map((layer) => <Layer key={layer.title} {...layer} />)}
          </div>
        </div>
      </section>

      <section className="site-section about-principles-section">
        <div className="site-container">
          <SectionLabel>How we work</SectionLabel>
          <h2>Open where it helps. Explicit where it matters.</h2>
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
              Coordination can map requests to approved financial paths, while
              BCH covenant rules can enforce permitted outcomes against funds
              deliberately placed under covenant control.
            </p>
          </div>
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

      <section className="site-section about-next-section">
        <div className="site-container">
          <SectionLabel>Explore OPTN Labs</SectionLabel>
          <h2>Choose where you want to start.</h2>
          <div className="about-next-grid">
            <ArrowLink href="/wallet">Use the shipped wallet</ArrowLink>
            <ArrowLink href="/developers">Build with the open tools</ArrowLink>
            <ArrowLink href="/engineering">Discuss a technical project</ArrowLink>
            <ArrowLink href="/platform">Understand fund control</ArrowLink>
          </div>
        </div>
      </section>

      <FinalCTA
        title="Have something to build?"
        body="Tell us what you are working on and we will help identify the right starting point."
        label="Talk to OPTN"
        href={contactHref}
      />
    </div>
  );
}
