import { Icon } from "./SitePrimitives";

export default function NftCommitmentTransition() {
  return (
    <figure className="nft-transition" aria-labelledby="nft-transition-caption">
      <div className="nft-transition-heading">
        <div>
          <span className="nft-transition-eyebrow">A mutable NFT</span>
          <strong>One token. A new state.</strong>
        </div>
        <span className="nft-transition-category">Same category</span>
      </div>

      <div className="nft-transition-track">
        <div className="nft-transition-state">
          <span className="nft-transition-label">Before</span>
          <span className="nft-transition-token" aria-hidden="true">
            <Icon name="cube" size={22} />
            <span>NFT</span>
          </span>
          <span className="nft-transition-capability">Mutable</span>
          <span className="nft-transition-value-label">Commitment · example bytes</span>
          <code>0x01</code>
        </div>

        <div className="nft-transition-spend" aria-label="Spend transaction creates one successor">
          <span className="nft-transition-arrow" aria-hidden="true">→</span>
          <strong>Spend</strong>
          <small>One successor</small>
        </div>

        <div className="nft-transition-state nft-transition-state-next">
          <span className="nft-transition-label">After</span>
          <span className="nft-transition-token" aria-hidden="true">
            <Icon name="cube" size={22} />
            <span>NFT</span>
          </span>
          <span className="nft-transition-capability">Mutable</span>
          <span className="nft-transition-value-label">Commitment · example bytes</span>
          <code>0x02</code>
        </div>
      </div>

      <figcaption id="nft-transition-caption" className="nft-transition-caption">
        A mutable NFT can recreate one successor with a different commitment.
        An immutable NFT must keep its existing commitment when spent.
      </figcaption>
      <p className="nft-transition-note">
        Example bytes only. Commitment data is application-defined; BCH validates
        the token transition.
      </p>
    </figure>
  );
}
