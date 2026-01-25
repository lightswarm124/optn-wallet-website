import Link from "next/link";

function ContactCard({ title, children }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left hover:border-accent-primary/60 transition-colors">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <div className="mt-3 text-white/80">{children}</div>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="section text-center">
      <h2 className="text-3xl font-semibold text-center mb-3">Contact</h2>
      <p className="text-white/70 max-w-2xl mx-auto mb-10">
        Building on Bitcoin Cash and want reliable infrastructure, higher
        limits, or help shipping covenant-powered flows? Reach out—we reply
        fast.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <ContactCard title="Request access / higher limits">
          <p className="text-sm text-white/70">
            Email us with a short description of what you’re building and what
            you need (rate limits, dedicated capacity, integrations).
          </p>
          <div className="mt-4">
            <a
              href="mailto:info@optnlabs.com?subject=OPTN%20Labs%20-%20Access%20Request&body=Hi%20OPTN%20Labs%2C%0A%0AWhat%20we're%20building%3A%20%0AWhat%20we%20need%3A%20%0AExpected%20usage%20(rough)%3A%20%0ATimeline%3A%20%0A%0AThanks!"
              className="text-accent-primary hover:underline"
            >
              info@optnlabs.com →
            </a>
          </div>
        </ContactCard>

        <ContactCard title="Talk to us (fastest)">
          <p className="text-sm text-white/70">
            DM or join the community channel. This is best for quick questions,
            pairing on an integration, or early feedback.
          </p>
          <div className="mt-4 space-y-2">
            <a
              href="https://x.com/OPTNLabs"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-accent-primary hover:underline"
            >
              X (Twitter) →
            </a>
            <a
              href="https://t.me/+KLBMsVW0xHY1YWI5"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-accent-primary hover:underline"
            >
              Telegram →
            </a>
            <a
              href="https://www.linkedin.com/company/optnlabs/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-accent-primary hover:underline"
            >
              LinkedIn →
            </a>
          </div>
        </ContactCard>

        <ContactCard title="What to include">
          <p className="text-sm text-white/70">
            If you want a useful reply in one round-trip, include:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li className="flex gap-2">
              <span className="text-accent-primary">•</span>
              <span>
                What you’re building (wallet, app, token, explorer, etc.)
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent-primary">•</span>
              <span>Mainnet vs chipnet, and expected usage</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent-primary">•</span>
              <span>
                Which components you need (indexing, metadata, monitoring, etc.)
              </span>
            </li>
          </ul>

          <div className="mt-5 text-sm text-white/70">
            Or just send a link to your repo / prototype.
          </div>
        </ContactCard>
      </div>

      <div className="mt-10 text-sm text-white/60">
        <Link href="/policy" className="hover:underline">
          Privacy Policy
        </Link>
      </div>
    </section>
  );
}
