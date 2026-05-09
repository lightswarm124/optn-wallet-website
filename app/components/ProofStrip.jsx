import Link from "next/link";

const proofItems = [
  {
    label: "Products",
    value: "OPTN Wallet and a hosted BCH stack built around the same ecosystem, including token data access.",
  },
  {
    label: "Focus",
    value: "Wallet UX for users, developer surfaces inside the wallet, and backend services for BCH apps.",
  },
  {
    label: "Support",
    value: "Direct engineering help for wallets, token systems, contract flows, and backend integrations.",
  },
];

const updateLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Wallet source", href: "https://github.com/OPTNLabs/OPTNWallet" },
  { label: "Contact", href: "#contact" },
];

export default function ProofStrip() {
  return (
    <section id="live-now" className="section">
      <div className="mx-auto max-w-6xl">
        <div className="surface-panel rounded-3xl p-6 md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold text-white">
                What we do
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/75 md:text-base">
                We build for the BCH ecosystem from three angles: end-user
                products, developer tooling, and company infrastructure.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {updateLinks.map((link) =>
                link.href.startsWith("/") ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 text-sm font-medium text-white transition-colors hover:border-accent-primary/50 hover:bg-white/10"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 text-sm font-medium text-white transition-colors hover:border-accent-primary/50 hover:bg-white/10"
                  >
                    {link.label}
                  </a>
                ),
              )}
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {proofItems.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-black/20 p-5"
              >
                <div className="text-sm font-medium text-accent-primary">
                  {item.label}
                </div>
                <div className="mt-2 text-sm leading-6 text-white/80">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
