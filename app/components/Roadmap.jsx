export default function Roadmap() {
  return (
    <section id="roadmap" className="section text-center">
      <h2 className="text-3xl font-semibold text-center mb-12">
        Product Roadmap
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-background-light text-gray-100 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">
            Phase 1: Development and Testing
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Develop covenant transactions on Bitcoin Cash (BCH)</li>
            <li>Explore initial covenant use cases</li>
            <li>Non-custodial escrow / cross-chain swap</li>
            <li>Set up multi-party transaction</li>
          </ul>
        </div>
        <div className="p-6 bg-background-light text-gray-100 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">
            Phase 2: Expansion and Integration
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Extend support to Bitcoin Core (BTC)</li>
            <li>Integrate Ethereum (ETH) and other EVM-compatible chains</li>
            <li>Conduct beta testing and gather feedback</li>
            <li>Establish foundational wallet features and user interface</li>
          </ul>
        </div>
        <div className="p-6 bg-background-light text-gray-100 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">
            Phase 3: Broader Adoption
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Develop marketplace for user-friendly covenant interfaces</li>
            <li>On-board initial retail / B2B users for feedback</li>
            <li>
              Get pilot projects to explore real world asset (RWA) control
            </li>
            <li>
              Provide supporting blockchain infrastructure for wallet features
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
