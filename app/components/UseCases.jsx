import Image from "next/image";
import nonCustodialSvg from "../../public/images/non-custodial.svg";
import multiPartySvg from "../../public/images/multi-party.svg";
import realWorldAssetSvg from "../../public/images/real-world-asset.svg";

export default function UseCases() {
  return (
    <section id="use-cases" className="section text-center">
      <h2 className="text-3xl font-semibold text-center mb-12">Use Cases</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="flex justify-center">
            <Image
              src={nonCustodialSvg}
              alt="Non-Custodial Escrow / Cross-Chain Swap"
              width={80}
              height={80}
            />
          </div>
          <h3 className="mt-4 text-xl font-semibold">
            Non-Custodial Escrow / Cross-Chain Swap
          </h3>
          <p className="mt-2">
            Enable secure, trustless escrow services and cross-chain
            transactions without relying on third-party custodians.
          </p>
        </div>
        <div className="text-center">
          <div className="flex justify-center">
            <Image
              src={multiPartySvg}
              alt="Multi-Party Transaction"
              width={80}
              height={80}
            />
          </div>
          <h3 className="mt-4 text-xl font-semibold">
            Multi-Party Transaction
          </h3>
          <p className="mt-2">
            Facilitate complex transactions involving multiple parties, ensuring
            funds are only spent according to pre-defined conditions.
          </p>
        </div>
        <div className="text-center">
          <div className="flex justify-center">
            <Image
              src={realWorldAssetSvg}
              alt="Real-World Asset (RWA) Control"
              width={80}
              height={80}
            />
          </div>
          <h3 className="mt-4 text-xl font-semibold">
            Real-World Asset (RWA) Control
          </h3>
          <p className="mt-2">
            Manage and control real-world assets on the blockchain, ensuring
            precise and secure transfer of ownership.
          </p>
        </div>
      </div>
    </section>
  );
}
