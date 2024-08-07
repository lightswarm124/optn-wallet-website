export default function Testimonials() {
  return (
    <section className="testimonials py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary-color mb-8">
          What Our Users Say
        </h2>
        <div className="testimonial-item px-4">
          <p className="testimonial-quote text-lg italic mb-4">
            "CryptoWallet is the best wallet I've ever used! It's secure, easy,
            and reliable."
          </p>
          <p className="testimonial-author font-semibold text-primary-color">
            - Happy Customer
          </p>
        </div>
        <div className="testimonial-item px-4 mt-8">
          <p className="testimonial-quote text-lg italic mb-4">
            "Secure, reliable, and easy to use. It has revolutionized how I
            handle my digital assets."
          </p>
          <p className="testimonial-author font-semibold text-primary-color">
            - Crypto Enthusiast
          </p>
        </div>
      </div>
    </section>
  );
}
