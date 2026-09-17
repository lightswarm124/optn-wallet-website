import Image from "next/image";
import {
  ArrowLink,
  ButtonLink,
  FinalCTA,
  Icon,
  SectionLabel,
} from "../components/SitePrimitives";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Controlled Agent Payments | Pilot Concept Demo",
  description:
    "Preview a controlled-payment pilot concept where the same agent authority completes an approved payment while funds remain within the owner's policy.",
  path: "/demo",
});

// Upload assets to public/demo, then update only these paths. Empty values keep
// the page useful while the final video and screenshots are being produced.
const demoAssets = {
  video: {
    src: "",
    poster: "",
    captions: "",
  },
  proofVisuals: {
    allowed: "",
    policy: "",
    recovery: "",
  },
  evidence: {
    href: "",
    title: "Approved transaction",
    body: "Open the public transaction or reproducible test vector for this exact demo flow.",
    label: "Open transaction",
  },
};

const scenarioSteps = [
  [
    "01",
    "Owner defines policy",
    "Set the approved provider, payment limit, and recovery path.",
  ],
  [
    "02",
    "Funds are prepared",
    "Place funds under the policy-bound control path.",
  ],
  [
    "03",
    "Agent requests payment",
    "Software asks to pay the approved provider.",
  ],
  [
    "04",
    "Approved payment completes",
    "The same agent/signing authority pays within policy.",
  ],
  [
    "05",
    "Policy protects the boundary",
    "The same authority tries a different transaction; the funds follow only a permitted path.",
  ],
];

const proofCards = [
  {
    id: "allowed",
    icon: "check",
    tone: "positive",
    title: "Approved provider payment",
    body: "An agent completes an API payment within the provider and amount defined by the owner.",
    visualAlt: "Allowed provider payment",
  },
  {
    id: "policy",
    icon: "shield",
    tone: "policy",
    title: "Policy-based execution",
    body: "The same agent/signing authority can request another payment, while the funds follow only a permitted transaction path.",
    visualAlt: "Policy-based payment execution",
  },
  {
    id: "recovery",
    icon: "route",
    tone: "neutral",
    title: "Owner control",
    body: "The owner keeps a defined recovery and control path for the remaining funds.",
    visualAlt: "Owner recovery path",
  },
];

const maturityRows = [
  [
    "Released product",
    "OPTN Wallet brings BCH, CashTokens, WalletConnect, and advanced transaction tools into one self-custody product.",
  ],
  [
    "Ecosystem experience",
    "CashToken tooling, covenant workflow experience from FundMe.cash, and open Bitcoin Cash infrastructure.",
  ],
  [
    "Pilot exploration",
    "Controlled payments, agent integration, monitoring, and organizational policy workflows for scoped pilot projects.",
  ],
];

const resourceLinks = [
  [
    "OPTN Wallet",
    "The released BCH and CashTokens wallet at the center of the OPTN ecosystem.",
    "/wallet",
    "Explore OPTN Wallet",
  ],
  [
    "FundMe.cash",
    "Real-fund covenant workflows for contributions, claims, and refunds.",
    "https://fundme.cash",
    "Explore FundMe.cash",
  ],
  [
    "Open-source implementation",
    "Review the public OPTN Wallet implementation and transaction tooling.",
    "https://github.com/OPTNLabs/OPTNWallet",
    "View GitHub",
  ],
  [
    "How enforcement works",
    "See how programmable payment coordination and rule enforcement fit together on BCH.",
    "/platform",
    "Explore the model",
  ],
];

function DemoVideo() {
  return (
    <video
      className="demo-video"
      controls
      playsInline
      preload="metadata"
      poster={demoAssets.video.poster || undefined}
    >
      <source src={demoAssets.video.src} type="video/mp4" />
      {demoAssets.video.captions && (
        <track
          kind="captions"
          src={demoAssets.video.captions}
          srcLang="en"
          label="English"
          default
        />
      )}
      Your browser does not support embedded video.
    </video>
  );
}

function ProofVisual({ card }) {
  const src = demoAssets.proofVisuals[card.id];

  if (!src) return null;

  return (
    <div className="demo-proof-visual demo-proof-visual-image">
      <Image
        src={src}
        alt={card.visualAlt}
        fill
        sizes="(max-width: 900px) 100vw, 33vw"
      />
    </div>
  );
}

function ResourceLink({ resource }) {
  const [title, body, href, label] = resource;
  return (
    <article className="demo-resource-card">
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      <ArrowLink href={href}>{label}</ArrowLink>
    </article>
  );
}

export default function DemoPage() {
  return (
    <div className="page-shell demo-page">
      <section className="page-hero demo-hero">
        <div className="site-container demo-hero-grid">
          <div>
            <SectionLabel>Pilot concept demo · WIP</SectionLabel>
            <h1>Payments with rules the agent cannot rewrite.</h1>
            <p className="page-hero-copy">
              Let software and AI agents pay for services with clear,
              owner-defined financial boundaries.
            </p>
            <p className="demo-hero-detail">
              <strong>One policy. Multiple payment outcomes.</strong> See an
              agent complete an approved provider payment while the owner keeps
              control of the remaining funds.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/platform" variant="secondary">
                Explore the model
              </ButtonLink>
            </div>
          </div>
          <div className="demo-hero-panel" aria-label="Demo scenario summary">
            <div className="demo-hero-panel-heading">
              <span>A policy-bound payment flow</span>
              <strong>Owner → Agent → Funds → Provider</strong>
            </div>
            <div className="demo-hero-flow">
              <div>
                <span className="demo-flow-icon">
                  <Icon name="person" size={22} />
                </span>
                <strong>Owner</strong>
                <small>Defines policy</small>
              </div>
              <span aria-hidden="true">→</span>
              <div>
                <span className="demo-flow-icon demo-flow-icon-accent">
                  <Icon name="brain" size={22} />
                </span>
                <strong>Agent</strong>
                <small>Initiates payment</small>
              </div>
              <span aria-hidden="true">→</span>
              <div>
                <span className="demo-flow-icon demo-flow-icon-policy">
                  <Icon name="shield" size={22} />
                </span>
                <strong>Funds</strong>
                <small>Enforce policy</small>
              </div>
              <span aria-hidden="true">→</span>
              <div>
                <span className="demo-flow-icon demo-flow-icon-dark">
                  <Icon name="building" size={22} />
                </span>
                <strong>Provider</strong>
                <small>Receives valid payment</small>
              </div>
            </div>
            <div className="demo-hero-panel-note">
              <Icon name="shield" size={20} />
              <span>
                <strong>Owner-defined policy travels with the funds.</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="demo-video" className="site-section demo-video-section">
        <div className="site-container">
          <div className="demo-section-heading">
            <div>
              <SectionLabel>Policy in action</SectionLabel>
              <h2>Same authority. Different result.</h2>
            </div>
            <p>
              From policy to provider payment, with owner control preserved
              throughout the flow.
            </p>
          </div>
          {demoAssets.video.src && <div className="demo-video-frame"><DemoVideo /></div>}
          <div className="demo-proof-thesis">
            <Icon name="shield" size={23} />
            <div>
              <strong>
                Useful autonomy, with policy carried through the payment flow.
              </strong>
              <p>
                For the critical comparison, use the same agent/signing
                authority twice. The approved transaction completes; the rules
                attached to the funds determine the permitted path for the
                second request.
              </p>
            </div>
          </div>
          <div className="demo-scenario-grid" aria-label="Demo scenario steps">
            {scenarioSteps.map(([number, title, body]) => (
              <div className="demo-scenario-step" key={number}>
                <span>{number}</span>
                <strong>{title}</strong>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section demo-maturity-section">
        <div className="site-container boundary">
          <div>
            <SectionLabel>Foundation</SectionLabel>
            <h2>Built across the stack</h2>
            <p className="section-intro">
              The pilot concept draws on Wallet delivery, Bitcoin Cash
              ecosystem experience, and controlled-payment research.
            </p>
          </div>
          <div className="demo-maturity-list">
            {maturityRows.map(([status, body]) => (
              <div className="demo-maturity-row" key={status}>
                <span
                  className={`status-pill demo-maturity-pill-${status.toLowerCase().replaceAll(" ", "-")}`}
                >
                  {status}
                </span>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section demo-proof-section">
        <div className="site-container">
          <SectionLabel>Value</SectionLabel>
          <h2>Autonomy with owner control</h2>
          <div className="demo-proof-grid">
            {proofCards.map((card) => (
              <article className="demo-proof-card" key={card.id}>
                <ProofVisual card={card} />
                <div className="demo-proof-card-copy">
                  <span
                    className={`demo-proof-icon demo-proof-icon-${card.tone}`}
                  >
                    <Icon name={card.icon} size={22} />
                  </span>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section demo-resources-section">
        <div className="site-container">
          <SectionLabel>Resources</SectionLabel>
          <h2>Explore the foundation</h2>
          <div className="demo-resource-grid">
            {resourceLinks.map((resource) => (
              <ResourceLink key={resource[0]} resource={resource} />
            ))}
          </div>
          {demoAssets.evidence.href && (
            <div className="demo-evidence-slot">
              <div>
                <span className="demo-evidence-label">Transaction reference</span>
                <strong>{demoAssets.evidence.title}</strong>
                <p>{demoAssets.evidence.body}</p>
              </div>
              <ArrowLink href={demoAssets.evidence.href}>
                {demoAssets.evidence.label}
              </ArrowLink>
            </div>
          )}
        </div>
      </section>

      <FinalCTA
        title="Build with OPTN"
        body="Explore OPTN Wallet, review the public implementation, or contact us about a controlled-payment pilot project."
        label="Contact us"
      />
    </div>
  );
}
