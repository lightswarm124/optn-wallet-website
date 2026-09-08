import Link from "next/link";

const ctaPaths = [
  { href: "/infrastructure", label: "I need BCH infrastructure" },
  { href: "/wallet", label: "I need wallet integration" },
  { href: "/cashtokens", label: "I am building with CashTokens" },
  { href: "/covenants-on-bitcoin-cash", label: "I need covenant support" },
  {
    href: "mailto:info@optnlabs.com?subject=Partnership%20with%20OPTN%20Labs",
    label: "I want to discuss a partnership",
  },
];

function ContactCard({ title, children }) {
  return (
    <div className="surface-panel rounded-2xl p-6 text-left">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <div className="mt-3 text-white/80">{children}</div>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="mx-auto max-w-6xl">
        <div className="surface-panel rounded-[2rem] p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="text-center lg:text-left">
              <div className="section-chip mx-auto lg:mx-0">Final CTA</div>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                Build with OPTN Labs
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-base leading-7 text-white/75 md:text-lg lg:mx-0">
                Tell us what you are building, what stage you are at, and where
                you need help across wallet UX, token data, public BCH services,
                covenant patterns, or integration support.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
                {["Scope", "Design", "Build", "Launch"].map((step) => (
                  <span
                    key={step}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-white/80"
                  >
                    {step}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                {ctaPaths.map((item) =>
                  item.href.startsWith("mailto:") ? (
                    <a
                      key={item.href}
                      href={item.href}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-accent-primary/50 hover:bg-white/10"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-accent-primary/50 hover:bg-white/10"
                    >
                      {item.label}
                    </Link>
                  ),
                )}
              </div>
            </div>

            <div className="grid gap-4">
              <ContactCard title="What to send">
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex gap-2">
                    <span className="text-accent-primary">•</span>
                    <span>
                      What you are building and whether it targets mainnet or chipnet
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-primary">•</span>
                    <span>Expected usage, launch timing, and key blockers</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-primary">•</span>
                    <span>Repo links or architecture notes if you have them</span>
                  </li>
                </ul>
              </ContactCard>

              <ContactCard title="Elsewhere">
                <div className="space-y-2">
                  <a
                    href="mailto:info@optnlabs.com"
                    className="block text-accent-primary hover:underline"
                  >
                    info@optnlabs.com →
                  </a>
                  <a
                    href="https://x.com/OPTNLabs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-accent-primary hover:underline"
                  >
                    X →
                  </a>
                  <a
                    href="https://t.me/+KLBMsVW0xHY1YWI5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-accent-primary hover:underline"
                  >
                    Telegram →
                  </a>
                </div>
              </ContactCard>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-white/60">
          <Link href="/policy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </section>
  );
}
