function RoadmapCard({ title, subtitle, items }) {
  return (
    <div className="p-6 bg-background-light text-gray-100 rounded-xl shadow-md border border-white/10 text-left">
      <div className="flex items-baseline justify-between gap-3 flex-wrap">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        {subtitle ? (
          <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
            {subtitle}
          </span>
        ) : null}
      </div>

      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-white/80">
            <span className="text-accent-primary">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Roadmap() {
  return (
    <section id="roadmap" className="section text-center">
      <h2 className="text-3xl font-semibold text-center mb-3">Roadmap</h2>
      <p className="text-white/70 max-w-2xl mx-auto mb-10">
        We’re focused on shipping developer infrastructure first, with the OPTN
        Wallet as a proving ground for covenant-ready UX and advanced
        transaction flows.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <RoadmapCard
          title="Now"
          subtitle="Available today"
          items={[
            "Production wallet foundation with covenant-focused flows",
            "Core infrastructure components running and being hardened",
            "Token metadata + app primitives integrated into real UX",
            "Developer education via blog and examples",
          ]}
        />

        <RoadmapCard
          title="Next"
          subtitle="Near-term"
          items={[
            "Docs expansion: quickstart guides and reference integrations",
            "Clear tiers for access: free usage + higher limits for teams",
            "Monitoring, status visibility, and reliability improvements",
            "More covenant templates and safer transaction building blocks",
          ]}
        />

        <RoadmapCard
          title="Later"
          subtitle="Scaling"
          items={[
            "Marketplace for covenant interfaces and reusable contract flows",
            "Partner integrations with teams building real-world apps",
            "Better developer tooling around testing, deployment, and debugging",
            "Dedicated infrastructure options for serious production workloads",
          ]}
        />
      </div>

      <div className="mt-10">
        <a href="#docs" className="text-accent-primary hover:underline">
          See Quickstart resources →
        </a>
      </div>
    </section>
  );
}
