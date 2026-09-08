import dynamic from "next/dynamic";

const ScreenshotCarouselClient = dynamic(
  () => import("./ScreenshotCarouselClient"),
  { ssr: false },
);

export default function ScreenshotCarousel() {
  const images = [
    "/assets/images/OPTNWelcome3.png",
    "/assets/images/OPTNWelcome1.png",
    "/assets/images/fundme.png",
    "/assets/images/memocash.png",
  ];

  return (
    <section id="proof" className="section">
      <div className="mx-auto max-w-6xl">
        <div className="surface-panel rounded-[2rem] p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <div className="min-w-0">
              <div className="section-chip">Built from real BCH product work</div>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                The stack starts with working product foundations
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/75">
                OPTN Wallet, TokenIndexer, public BCH services, and builder
                notes give teams concrete starting points instead of a blank
                repo.
              </p>

              <div className="mt-6 grid gap-3">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-white/75">
                  <span className="text-accent-primary font-medium">OPTN Wallet:</span>{" "}
                Reference implementation for BCH wallet UX, CashTokens, app
                  connections, and advanced transaction flows.
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-white/75">
                  <span className="text-accent-primary font-medium">TokenIndexer:</span>{" "}
                  Token balances, holders, metadata, and app-facing APIs.
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-white/75">
                  <span className="text-accent-primary font-medium">Public surface:</span>{" "}
                  Public BCH services, technical posts, and infrastructure
                  endpoints that teams can evaluate before they engage.
                </div>
              </div>
            </div>

            <div className="min-w-0 overflow-hidden">
              <ScreenshotCarouselClient images={images} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
