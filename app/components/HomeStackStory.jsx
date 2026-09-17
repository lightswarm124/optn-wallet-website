import { ArrowLink } from "./SitePrimitives";
import ThemedResponsiveSvg from "./ThemedResponsiveSvg";

const destinations = [
  ["/wallet", "Use: OPTN Wallet"],
  ["/ecosystem", "Explore: ecosystem resources"],
  ["/ecosystem#infrastructure", "Explore: BCH infrastructure"],
  ["/platform", "Control: programmable payments"],
  ["/engineering", "Work: scoped Engineering"],
];

export default function HomeStackStory() {
  return (
    <div className="home-stack-story">
      <figure className="home-stack-story-figure">
        <ThemedResponsiveSvg
          lightDesktop="/assets/images/optn-home-stack-story-v4-final-desktop.svg"
          lightMobile="/assets/images/optn-home-stack-story-v4-final-mobile.svg"
          darkDesktop="/assets/images/optn-home-stack-story-v4-final-desktop-dark.svg"
          darkMobile="/assets/images/optn-home-stack-story-v4-final-mobile-dark.svg"
          alt="OPTN Labs progression from OPTN Wallet through developer resources, BCH infrastructure, programmable payments, and Engineering. Covenant enforcement applies only to BCH and CashToken funds deliberately placed under covenant control."
          width={1600}
          height={900}
          mobileWidth={375}
          mobileHeight={1280}
          sizes="100vw"
        />
      </figure>
      <nav className="home-stack-story-nav" aria-label="Explore OPTN products and services">
        {destinations.map(([href, label]) => (
          <ArrowLink href={href} key={href}>{label}</ArrowLink>
        ))}
      </nav>
    </div>
  );
}
