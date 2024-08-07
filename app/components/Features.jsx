import Image from "next/image";
import secureTransactionsSvg from "../../public/images/secure-transactions.svg";
import userFriendlySvg from "../../public/images/user-friendly.svg";
import exploreUseCasesSvg from "../../public/images/explore-use-cases.svg";

export default function Features() {
  return (
    <section id="features" className="section text-center">
      <h2 className="text-3xl font-semibold text-center mb-12">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="flex justify-center">
            <Image
              src={secureTransactionsSvg}
              alt="Secure Transactions"
              width={80}
              height={80}
            />
          </div>
          <h3 className="mt-4 text-xl font-semibold">Secure Transactions</h3>
          <p className="mt-2">
            Utilizing Bitcoin covenants to ensure secure, non-custodial
            transactions.
          </p>
        </div>
        <div className="text-center">
          <div className="flex justify-center">
            <Image
              src={userFriendlySvg}
              alt="User Friendly"
              width={80}
              height={80}
            />
          </div>
          <h3 className="mt-4 text-xl font-semibold">User Friendly</h3>
          <p className="mt-2">
            Designed with a user-friendly interface to enhance user experience.
          </p>
        </div>
        <div className="text-center">
          <div className="flex justify-center">
            <Image
              src={exploreUseCasesSvg}
              alt="Explore Use Cases"
              width={80}
              height={80}
            />
          </div>
          <h3 className="mt-4 text-xl font-semibold">Explore Use Cases</h3>
          <p className="mt-2">
            Supporting a variety of use cases including multi-party transactions
            and asset management.
          </p>
        </div>
      </div>
    </section>
  );
}
