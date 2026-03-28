import Link from "next/link";
import ContactForm from "./ContactForm";

function ContactCard({ title, children }) {
  return (
    <div className="surface-panel rounded-2xl p-6 text-left hover:border-accent-primary/60 transition-colors">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <div className="mt-3 text-white/80">{children}</div>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="section text-center">
      <h2 className="text-3xl font-semibold text-center mb-3">Contact</h2>
      <p className="text-white/70 max-w-3xl mx-auto mb-10 text-sm leading-6 md:text-base">
        If you are building on Bitcoin Cash, send a short note about the
        product and what you need.
      </p>

      <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
        <ContactForm />

        <div className="grid grid-cols-1 gap-6">
          <ContactCard title="Good fit">
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex gap-2">
                <span className="text-accent-primary">•</span>
                <span>BCH products with a defined launch or delivery timeline</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent-primary">•</span>
                <span>Wallet, CashTokens, or covenant-related product work</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent-primary">•</span>
                <span>Projects that need hosted BCH infrastructure</span>
              </li>
            </ul>
          </ContactCard>

          <ContactCard title="When you write">
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex gap-2">
                <span className="text-accent-primary">•</span>
                <span>What you are building and whether it targets mainnet or chipnet</span>
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

      <div className="mt-10 text-sm text-white/60">
        <Link href="/policy" className="hover:underline">
          Privacy Policy
        </Link>
      </div>
    </section>
  );
}
