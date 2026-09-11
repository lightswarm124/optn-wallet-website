import Link from "next/link";

export function SectionLabel({ children }) {
  return <p className="section-label">{children}</p>;
}

export function ArrowLink({ href, children }) {
  return <Link href={href} className="arrow-link">{children}<span aria-hidden="true">→</span></Link>;
}

export function ButtonLink({ href, children, variant = "primary" }) {
  const className = `button ${variant === "secondary" ? "button-secondary" : ""}`;
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  return isExternal ? (
    <a href={href} className={className}>{children}<span aria-hidden="true">→</span></a>
  ) : (
    <Link href={href} className={className}>{children}<span aria-hidden="true">→</span></Link>
  );
}

export function Icon({ name, size = 28 }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    person: <><circle cx="12" cy="7" r="3" {...common} /><path d="M4.5 20c.8-3.7 3.4-5.5 7.5-5.5s6.7 1.8 7.5 5.5" {...common} /></>,
    stack: <><ellipse cx="12" cy="6" rx="7" ry="3" {...common} /><path d="M5 6v5c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 11v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" {...common} /></>,
    route: <><path d="M5 5h4v4H5zM15 15h4v4h-4z" {...common} /><path d="M9 7h4a3 3 0 0 1 3 3v5M15 17h-3a3 3 0 0 1-3-3V9" {...common} /></>,
    shield: <><path d="M12 3l7 3v5c0 4.5-2.8 7.8-7 10-4.2-2.2-7-5.5-7-10V6l7-3z" {...common} /><path d="m8.5 12 2.2 2.2 4.8-5" {...common} /></>,
    brain: <><path d="M9.4 5.1A3.2 3.2 0 0 0 4 7.5a3.1 3.1 0 0 0 .2 1.1A3.7 3.7 0 0 0 5 15.8a3.2 3.2 0 0 0 5 2.1V5.1zM14.6 5.1A3.2 3.2 0 0 1 20 7.5a3.1 3.1 0 0 1-.2 1.1 3.7 3.7 0 0 1-.8 7.2 3.2 3.2 0 0 1-5 2.1V5.1z" {...common} /><path d="M9 9h3M15 9h-3M9 13h3M15 13h-3" {...common} /></>,
    building: <><path d="M4 21V7l8-4 8 4v14M2 21h20M8 10h1M8 14h1M8 18h1M15 10h1M15 14h1M15 18h1" {...common} /></>,
    cube: <><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3zM4.5 7.7 12 12l7.5-4.3M12 12v9" {...common} /></>,
    wallet: <><path d="M4 6.5h14a2 2 0 0 1 2 2V19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" {...common} /><path d="M3 8V6a2 2 0 0 1 2-2h11M16 12h4v4h-4a2 2 0 0 1 0-4z" {...common} /></>,
    code: <><path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" {...common} /></>,
    gear: <><circle cx="12" cy="12" r="3" {...common} /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.8 1.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5v.2h-2.6v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1-1.8-1.8.1-.1A1.7 1.7 0 0 0 8 15a1.7 1.7 0 0 0-1.5-1H6v-2.6h.5A1.7 1.7 0 0 0 8 10a1.7 1.7 0 0 0-.3-1.9l-.1-.1 1.8-1.8.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5v-.2H15v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.8 1.8-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.2V14h-.2a1.7 1.7 0 0 0-1.5 1z" {...common} /></>,
    check: <><circle cx="12" cy="12" r="9" {...common} /><path d="m8 12 2.5 2.5L16 9" {...common} /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">{paths[name] || paths.route}</svg>;
}

export function PolicyGraphic({ compact = false }) {
  return (
    <div className={`policy-graphic ${compact ? "policy-graphic-compact" : ""}`}>
      <div className="policy-heading"><strong>Illustrative policy</strong><span>Not a live deployment</span></div>
      <div className="policy-rule"><Icon name="person" /><div><strong>Approved recipient</strong><small>api.provider.com</small></div></div>
      <div className="policy-rule"><Icon name="stack" /><div><strong>Payment limit</strong><small>0.25 BCH per payment</small></div></div>
      <div className="policy-rule"><Icon name="shield" /><div><strong>Owner recovery</strong><small>Return to owner</small></div></div>
      <div className="policy-result"><Icon name="check" size={28} /><div><strong>Allowed under this policy</strong><small>Transaction meets all rules</small></div></div>
    </div>
  );
}

export function ArchitectureGraphic() {
  return (
    <div className="architecture-graphic">
      <div className="architecture-node"><Icon name="code" size={25} /><div><strong>Your application</strong><small>Requests an action</small></div></div>
      <div className="architecture-arrow">↓</div>
      <div className="architecture-node architecture-node-middle"><Icon name="stack" size={25} /><div><strong>OPTN coordination</strong><small>Resolves policy and constructs the path</small></div></div>
      <div className="architecture-arrow">↓</div>
      <div className="architecture-node architecture-node-dark"><Icon name="shield" size={25} /><div><strong>Covenant enforcement</strong><small>Accepts only permitted outcomes</small></div></div>
      <p>Illustrative architecture. Not a live deployment.</p>
    </div>
  );
}

export function EngineeringGraphic() {
  return (
    <div className="engineering-graphic">
      <div className="architecture-node"><Icon name="wallet" size={25} /><div><strong>Your product or wallet</strong><small>The experience you want to ship</small></div></div>
      <div className="architecture-arrow">↓</div>
      <div className="architecture-node architecture-node-middle"><Icon name="stack" size={25} /><div><strong>BCH transaction layer</strong><small>Tokens · rules · transaction design</small></div></div>
      <div className="architecture-arrow">↓</div>
      <div className="architecture-node"><Icon name="cube" size={25} /><div><strong>Ready-to-use integration</strong><small>Wallets, services, and real workflows</small></div></div>
      <p>Illustrative engineering path</p>
    </div>
  );
}

export function FlowSteps({ steps, className = "" }) {
  return (
    <div className={`flow-steps ${className}`}>
      {steps.map((step, index) => (
        <div className="flow-step" key={step.title}>
          <span className="step-number">{index + 1}</span>
          <div><strong>{step.title}</strong><p>{step.body}</p></div>
          {index < steps.length - 1 && <span className="flow-arrow" aria-hidden="true">→</span>}
        </div>
      ))}
    </div>
  );
}

export function Offer({ eyebrow, title, price, body, href, label }) {
  return (
    <div className="offer">
      <span className="status-pill">{eyebrow}</span>
      <h3>{title}</h3>
      <strong className="offer-price">{price}</strong>
      <p>{body}</p>
      <ArrowLink href={href}>{label}</ArrowLink>
    </div>
  );
}

export function FinalCTA({ title = "Have a workflow to deploy?", body = "Tell us what you are building. We will help scope the right path.", label = "Talk to OPTN", href = "mailto:info@optnlabs.com?subject=OPTN%20Labs%20workflow%20inquiry" }) {
  return (
    <section className="site-container final-cta">
      <div><h2>{title}</h2><p>{body}</p></div>
      <ButtonLink href={href}>{label}</ButtonLink>
    </section>
  );
}
