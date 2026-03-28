export const PUBLIC_INFRA_META = {
  source: "local",
  lastUpdated: "2026-03-28",
  refreshedEveryMinutes: 10,
};

export const PUBLIC_INFRA_SERVICES = [
  {
    id: "electrum-chipnet",
    name: "Electrum Chipnet WSS",
    access: "Public endpoint",
    endpoint: "wss://electrum-chipnet.optnlabs.com",
    method: "WS",
    note: "Public secure Electrum endpoint for chipnet wallet connectivity.",
  },
  {
    id: "chaingraph",
    name: "Chaingraph",
    access: "Public endpoint",
    endpoint: "https://chaingraph.optnlabs.com/healthz",
    method: "GET",
    okStatuses: [200],
    bodyIncludes: "OK",
    note: "Public GraphQL health endpoint for chipnet chain data access.",
  },
  {
    id: "bcmr-indexer",
    name: "BCMR",
    access: "Public endpoint",
    endpoint: "https://bcmr.optnlabs.com/api/status/latest-block/",
    method: "GET",
    okStatuses: [200],
    note: "Public BCMR metadata indexer status endpoint.",
  },
  {
    id: "tokenindex",
    name: "TokenIndexer",
    access: "Public endpoint",
    endpoint: "https://tokenindex.optnlabs.com/health",
    method: "GET",
    okStatuses: [200],
    bodyIncludes: '"ok"',
    note: "Unified token API health endpoint for chipnet and mainnet datasets.",
  },
];
