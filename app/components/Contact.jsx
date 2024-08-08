export default function Contact() {
  return (
    <section id="contact" className="section text-center">
      <h2 className="text-3xl font-semibold text-center mb-12">Contact Us</h2>
      <div className="text-center">
        <p className="mb-4">
          Join our Telegram group for the latest updates and support:
        </p>
        <a
          href="https://t.me/+KLBMsVW0xHY1YWI5"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-primary hover:text-accent-secondary"
        >
          Telegram Group
        </a>
        <p className="mt-4">
          Check out our GitHub repository for the latest code and documentation:
        </p>
        <a
          href="https://github.com/BitcoinBay/OPTNWallet"
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
