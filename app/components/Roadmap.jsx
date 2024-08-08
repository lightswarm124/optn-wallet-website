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
            <li>Develop covenant transactions on Bitcoin Cash (BCH).</li>
            <li>Explore initial test use cases:</li>
            <li>Non-custodial escrow / cross-chain swap.</li>
            <li>Multi-party transaction.</li>
          </ul>
        </div>
        <div className="p-6 bg-background-light text-gray-100 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">
            Phase 2: Expansion and Integration
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Extend support to Bitcoin Core (BTC).</li>
            <li>
              Develop marketplace for user-friendly transaction interfaces and
              flows.
            </li>
            <li>Conduct extensive testing and gather user feedback.</li>
            <li>Establish foundational wallet features and user interface.</li>
          </ul>
        </div>
        <div className="p-6 bg-background-light text-gray-100 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">
            Phase 3: Broader Adoption
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Integrate Ethereum (ETH) and other EVM-compatible chains.</li>
            <li>
              On-board initial B2B users and clients for feedback and iterative
              improvements.
            </li>
            <li>Real-world asset (RWA) control.</li>
            <li>
              Launch marketing campaign to attract individual and institutional
              users.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
