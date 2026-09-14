# OPTN Labs website visual-aids handoff

Updated: 2026-09-13

Use this brief alongside `content-map.md` and `content/current-copy.en.md` when reviewing or generating additional website visuals. The product-story and availability statements in those files remain authoritative.

## Existing assets and what they show

### OPTN Wallet screenshots

`public/screenshots/` in this website repository contains eight Android UI captures, all 361 × 749 pixels, captured on 2025-05-11. The separate `/home/lightswarm/projects/OPTNWallet/public/` directory contains brand artwork and app icons, not in-app screen captures. One of the website screenshots is byte-for-byte identical to a screenshot on the [official Google Play listing](https://play.google.com/store/apps/details?id=optn.wallet.app):

| File | Screen | Notes |
| --- | --- | --- |
| `IMG_20250511_111157.png` | Airdrop recipient setup | Manual and token-based recipient entry, paste/scan actions. |
| `IMG_20250511_111230.png` | Receive | QR code, BCH address, address-format controls. |
| `IMG_20250511_111248.png` | Actions | Basic/advanced actions, including send, receive, scan QR, new address, and mint tokens. |
| `IMG_20250511_111300.png` | Assets overview | BCH balance, CashToken holdings, and vault workspace. |
| `IMG_20250511_111312.png` | Wallet home | Portfolio balance, quick actions, and recent activity. |
| `IMG_20250511_111327.png` | CashTokens | Fungible-token and NFT holdings. |
| `IMG_20250511_111344.png` | Browse apps | App categories and connected app cards. |
| `IMG_20250511_111358.png` | Transfer | BCH/token/Airdrops modes, recipient and amount entry, review action. |

The Home hero uses a small collage of the app browser, actions, and airdrop screens. The Wallet hero is text-led; its eight-screen manual carousel is the Wallet page's single area for app-screen imagery. The carousel has captions, previous/next controls, pagination, and keyboard navigation, and does not autoplay. The Wallet page's stack section is text and useful links rather than repeated brand artwork. About uses the authentic Wallet home capture as a compact proof image and links visitors directly to the public Google Play listing. The listing is the current public verification surface; private store-console dashboards and their metrics are not website proof assets.

**Before production deployment, review these captures for freshness and privacy.** The set is over a year old. Several images show balances, token/NFT holdings, recent activity, a QR code, or an address. Confirm that the displayed account and activity data are deliberately public/demo material and that the UI still represents the current shipped Wallet; replace or redact captures if either condition is not met. Do not assume an address or balance is harmless merely because a private key is absent.

### Brand, product, and team assets

- `public/assets/images/OPTNWelcome1.png`: OPTN wordmark; used in the shared header/footer.
- `public/assets/images/OPTNUIkeyline.png` and `OPTNUIkeyline2.png`: compact OPTN marks. Byte-identical copies also exist under `public/images/`; use the `assets/images` paths already used by the site rather than creating another copy.
- `public/assets/images/OPTNWelcome2.png` and `OPTNWelcome3.png`: larger “Pay, Your Way” brand artwork already used on the Wallet page.
- `public/assets/images/team/jerry-qian.jpg` and `kyle-wildeman.png`: founder photos already used on About.
- `fundme.png`, `cauldron.png`, `cauldron-header-logo.png`, `memocash.png`, and `paryonusd.png` are present but not currently used by the refreshed pages. Do not add them as partner/customer logos without confirming their intended relationship and public-use context. The FundMe image is a mascot-style mark, not a clearly legible wordmark at small sizes.
- The legacy feature artwork and icons in `public/images/` (`explore-use-cases.svg`, `multi-party.svg`, `non-custodial.svg`, `real-world-asset.svg`, `secure-transactions.svg`, `user-friendly.svg`, and `EnterIcon1/2.png`) are not currently referenced by the refreshed page source. Review their original context and claims before reusing them.

## Visual aids in the current implementation

Prioritize aids that explain product relationships or transaction behavior. The site now combines responsive SVG artwork with native React/CSS visuals; treat all labels and scope notes as factual content, not decoration.

1. **Mutable NFT commitment transition — `/cashtokens`.** The current React/CSS hero visual shows one token-bearing state before and after a spend: same category, mutable capability, one successor, and example commitment bytes changing from `0x01` to `0x02`. It separately notes that an immutable NFT must retain its existing commitment. These bytes are illustrative/application-defined; do not imply they are a BCMR record, a covenant rule, or a universal application schema. BCH validates the token transition. Its colors use the site's theme variables, so the card surfaces and text adapt to light and dark modes. The newly submitted v4-final SVG pair is not adopted: its mobile version looks clear, but the desktop validation-card note “Not every CashToken spend uses a covenant” exceeds the card width and is clipped. Keep the current visual until that is fixed.
2. **Service-by-job map — `/infrastructure`.** Responsive desktop/mobile SVGs have matched light/dark variants and start with wallets and applications, then separate Electrum connectivity, Chaingraph queries, TokenIndexer token data, BCMR metadata resolution, and IPFS content delivery. Light mode uses the deeper evergreen panel sampled from the Home visual (`#073D35`); dark mode keeps its separate dark-site palette. Service roles and public network scopes were cross-checked against the architecture repository; internal hostnames, IPs, ports, and network topology are intentionally omitted. Endpoint scope is shown conservatively (including Chipnet-only surfaces); current availability belongs in the live status section below the map.
3. **Wallet proof tile — `/about`.** Use the authentic Wallet home screenshot and a direct link to the public Google Play listing. Do not use private store-console dashboards or publish metrics from them. Do not add unsupported product or company traction claims. Other product cards should describe scope and maturity only, without unsupported metrics.
4. **Product-and-stack map — Home.** The responsive v4-final SVG pair has matched light/dark variants and is implemented in the Home story section. It shows Use → Build → Control → Work, with shipped/available/in-development states visible in the artwork. The active variant follows the site's saved theme, with an early theme bootstrap to avoid showing a light canvas on dark-mode page load. A separate accessible HTML link row routes Wallet, Developers, Infrastructure, Platform, and Engineering; the SVG itself is not clickable. The covenant note remains inside the Control card and limits enforcement to BCH/CashToken funds deliberately placed under covenant control.

Avoid generating a generic blockchain/coin background, invented customer logos, founder portraits, fabricated wallet screens, token prices/balances, or security badges. Real product UI should come from the supplied screenshots. Keep the approved `Use → Build → Control → Work` story, but public labels should continue to say **programmable payments** where appropriate and clearly mark that platform as **in development**.

## ChatGPT review brief: redesigns plus generated visuals

The next review should consider the design of the current website as a whole, not just produce a list of diagrams. ChatGPT should identify the highest-value page or section redesigns, explain the visitor problem each solves, and then create the visual assets or visual aids that belong to those proposed redesigns. Do not stop at describing an idea or writing an image-generation prompt: generate and return the actual image/mockup/visual artifact for each recommendation where image generation is available.

Keep the work to a small, prioritized first pass (up to three redesign concepts). For each concept, provide:

1. The route and exact section, current design/content problem, target visitor takeaway, and proposed layout/composition.
2. Which existing OPTN assets or screenshots to reuse, move, crop, or pair with the design. Treat supplied product screenshots as the source of truth; never recreate wallet UI with an image model.
3. The actual generated deliverable(s): a page/section mockup and any distinct illustration or visual aid needed to realize it. Give each a suggested filename, format, dimensions/aspect ratio, placement, and useful alt text. If a visual is better as a precise, editable diagram, provide complete SVG or implementation-ready HTML/CSS/React source rather than rasterizing technical labels.
4. Any responsive variants/cropping guidance, accessibility considerations, and a short explanation of how each asset supports the page story rather than decorating it.
5. Factual source and maturity/custody caveats for every product-specific claim shown in the visual; flag uncertainties instead of inventing details.

Generated visuals should use OPTN's existing dark-green/mint visual language and typography, and feel like part of the actual site. Avoid generic crypto imagery, fabricated wallet screens or balances, invented logos/partners/customers, security badges, fake metrics, and text-heavy image generation. Use generated imagery for atmospheric/editorial illustration only; keep important text and precise technical relationships editable in the website. Do not implement a proposed redesign in the repo during this review—the concepts and generated assets are for human review first.

The attached Hyperliquid-style BCH trading-venue assessment is a speculative technical concept, not a description of an OPTN product or current website capability. It may inform a clearly labeled future-use-case concept only if that helps explain bounded authority; do not redesign the site around a perpetuals exchange or present off-chain matching, margin, proof systems, trading, or settlement features as shipped, available, or committed. The approved public story and source-copy catalog remain authoritative.

## Copy-ready prompt for ChatGPT

> Review `VISUAL_AIDS_HANDOFF.md`, `content-map.md`, `content/current-copy.en.md`, and the current website. Recommend up to three high-value page or section redesigns that make the site clearer and more visually engaging while preserving the approved company story, page roles, and product-maturity boundaries. For each recommendation, explain the visitor problem, route/section, target takeaway, proposed layout, and which native OPTN assets/screenshots should be used. Then generate the actual corresponding visual deliverable(s)—including a representative page/section mockup and any needed illustration or visual aid—not just descriptions or image prompts. Return generated assets as downloadable files where possible, with suggested filenames, formats, dimensions, placement, alt text, and responsive/cropping guidance. For technical diagrams, prefer complete editable SVG or implementation-ready HTML/CSS/React with precise labels over raster images. Use OPTN’s dark-green/mint palette and existing typography. Do not fabricate wallet UI, balances, partners, logos, metrics, or product capabilities; the 2025 Wallet screenshots are real but require the privacy/freshness review described above, and must never be recreated or altered. Keep UTXO state, transaction construction, covenant validation, and BCMR display metadata distinct. Clearly state that programmable payments are in development and that covenant enforcement applies only to BCH/CashToken funds deliberately placed under covenant control. Do not use private store-console material as public proof. Treat the attached Hyperliquid-style trading-venue proposal as speculative future-use-case context only, not an OPTN product, roadmap commitment, or basis for positioning the current website as a trading venue. Cite the source for every product-specific claim and flag uncertainties. Provide concepts and generated assets for review only; do not implement the redesign in the repo.
