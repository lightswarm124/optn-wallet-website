import {
  PUBLIC_INFRA_META,
  PUBLIC_INFRA_SERVICES,
} from "@/lib/publicInfraServices";
import { unstable_cache } from "next/cache";

const SERVICES = [
  {
    id: "electrum-chipnet",
    name: "Electrum Chipnet",
    access: "Public endpoint",
    endpoint: "wss://electrum-chipnet.optnlabs.com",
    method: "WS",
    note: "Wallet connectivity for chipnet testing.",
  },
  {
    id: "chaingraph",
    name: "Chaingraph",
    access: "Public endpoint",
    endpoint: "https://chaingraph.optnlabs.com/healthz",
    method: "GET",
    note: "GraphQL access for blockchain queries and application data lookups.",
  },
  {
    id: "tokenindex",
    name: "TokenIndexer",
    access: "Public endpoint",
    endpoint:
      process.env.TOKENINDEX_STATUS_URL ||
      "https://tokenindex.optnlabs.com/health",
    method: "GET",
    note: "Token data API for balances, holders, and metadata.",
  },
];

function resolveProbe(service) {
  switch (service.id) {
    case "electrum-chipnet":
      return service.endpoint;
    case "chaingraph":
      return "https://chaingraph.optnlabs.com/healthz";
    case "bcmr-indexer":
      return "https://bcmr.optnlabs.com/api/status/latest-block/";
    case "tokenindex":
      return service.endpoint;
    default:
      return service.endpoint;
  }
}

async function fetchWithTimeout(url, options = {}, timeoutMs = 3500) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      cache: "no-store",
    });
    return response;
  } finally {
    clearTimeout(timer);
  }
}

async function resolveStatus(service) {
  const probeUrl = resolveProbe(service);

  if (!probeUrl) {
    return {
      ...service,
      status: "Not configured",
      ok: false,
    };
  }

  try {
    if (service.method === "WS") {
      const response = await checkElectrumServer(probeUrl);
      return {
        ...service,
        status: response.ok ? "Online" : "Unavailable",
        ok: response.ok,
      };
    }

    const response = await fetchWithTimeout(probeUrl, {
      method: service.method,
    });
    const okStatuses = service.okStatuses || [200];
    const statusOk = okStatuses.includes(response.status);

    if (!statusOk) {
      return {
        ...service,
        status: `Issue (${response.status})`,
        ok: false,
      };
    }

    if (service.bodyIncludes) {
      const body = await response.text();
      const bodyOk = body.includes(service.bodyIncludes);

      return {
        ...service,
        status: bodyOk ? "Online" : "Issue (unexpected response)",
        ok: bodyOk,
      };
    }

    return {
      ...service,
      status: "Online",
      ok: true,
    };
  } catch {
    return {
      ...service,
      status: "Unavailable",
      ok: false,
    };
  }
}

async function checkElectrumServer(url) {
  return new Promise((resolve) => {
    const ws = new WebSocket(url);
    const timer = setTimeout(() => {
      try {
        ws.close();
      } catch {}
      resolve({ ok: false });
    }, 3500);

    ws.addEventListener("open", () => {
      ws.send(
        JSON.stringify({
          jsonrpc: "2.0",
          id: 1,
          method: "server.version",
          params: ["optnlabs-status", ["1.4", "1.4"]],
        }),
      );
    });

    ws.addEventListener("message", (event) => {
      clearTimeout(timer);
      try {
        const payload = JSON.parse(String(event.data));
        resolve({ ok: Boolean(payload?.result) });
      } catch {
        resolve({ ok: false });
      } finally {
        try {
          ws.close();
        } catch {}
      }
    });

    ws.addEventListener("error", () => {
      clearTimeout(timer);
      resolve({ ok: false });
    });
  });
}

const getDefaultStatuses = unstable_cache(
  async () => Promise.all(SERVICES.map(resolveStatus)),
  ["service-status-default"],
  { revalidate: 600 },
);

const getPublicInfraStatuses = unstable_cache(
  async () => {
    const statuses = await Promise.all(
      PUBLIC_INFRA_SERVICES.map(resolveStatus),
    );
    return {
      services: statuses,
      meta: {
        lastUpdated: PUBLIC_INFRA_META.lastUpdated,
        scope: "public-infra",
        refreshedEveryMinutes: PUBLIC_INFRA_META.refreshedEveryMinutes,
      },
    };
  },
  ["service-status-public-infra"],
  { revalidate: 600 },
);

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const scope = searchParams.get("scope");

  if (scope === "public-infra") {
    try {
      return Response.json(await getPublicInfraStatuses());
    } catch {
      return Response.json({
        services: [],
        meta: {
          lastUpdated: null,
          scope: "public-infra",
          unavailable: true,
          refreshedEveryMinutes: 10,
        },
      });
    }
  }

  const statuses = await getDefaultStatuses();
  return Response.json({
    services: statuses,
    meta: { scope: "default", refreshedEveryMinutes: 10 },
  });
}
