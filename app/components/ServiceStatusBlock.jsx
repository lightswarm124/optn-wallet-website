"use client";

import { useEffect, useState } from "react";

function StatusPill({ ok, status }) {
  const className = ok
    ? "bg-emerald-400/15 text-emerald-300 border-emerald-400/25"
    : "bg-white/5 text-white/70 border-white/10";

  return (
    <span className={`rounded-full border px-3 py-1 text-xs font-medium ${className}`}>
      {status}
    </span>
  );
}

export default function ServiceStatusBlock({
  endpoint = "/api/service-status",
  title = "Live services",
  description = "A few services we run today. Status appears when the service exposes a usable health check.",
  sectionId = "services",
  columnsClassName = "md:grid-cols-3",
}) {
  const [services, setServices] = useState([]);
  const [meta, setMeta] = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetch(endpoint, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) {
          setServices(data.services || []);
          setMeta(data.meta || null);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setServices([]);
          setMeta(null);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [endpoint]);

  return (
    <section id={sectionId} className="section">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-3 text-center">
          <h2 className="text-3xl font-semibold text-white">{title}</h2>
          <p className="mx-auto max-w-2xl text-sm leading-6 text-white/70 md:text-base">
            {description}
          </p>
        </div>

        <div className={`mt-8 grid gap-6 ${columnsClassName}`}>
          {services.map((service) => {
            return (
              <div key={service.id} className="surface-panel rounded-[2rem] p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-sm text-white/65">{service.access}</p>
                  </div>
                  <StatusPill ok={service.ok} status={service.status} />
                </div>

                <p className="mt-5 text-sm leading-6 text-white/75">
                  {service.note}
                </p>

                {!service.ok && service.status === "Not configured" ? (
                  <p className="mt-3 text-xs leading-5 text-white/50">
                    This service has a health endpoint in the product, but it is
                    not exposed publicly yet.
                  </p>
                ) : null}

                <div className="mt-5">
                  <div className="text-xs font-medium uppercase tracking-[0.18em] text-white/45">
                    Endpoint
                  </div>
                  <div className="mt-2 break-all rounded-2xl border border-white/10 bg-black/20 px-4 py-3 font-mono text-xs leading-5 text-accent-primary">
                    {service.endpoint}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {meta?.lastUpdated ? (
          <div className="mt-6 flex flex-col gap-2 text-center text-xs uppercase tracking-[0.18em] text-white/45">
            <p>Registry updated {meta.lastUpdated}</p>
            {meta?.refreshedEveryMinutes ? (
              <p>Status refreshes every {meta.refreshedEveryMinutes} minutes</p>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
