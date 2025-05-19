export default function Contact() {
  return (
    <section id="contact" className="section text-center">
      <h2 className="text-3xl font-semibold text-center mb-12">Contact Us</h2>
      <div className="text-center">
        <p className="m-4">
          For inquiries, reach out to us at:
        </p>
        <a
          href="mailto:info@optnlabs.com"
          className="text-accent-primary hover:text-accent-secondary"
        >
          info@optnlabs.com
        </a>
        <p className="m-4">
          View our open-source codebase:
        </p>
        <a
          href="https://github.com/OPTNLabs/OPTNWallet"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-primary hover:text-accent-secondary"
        >
          GitHub Repository
        </a>
      </div>
    </section>
  );
}
