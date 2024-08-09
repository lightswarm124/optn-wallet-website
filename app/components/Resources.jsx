export default function Resources() {
  return (
    <section id="resources" className="section text-center gradient-section-dark-to-light">
      <h2 className="text-3xl font-semibold text-center mb-12">Additional Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-4 bg-background-light text-gray-100 rounded-lg shadow-md">
          <a
            href="https://covenants.info/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-primary hover:text-accent-secondary"
          >
            Bitcoin Covenants Info
          </a>
        </div>
        <div className="p-4 bg-background-light text-gray-100 rounded-lg shadow-md">
          <a
            href="https://cashscript.org/docs/guides/covenants"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-primary hover:text-accent-secondary"
          >
            CashScript Covenants Guide
          </a>
        </div>
        <div className="p-4 bg-background-light text-gray-100 rounded-lg shadow-md">
          <a
            href="https://www.ledger.com/academy/glossary/bitcoin-covenants"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-primary hover:text-accent-secondary"
          >
            Ledger Academy: Bitcoin Covenants
          </a>
        </div>
        <div className="p-4 bg-background-light text-gray-100 rounded-lg shadow-md">
          <a
            href="https://github.com/CashScript/cashscript/tree/master/examples"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-primary hover:text-accent-secondary"
          >
            CashScript Examples
          </a>
        </div>
      </div>
    </section>
  );
}
