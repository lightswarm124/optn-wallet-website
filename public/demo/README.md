# OPTN demo assets

This directory is the upload location for the investor-facing product demo at
`/demo`. Keep the final media here so the page can serve it as a versioned,
first-party asset.

The copy and layout review pack is in `content/demo-page-review.en.md`.

## Recommended files

- `optn-financial-coordination-demo.mp4` — the 2-minute proof video
- `optn-financial-coordination-demo-poster.webp` — video poster frame
- `optn-financial-coordination-demo.vtt` — English captions
- `allowed-payment.webp` — proof-card visual
- `policy-boundary.webp` — proof-card visual
- `owner-recovery.webp` — proof-card visual

After uploading, set the paths in `demoAssets` near the top of
`app/demo/page.jsx`. For example:

```js
video: {
  src: "/demo/optn-financial-coordination-demo.mp4",
  poster: "/demo/optn-financial-coordination-demo-poster.webp",
  captions: "/demo/optn-financial-coordination-demo.vtt",
},
proofVisuals: {
  allowed: "/demo/allowed-payment.webp",
  policy: "/demo/policy-boundary.webp",
  recovery: "/demo/owner-recovery.webp",
},
evidence: {
  href: "https://your-verified-explorer-or-proof-link",
},
```

The video should show the owner funding the protected path, the policy defining
the approved provider and maximum amount, the same agent/signing authority
completing the approved payment, and that same authority failing on a different
recipient or excessive amount. Keep the evidence block unset until a specific
public transaction or reproducible test vector has been verified.

Use web-optimized media, captions, descriptive alt text, and no wallet keys,
seed phrases, real signing credentials, or sensitive customer data in the
recording or screenshots.
