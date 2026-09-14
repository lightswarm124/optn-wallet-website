import ThemedResponsiveSvg from "./ThemedResponsiveSvg";

export default function InfrastructureServiceMap() {
  return (
    <figure className="infra-service-map">
      <ThemedResponsiveSvg
        lightDesktop="/assets/images/optn-infrastructure-service-map-v4-desktop.svg"
        lightMobile="/assets/images/optn-infrastructure-service-map-v4-mobile.svg"
        darkDesktop="/assets/images/optn-infrastructure-service-map-v4-desktop-dark.svg"
        darkMobile="/assets/images/optn-infrastructure-service-map-v4-mobile-dark.svg"
        alt="Purpose-built BCH services connect directly from wallets and applications: Electrum and Chaingraph on Chipnet, TokenIndexer on Mainnet and Chipnet, BCMR on Chipnet, and IPFS for content delivery. Live availability is shown separately."
        width={1600}
        height={940}
        mobileWidth={430}
        mobileHeight={1490}
        sizes="(max-width: 900px) calc(100vw - 36px), 1200px"
      />
    </figure>
  );
}
